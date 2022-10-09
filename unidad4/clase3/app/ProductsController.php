<?php 
    include_once "config.php";
    if (isset($_POST['action'])) {
        if (isset($_POST['global_token']) && 
        $_POST['global_token'] == $_SESSION['global_token']) {
            switch ($_POST['action']) {
                case 'create':
                        $name = strip_tags($_POST['name']);
                        $slug = strip_tags($_POST['slug']);
                        $description = strip_tags($_POST['description']);
                        $features = strip_tags($_POST['features']);
                        $brand_id = strip_tags($_POST['brand_id']);

                        $cover = $_FILES['cover']['tmp_name'];

                        $productsController = new ProductsController;
                        $productsController -> createProduct($name,$slug, $description, $features, $brand_id, $cover);
                    
                    break;
                case 'update':
                    $name = strip_tags($_POST['name']);
                    $slug = strip_tags($_POST['slug']);
                    $description = strip_tags($_POST['description']);
                    $features = strip_tags($_POST['features']);
                    $brand_id = strip_tags($_POST['brand_id']);
                    $id = strip_tags($_POST['id']);

                    $productsController = new ProductsController;
                    $productsController -> editProduct($name,$slug, $description, $features, $brand_id, $id);
                    

                    break;

                case 'delete':
                        $id = $_POST['id'];

                        $productsController = new ProductsController;
                        $productsController -> deleteProduct($id);
                    break ;
                
            }
        }
    }
    

   
    class ProductsController{

        public function deleteProduct($id){
            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'http://crud.jonathansoto.mx/api/products/'.$id,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'DELETE',
                CURLOPT_HTTPHEADER => array(
                    'Authorization: Bearer '. $_SESSION['token']
                ),
            ));
              
            $response = curl_exec($curl);
            curl_close($curl);
            $response = json_decode($response);
            if (isset($response->code) && $response->code > 0) {
                header("Location:../productos?delete=true");
            }else{
                header("Location:../productos?delete=false");
            }
        }

        public function listaProducts(){

            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://crud.jonathansoto.mx/api/products',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',  
                CURLOPT_HTTPHEADER => array(
                    'Authorization: Bearer '. $_SESSION['token']
                ), 
                   

            ));

            $response = curl_exec($curl);

            curl_close($curl);
            // echo $response;
            $response = json_decode($response);

            if (isset($response->code) && $response->code > 0) {
                return $response->data;
            }else {
                return array();
            }
            
        }
        public function editProduct($name,$slug, $description, $features, $brand_id, $id){
            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://crud.jonathansoto.mx/api/products',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'PUT',
                CURLOPT_POSTFIELDS => 'name=' . $name. '&slug=' . $slug. '&description=' . $description.'&features=' . $features.'&brand_id=' . $brand.'&id=' . $id,
                CURLOPT_HTTPHEADER => array(
                  'Authorization: Bearer ' . $_SESSION['token'],
                  'Content-Type: application/x-www-form-urlencoded'
                ),
              ));
              $response = curl_exec($curl);
              curl_close($curl);
            //   echo $response;
              $response = json_decode($response);
            if(isset($response->code) && $response->code > 0){
                header("Location:../products/?edit=true");
            }
            else{
                header("Location:../products/?rdit=false");
            }       
        }

        public function detalleProducto($slug){
            
            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://crud.jonathansoto.mx/api/products/slug/'. $slug,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_HTTPHEADER => array(
                    'Authorization: Bearer '. $_SESSION['token']
                ),

            ));
            
            $response = curl_exec($curl);
            
            curl_close($curl);            
            $response = json_decode($response);
            if (isset($response->code) && $response->code > 0) {
                return $response->data;
            }else {
                return array();
            }
            
        }

        public function getBrand(){
            $curl = curl_init();

            curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://crud.jonathansoto.mx/api/brands',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                'Authorization: Bearer '. $_SESSION['token']
            ),
            ));

            $response = curl_exec($curl);

            curl_close($curl);
            $response = json_decode($response);
            if (isset($response->code) && $response->code > 0) {
                return $response->data;
            }else {
                return array();
            }

        }

        public function createProduct($name,$slug, $description, $features, $brand_id, $cover) {
            $curl = curl_init();

            curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://crud.jonathansoto.mx/api/products',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_HTTPHEADER => array(
                'Authorization: Bearer '. $_SESSION['token']
            ),
            CURLOPT_POSTFIELDS => array(
                'name' => $name,
                'slug' => $slug,
                'description' => $description,
                'features' => $features,
                'brand_id' => $brand_id, 
                'cover' => new CURLFILE($cover))
            
            ));

            
            $response = curl_exec($curl);
            curl_close($curl);
            $response = json_decode($response);
            if (isset($response->code) && $response->code > 0) {
                
                header("Location:../products?create=true");

            }else {
                header("Location:../products?csreate=false") ;          
            }        
        }
    }
?>