document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
});

function loadPosts() {
    fetch('api/get_posts.php')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('postsContainer');
            
            if (data.success && data.posts.length > 0) {
                container.innerHTML = '';
                data.posts.forEach(post => {
                    const postElement = createPostElement(post);
                    container.appendChild(postElement);
                });
            } else {
                container.innerHTML = '<p class="loading">No posts available yet.</p>';
            }
        })
        .catch(error => {
            console.error('Error loading posts:', error);
            document.getElementById('postsContainer').innerHTML = 
                '<p class="loading">Error loading posts. Please try again later.</p>';
        });
}

function createPostElement(post) {
    const article = document.createElement('article');
    article.className = 'post';
    
    const title = document.createElement('h3');
    title.textContent = post.title;
    
    const meta = document.createElement('div');
    meta.className = 'post-meta';
    meta.textContent = `By ${post.author} • ${formatDate(post.created_at)}`;
    
    const content = document.createElement('div');
    content.className = 'post-content';
    content.textContent = post.content;
    
    article.appendChild(title);
    article.appendChild(meta);
    article.appendChild(content);
    
    return article;
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}