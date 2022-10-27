<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Reservation;

class ReservationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {      
            $reservation = new Reservation();
            $reservation->Folio='#192192';
            $reservation->id_cliente=2;
            $reservation->id_room=1;
            $reservation->fecha_llegada='2020-10-20';
            $reservation->fecha_salida='2020-10-23';
            $reservation->save();        
    }
}
