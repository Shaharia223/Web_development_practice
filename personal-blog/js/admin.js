document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('postForm');
    form.addEventListener('submit', handleSubmit);
    loadManagePosts();
});

function handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    fetch('api/create_post.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById('message');
        
        if (data.success) {
            messageDiv.className = 'message success';
            messageDiv.textContent = 'Post published successfully!';
            e.target.reset();
            loadManagePosts();
        } else {
            messageDiv.className = 'message error';
            messageDiv.textContent = data.message || 'Error publishing post.';
        }
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    })
    .catch(error => {
        console.error('Error:', error);
        const messageDiv = document.getElementById('message');
        messageDiv.className = 'message error';
        messageDiv.textContent = 'Error connecting to server.';
    });
}

function loadManagePosts() {
    fetch('api/get_posts.php')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('managePosts');
            
            if (data.success && data.posts.length > 0) {
                container.innerHTML = '';
                data.posts.forEach(post => {
                    const postItem = createManagePostElement(post);
                    container.appendChild(postItem);
                });
            } else {
                container.innerHTML = '<p class="loading">No posts available.</p>';
            }
        })
        .catch(error => {
            console.error('Error loading posts:', error);
            document.getElementById('managePosts').innerHTML = 
                '<p class="loading">Error loading posts.</p>';
        });
}

function createManagePostElement(post) {
    const div = document.createElement('div');
    div.className = 'manage-post-item';
    
    const info = document.createElement('div');
    info.innerHTML = `<strong>${post.title}</strong><br><small>${formatDate(post.created_at)}</small>`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-delete';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => deletePost(post.id);
    
    div.appendChild(info);
    div.appendChild(deleteBtn);
    
    return div;
}

function deletePost(postId) {
    if (!confirm('Are you sure you want to delete this post?')) {
        return;
    }
    
    const formData = new FormData();
    formData.append('id', postId);
    
    fetch('api/delete_post.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById('message');
        
        if (data.success) {
            messageDiv.className = 'message success';
            messageDiv.textContent = 'Post deleted successfully!';
            loadManagePosts();
        } else {
            messageDiv.className = 'message error';
            messageDiv.textContent = data.message || 'Error deleting post.';
        }
        
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}