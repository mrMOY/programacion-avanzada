<?php 
    include "../app/ProductsController.php";
    $slugTemp=$_GET["slug"];
    // echo $slugTemp;  

    $etiqueta = new ProductsController;    
    $slug = $etiqueta->detalleProducto($slugTemp);

    // var_dump($slug)

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
                                <span>Producto</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">      

                   

                        <div class="card mb-3" style="max-width: 1000px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="<?php echo $slug->cover ?> " class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">

                                        <h5 class="card-title"> <?php echo $slug->name ?></h5> 
                                        <p class="h6">Slug</p>     
                                        <p class="card-text"> <?php echo $slug->slug ?> </p> 
                                        <p class="h6">Descripcion</p>  
                                        <p class="card-text"> <?php echo $slug->description ?> </p>  
                                        <p class="h6">Feactures</p>                                 
                                        <p class="card-text"> <?php echo $slug->features ?> </p>   
                                        <p class="h6">Marca</p>                              
                                        <p class="card-text"> 
                                        <?php
                                                if (($slug->brand) == null) {                                                
                                                    echo "Producto sin brand";
                                                } else {
                                                    echo $slug->brand->name;
                                                }            
                                                // echo $arayP->brand->name;                             
                                        ?> 
                                        </p>
                                        <p class="h6"> tags</p>
                                        <p class="card-text ">  
                                            <?php foreach ($slug->tags as $arraySlug) { ?>
                                                <?php echo $arraySlug->name ?> 
                                            <?php }?> 
                                        </p>
                                        <p class="h6">Categorias</p>
                                        <p class="card-text ">
                                            <?php foreach ($slug->categories as $arraySlug) { ?>
                                                <?php echo $arraySlug->name ?>  
                                            <?php }?>
                                        </p> 
                                       
                                        <div class="row">
                                            <a  data-bs-toggle="modal" data-bs-target="#createproduct"  class="btn btn-warning col-6">Editar</a>
                                            <a href="" onclick="remove(this)"  class="btn btn-danger col-6">Eliminar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                        
                </div>
                
            </div >

        </div>
        
    </div>
    <!-- Modal -->
    
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