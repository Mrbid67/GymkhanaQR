<?php
// Configuraciones
$uploadDir = 'uploads/prueba9/'; // Carpeta donde se guardará la imagen
$maxFileSize = 12 * 1024 * 1024; // Tamaño máximo del archivo (2 MB)

// Verificar si el archivo fue enviado a través del formulario
if (isset($_FILES['foto'])) {
    // Obtener detalles del archivo
    $fileTmpPath = $_FILES['foto']['tmp_name'];
    $fileName = $_FILES['foto']['name'];
    $fileSize = $_FILES['foto']['size'];
    $fileType = $_FILES['foto']['type'];
    $fileExtension = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

    // Extensiones permitidas para mayor velocidad y seguridad
    $allowedExtensions = array('jpg', 'jpeg', 'png', 'gif');

    // Verificar si la extensión del archivo es permitida
    if (in_array($fileExtension, $allowedExtensions)) {
        // Verificar el tamaño del archivo
        if ($fileSize > $maxFileSize) {
            echo "Error: El archivo es demasiado grande. Tamaño máximo: 2 MB.";
            exit();
        }

        // Generar un nombre único para el archivo
        $newFileName = uniqid('img_', true) . '.' . $fileExtension;

        // Ruta completa del archivo a guardar
        $destinationPath = $uploadDir . $newFileName;

        // Intentar mover el archivo subido a la carpeta de destino
        if (move_uploaded_file($fileTmpPath, $destinationPath)) {
            // Redirigir al usuario a prueba2_correcto.html si la subida fue exitosa
            header("Location: prueba9_correcto.html");
            exit(); // Termina el script después de redirigir
        } else {
            echo "Error al mover el archivo.";
        }
    } else {
        echo "Error: Extensión no permitida. Solo se permiten JPG, PNG, y GIF.";
    }
} else {
    echo "No se ha enviado ningún archivo.";
}
?>
