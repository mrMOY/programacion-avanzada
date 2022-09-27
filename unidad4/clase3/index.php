<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <!-- <link rel="stylesheet" href="public\css\main.css"> -->
    </head>
    <body>
        <div class="contaner" >
                <div id="app" class="vh-100 d-flex justify-content-center align-items-center">
                    <div class="col-md-4 p-5 shadow-sm border rounded-3">
                        <form action="app/AuthController.php"  method="post">
                            <fieldset>
                                <div class="d-flex justify-content-center align-items-center">
                                    <img src="https://ifera.org/wp-content/uploads/2020/06/icon-green-login-1000-px.png" class="rounded w-50 p-3  " alt="..."> 
                                    
                                </div>
                                
                                <h2 class="text-center mb-4">Login</h2>
                                <div class="mb-3">
                                    <input name="email" type="email"   class="form-control" placeholder="Email"> <br>
                                    <input name="password" type="password"  class="form-control" placeholder="Password">
                                </div>
                                <div class="d-grid">
                                    <input type="hidden" name="action" value="access">
                                    <button type="submit" name=""  class="btn btn-primary">Acceder</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
    </body>
    </html>