<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once 'config.php';

try {
    $conn = getDBConnection();
    
    // Fetch all posts ordered by newest first
    $sql = "SELECT id, title, content, author, created_at FROM posts ORDER BY created_at DESC";
    $result = $conn->query($sql);
    
    $posts = array();
    
    if ($result && $result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $posts[] = $row;
        }
    }
    
    echo json_encode([
        'success' => true,
        'posts' => $posts
    ]);
    
    closeDBConnection($conn);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error fetching posts: ' . $e->getMessage()
    ]);
}
?>