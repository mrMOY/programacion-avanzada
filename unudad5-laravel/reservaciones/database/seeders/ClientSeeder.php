<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Client;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $client = new Client();        
        $client->name='Moises Moreno';
        $client->phone_number='612-107-20-52';
        $client->email='moy@gmail.com';
        $client->save();

        $client = new Client();        
        $client->name='cliente240';
        $client->phone_number='240-107-20-52';
        $client->email='cliente240@gmail.com';
        $client->save();
       
    }
}
