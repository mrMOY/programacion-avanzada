<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crear cliente</title>
</head>
<body>
    
    <form action="http://127.0.0.1:8000/clients" method="post">

        @csrf
        <label for="">Name</label>
        <input type="text" placeholder="moises" name="name">
        <br>
        <label for="">Email</label>
        <input type="email" placeholder="example@gmail.com" name="email">
        <br>
        <label for="">phone number</label>
        <input type="text" placeholder="612XXXXXXX" name="phone_number">
        <br>
        <button type="submit">Guardar</button>
    </form>

</body>
</html>