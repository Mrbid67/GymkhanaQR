<?php
// Definir la carpeta donde se guardarán las imágenes
$target_dir = "uploads/";

// Crear la carpeta si no existe
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0777, true);
}

// Nombre del archivo
$target_file = $target_dir . basename($_FILES["file"]["name"]);

// Obtener la extensión del archivo
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Verificar si el archivo es una imagen
$check = getimagesize($_FILES["file"]["tmp_name"]);
if($check === false) {
    echo "El archivo no es una imagen.";
    exit;
}

// Generar un nombre único para el archivo
$new_filename = $target_dir . uniqid() . "." . $imageFileType;

// Mover el archivo subido a la carpeta de destino
if (move_uploaded_file($_FILES["file"]["tmp_name"], $new_filename)) {
    echo "La foto ha sido subida exitosamente.";
} else {
    echo "Hubo un error al subir la foto. Por favor, inténtalo de nuevo.";
}
?>
