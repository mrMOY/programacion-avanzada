<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;

    protected $fillable=[
        "date",
        "price",
        "client_id"
    ];

    public function client(){
        return $this->belongsTo(Client::class);
    }
}
