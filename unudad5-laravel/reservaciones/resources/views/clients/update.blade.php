<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar cliente</title>
</head>
<body>
    
    <form action="{{url('/clients/')}}" method="post">
        @method('PUT') 
        @csrf
        <label for="">Name</label>
        <input type="text" placeholder="moises" name="name" value="{{$client->name}}">
        <br>
        <label for="">Email</label>
        <input type="email" placeholder="example@gmail.com" name="email" value="{{$client->email}}">
        <br>
        <label for="">phone number</label>
        <input type="text" placeholder="612XXXXXXX" name="phone_number" value="{{$client->phone_number}}">
        <br>
        <input type="hidden" name="id" value="{{$client->id}}">
        <button type="submit">Guardar</button>
    </form>

</body>
</html>