<?php
    include "../app/ProductsController.php";
    $producto = new ProductsController;
    $product = $producto->listaProducts();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php include "../layouts/head.template.php" ;?>
</head>
<body>

    <?php include "../layouts/nav.template.php" ;?>

    <div class="container-fluid">
        <div class="row">
            

            <?php include "../layouts/slidebar.temlate.php" ;?>


            <div class="col-lg-10 col-sm-12">
                <div class="container-fluid" >
                    <div class="border-botton">
                        <div class="row m-2">
                            <div class="col">
                                <span>Productos</span>
                            </div>
                            <div class="col">
                                <button  data-bs-toggle="modal" data-bs-target="#createproduct"   class="btn btn-info float-end">
                                    añadir producto
                                </button>
                            </div>
                            <HR></HR>
                        </div>
                    </div>
                    <div class="row">
                        <?php for ($i=0; $i < 12; $i++): ?>
                        <div class="col-md-4 p-2">
                        <div class="card" style="width: 18rem;">
                            <img src="<?php echo $product[$i]->cover ?> " class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title"> <?php echo $product[$i]->name ?></h5>
                                    <p class="card-text"> <?php echo $product[$i]->description ?> </p>
                                    <div class="row">
                                        <a  data-bs-toggle="modal" data-bs-target="#createproduct"  class="btn btn-warning col-6">Editar</a>
                                        <a href="" onclick="remove(this)"  class="btn btn-danger col-6">Eliminar</a>
                                    </div>
                                    <a href="detalles.php"  class="btn btn-info col-12">INFO</a>
                                </div>
                            </div>
                        </div>
                        <?php endfor; ?>
                        </div>
                        
                </div>
                
            </div >

        </div>
        
    </div>
    <!-- Modal -->
    <div class="modal fade" id="createproduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <?php for ($i=0; $i < 6; $i++):?> 
        <div class="modal-body">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span> 
                <input type="text" class="form-control" placeholder="username@fakemail.com" aria-label="Username" aria-describedby="basic-addon1"> 
            </div>
        </div>
        <?php endfor; ?>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
        </div>
        </div>
    </div>
    </div>
    <script type="text/javascript">
        function remove(target) {
            swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
            });  
        }
        
    </script>
    <?php include "../layouts/scripts.template.php" ;?>

</body>
</html>