<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method'
    ]);
    exit;
}

// Get and validate input
$post_id = isset($_POST['id']) ? intval($_POST['id']) : 0;

if ($post_id <= 0) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid post ID'
    ]);
    exit;
}

try {
    $conn = getDBConnection();
    
    // Prepare and bind
    $stmt = $conn->prepare("DELETE FROM posts WHERE id = ?");
    $stmt->bind_param("i", $post_id);
    
    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            echo json_encode([
                'success' => true,
                'message' => 'Post deleted successfully'
            ]);
        } else {
            echo json_encode([
                'success' => false,
                'message' => 'Post not found'
            ]);
        }
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Error deleting post: ' . $stmt->error
        ]);
    }
    
    $stmt->close();
    closeDBConnection($conn);
    
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage()
    ]);
}
?>