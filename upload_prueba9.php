<?php
// Definir la carpeta donde se guardarán las fotos subidas
$target_dir = "uploads/prueba9";
$target_file = $target_dir . basename($_FILES["foto"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Comprobar si el archivo es una imagen real
if (isset($_POST["submit"])) {
    $check = getimagesize($_FILES["foto"]["tmp_name"]);
    if ($check !== false) {
        echo "El archivo es una imagen - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "El archivo no es una imagen.";
        $uploadOk = 0;
    }
}

// Comprobar si el archivo ya existe
if (file_exists($target_file)) {
    echo "Lo sentimos, el archivo ya existe.";
    $uploadOk = 0;
}

// Limitar el tamaño del archivo (5MB en este ejemplo)
if ($_FILES["foto"]["size"] > 50000000) {
    echo "Lo sentimos, tu archivo es demasiado grande.";
    $uploadOk = 0;
}

// Permitir solo ciertos formatos de imagen
if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif") {
    echo "Lo sentimos, solo se permiten archivos JPG, JPEG, PNG y GIF.";
    $uploadOk = 0;
}

// Verificar si hubo algún error
if ($uploadOk == 0) {
    echo "Lo sentimos, tu archivo no se pudo subir.";
// Si no hubo errores, intenta subir el archivo
} else {
    if (move_uploaded_file($_FILES["foto"]["tmp_name"], $target_file)) {
        // Obtener el idioma para redirigir correctamente
        $lang = isset($_POST['lang']) ? $_POST['lang'] : 'es';
        // Redirigir a la página de éxito con el idioma correcto
        header("Location: prueba9_correcto.html?lang=$lang");
        exit();
    } else {
        echo "Lo sentimos, hubo un error al subir tu archivo.";
    }
}
?>
