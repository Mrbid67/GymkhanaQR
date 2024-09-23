<?php
// Configuraciones
$uploadDir = 'uploads/prueba4/'; // Carpeta donde se guardarán los videos
$maxFileSize = 100 * 1024 * 1024; // Tamaño máximo del archivo (100 MB)

// Verificar si el archivo fue enviado a través del formulario
if (isset($_FILES['video'])) {
    // Obtener detalles del archivo
    $fileTmpPath = $_FILES['video']['tmp_name'];
    $fileName = $_FILES['video']['name'];
    $fileSize = $_FILES['video']['size'];
    $fileType = $_FILES['video']['type'];
    $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    // Extensiones permitidas para mayor seguridad y compatibilidad
    $allowedExtensions = array('mp4', 'avi', 'mov', 'mkv', 'webm');

    // Verificar si la extensión del archivo es permitida
    if (in_array($fileExtension, $allowedExtensions)) {
        // Verificar el tamaño del archivo
        if ($fileSize > $maxFileSize) {
            echo "Error: El archivo es demasiado grande. Tamaño máximo: 100 MB.";
            exit();
        }

        // Generar un nombre único para el archivo
        $newFileName = uniqid('video_', true) . '.' . $fileExtension;

        // Ruta completa del archivo a guardar
        $destinationPath = $uploadDir . $newFileName;

        // Intentar mover el archivo subido a la carpeta de destino
        if (move_uploaded_file($fileTmpPath, $destinationPath)) {
            // Redirigir al usuario a prueba4_correcto.html si la subida fue exitosa
            header("Location: prueba4_correcto.html");
            exit(); // Termina el script después de redirigir
        } else {
            echo "Error al mover el archivo.";
        }
    } else {
        echo "Error: Extensión no permitida. Solo se permiten archivos de video MP4, AVI, MOV, MKV, WEBM.";
    }
} else {
    echo "No se ha enviado ningún archivo.";
}
?>
