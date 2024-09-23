<?php
// Definir la carpeta donde se guardarán los videos subidos
$target_dir = "uploads/prueba4";
$target_file = $target_dir . basename($_FILES["video"]["name"]);
$uploadOk = 1;
$videoFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Comprobar si se ha enviado el formulario
if (isset($_POST["submit"])) {
    // Comprobar si el archivo es un video real comprobando su extensión y MIME type
    $allowedTypes = array("video/mp4", "video/avi", "video/mov", "video/mkv");
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $fileMime = finfo_file($finfo, $_FILES["video"]["tmp_name"]);

    if (in_array($fileMime, $allowedTypes)) {
        echo "El archivo es un video - " . $fileMime . ".";
        $uploadOk = 1;
    } else {
        echo "El archivo no es un video válido.";
        $uploadOk = 0;
    }
    finfo_close($finfo);
}

// Comprobar si el archivo ya existe
if (file_exists($target_file)) {
    echo "Lo sentimos, el archivo ya existe.";
    $uploadOk = 0;
}

// Limitar el tamaño del archivo (500MB en este ejemplo)
if ($_FILES["video"]["size"] > 500000000) {
    echo "Lo sentimos, tu archivo es demasiado grande.";
    $uploadOk = 0;
}

// Permitir solo ciertos formatos de video
if ($videoFileType != "mp4" && $videoFileType != "avi" && $videoFileType != "mov" && $videoFileType != "mkv") {
    echo "Lo sentimos, solo se permiten archivos MP4, AVI, MOV y MKV.";
    $uploadOk = 0;
}

// Verificar si hubo algún error
if ($uploadOk == 0) {
    echo "Lo sentimos, tu archivo no se pudo subir.";
// Si no hubo errores, intenta subir el archivo
} else {
    if (move_uploaded_file($_FILES["video"]["tmp_name"], $target_file)) {
        // Obtener el idioma para redirigir correctamente
        $lang = isset($_POST['lang']) ? $_POST['lang'] : 'es';
        // Redirigir a la página de éxito con el idioma correcto
        header("Location: prueba4_correcto.html?lang=$lang");
        exit();
    } else {
        echo "Lo sentimos, hubo un error al subir tu archivo.";
    }
}
?>
