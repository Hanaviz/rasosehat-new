<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuNutrient extends Model
{
    use HasFactory;

    protected $fillable = [
        'menu_id',
        'calories',
        'protein',
        'carbs',
        'fat',
        'fiber',
        'sugar',
        'sodium'
    ];

    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }
}
