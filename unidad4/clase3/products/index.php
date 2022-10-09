<?php
    include "../app/ProductsController.php";
    $producto = new ProductsController;
    $product = $producto->listaProducts();

    $marca = new ProductsController;    
    $brand = $marca->getBrand();
    // var_dump($brand);
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
                                <button onclick="addProduct()" data-bs-toggle="modal" data-bs-target="#createproduct"   class="btn btn-info float-end">
                                    añadir producto
                                </button>
                            </div>
                            <HR></HR>
                        </div>
                    </div>
                    <div class="row">

                        
                        <?php  foreach ($product as $arayP) {?>
                        <div class="col-md-4 p-2">
                        <div class="card" style="width: 18rem;">
                            <img src="<?php echo $arayP->cover ?> " class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title"> <?php echo $arayP->name ?></h5>                                    
                                    <p class="card-text"> 
                                        <?php
                                            if (($arayP->brand) == null) {                                                
                                                echo "Producto sin brand";
                                            } else {
                                                echo $arayP->brand->name;
                                            }            
                                            // echo $arayP->brand->name;                             
                                        ?> 
                                    </p>
                                    <p class="card-text"> <?php echo $arayP->description ?> </p>
                                    <div class="row">
                                        <a  onclick ="editProduct(this)" data-product='<?php echo json_encode($arayP); ?>' data-bs-toggle="modal" data-bs-target="#createproduct"  class="btn btn-warning col-6">Editar</a>
                                        
                                        <a  onclick="remove(<?php echo $arayP->id ?>)"  class="btn btn-danger col-6" >Eliminar</a>
                                    </div>
                                    <a href="detalles.php?slug=<?php echo $arayP->slug ?>"  class="btn btn-info col-12">INFO</a>
                                </div>
                            </div>
                        </div>

                        <?php }?>
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
            <h5 class="modal-title" id="exampleModalLabel">Añadir Producto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <form action="index.php" method="post" enctype="multipart/form-data">
            
            <div class="modal-body">
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">name</span> 
                    <input type="text" id="name" name="name" class="form-control" placeholder="name" aria-label="name" aria-describedby="basic-addon1"> 
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">slug</span> 
                    <input type="text" id="slug" name="slug" class="form-control" placeholder="slug" aria-label="slug" aria-describedby="basic-addon1"> 
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">description</span> 
                    <input type="text" id="description" name="description" class="form-control" placeholder="description" aria-label="description" aria-describedby="basic-addon1"> 
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">features</span>    
                    <input type="text" id="features" name="features" class="form-control" placeholder="features" aria-label="features" aria-describedby="basic-addon1"> 
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">brand_id</span>
                    <select name="brand_id" id="brand_id" class="form-select" placeholder=" ">
                            <?php foreach($brand as $arrayBrand){ ?>
                                <option value="<?php echo $arrayBrand ->id ?>"> <?php echo $arrayBrand->name ?> </option>
                            <?php }?>
                    </select>                     
                    <!-- <input type="text" name="brand_id" class="form-control" placeholder="brand_id" aria-label="brand_id" aria-describedby="basic-addon1">  -->
                </div>
                <div class="input-group mb-3">
                    <input type="file" name="cover" class="form-control" placeholder="cover" > 
                </div>
            </div>
            <div class="modal-footer">
                <input type="hidden" name="id" id="id">
                <input type="hidden" id="inputOculto"  name="action">
                <input type="hidden" name="global_token" value="<?= $_SESSION['global_token'] ?>">
                <button type="submit" class="btn btn-primary">Save changes</button>
            </div>            
        </form>

        </div>
    </div>
    </div>
    <script type="text/javascript">
        function remove(id) {
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
                var bodyFormData = new FormData();
                bodyFormData.append('id', id);
                bodyFormData.append('action', 'delete');
                bodyFormData.append('global_token', '<?= $_SESSION['global_token'] ?>');
                console.log(id);
                axios.post('../app/ProductsController.php',bodyFormData)
                .then(function (response){
                            console.log('hola');
                            
                        })
                        .catch(function (error){
                            console.log('error');
                        })

                 

            } else {
                swal("Your imaginary file is safe!");
            }
            });  
        }

        function addProduct() {
            document.getElementById('inputOculto').value = 'create';

            document.getElementById('name').value = "";
            document.getElementById('slug').value = "";
            document.getElementById('description').value = "";
            document.getElementById('features').value = "";
            document.getElementById('brand_id').value = 1;
        }

        function editProduct(target) {
            document.getElementById('inputOculto').value = 'update';

            let product = JSON.parse(target.getAttribute('data-product'));
            document.getElementById('name').value = product.name;
            document.getElementById('slug').value = product.slug;
            document.getElementById('description').value = product.description;
            document.getElementById('features').value = product.features;
            document.getElementById('brand_id').value = product.brand_id;
            document.getElementById('id').value = product.id;

        }
    </script>
    <?php include "../layouts/scripts.template.php" ;?>

</body>
</html>