<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="http://127.0.0.1:8000/users/" method="post">
        @csrf
        <input type="text" placeholder="name" name="name">
        <br>
        <input type="" placeholder="lastname" name="lastname">
        <br>
        <button>Guardar</button>

    </form>
</body>
</html>