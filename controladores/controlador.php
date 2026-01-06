<?php
//peticion si sea post
if($_SERVER['REQUEST_METHOD'] === 'POST'){
    //obtener datos del formulario
    $tipo = $_POST['tipo'];
    $documento = $_POST['documento'];
    $nombre = $_POST['nombre'];
    $edad = $_POST['edad'];
    $genero = $_POST['genero']; 
    $mercancia = json_decode($_POST['mercancia'], true);
    $latitud = $_POST['latitud'];
    $longitud = $_POST['longitud'];

    //validar datos (aqui puedes agregar mas validaciones segun tus necesidades)
    if(empty($tipo) || empty($documento) || empty($nombre) || empty($edad) || empty($genero) || empty($latitud) || empty($longitud)){
        http_response_code(400);
        echo json_encode(['error' => 'Faltan datos obligatorios.']);
        exit;
    }
    //procesar datos (aqui puedes guardar en base de datos o realizar otras acciones)
    $conexion = new mysqli('localhost', 'root', '', 'prueba');
    if ($conexion->connect_error) { 
        http_response_code(500);
        echo json_encode(['error' => 'Error de conexion a la base de datos.']);
        exit;
    }   

    //Verificar si el documento ya existe
    $sql="SELECT id FROM usuario WHERE tipo = ? AND documento = ?";
    $consulta=$conexion->prepare($sql);
    $consulta->bind_param('ss', $tipo, $documento);
    $consulta->execute();
    $consulta->store_result();
    if($consulta->num_rows > 0){
        http_response_code(409);
        echo json_encode(['error' => 'El documento ya existe.']);
        exit;
    }
    //Insertar nuevo usuario
    $sql = "INSERT INTO usuario (tipo, documento, nombre, edad, genero, mercancia, latitud, longitud) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $consulta = $conexion->prepare($sql);
    if(!$consulta){
        die("error en la preparacion: " . $conexion->error);
    }
    $mercancia_json = json_encode($mercancia);
    $consulta = $conexion->prepare($sql);

    $consulta->bind_param('ssssssss', $tipo, $documento, $nombre, $edad, $genero, $mercancia_json, $latitud, $longitud);
    //Si hay un error al agregar al usuario
    if($consulta->execute()){
        echo "Registro exitoso";
    } else {
        echo json_encode(['error' => 'Error al registrar el usuario.']);
    }

} else {
    //metodo no permitido
    http_response_code(405);
    echo json_encode(['error' => 'Metodo no permitido.']);
}