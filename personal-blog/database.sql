-- Create database
CREATE DATABASE IF NOT EXISTS personal_blog;

-- Use the database
USE personal_blog;

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample posts (optional)
INSERT INTO posts (title, content, author) VALUES
('Welcome to My Blog', 'This is my first blog post! I\'m excited to share my thoughts and experiences with you. Stay tuned for more interesting content.', 'Admin'),
('Getting Started with Web Development', 'Web development is an exciting field that combines creativity with technical skills. In this post, I\'ll share some tips for beginners starting their journey in web development.', 'Admin'),
('The Importance of Clean Code', 'Writing clean, maintainable code is crucial for any developer. Clean code not only makes your life easier but also helps your team collaborate more effectively.', 'Admin');