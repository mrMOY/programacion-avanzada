<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>

    <h1>
        @if (Auth::user())
            {{ Auth::user()->name }}
        @endif
    </h1>
    <form action=" {{'login/'}} " method="post">
        @csrf
        <input type="text" placeholder="email" name="email">
        <br>
        <input type="password" placeholder="password" name="password">
        <br>
        <button>Guardar</button>

    </form>
    
</body>
</html>