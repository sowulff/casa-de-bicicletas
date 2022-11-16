<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('rooms')->insert(
            [
                'name' => "Lägenhet",
                'image' => "https://live.staticflickr.com/65535/52483900458_2d90d6deda.jpg",
                'price' => 69,
                'description' => "Lägenhet med fullt utrustat kök, vardagsrum, matplats, två badrum och fyra sovplatser"
            ],


        );
        DB::table('rooms')->insert(
            [
                'name' => "Dubbelrum",
                'image' => "https://live.staticflickr.com/65535/52483815710_81e5b4c64f.jpg",
                'price' => 40,
                'description' => "Rum med dubbelsäng och stort badrum. Rummet har både fläkt och aircondition."
            ],
        );
        DB::table('rooms')->insert(
            [
                'name' => "Ställplats",
                'image' => "https://live.staticflickr.com/65535/52483900488_30f5445a8f_w.jpg",
                'price' => 17,
                'description' => "Ställplats för bil, campervan, husvagn eller husbil med tillgång till el och vatten."
            ],
        );
        DB::table('rooms')->insert(
            [
                'name' => "Fembäddsrum",
                'image' => "https://live.staticflickr.com/65535/52483352471_e6203e41f5_w.jpg",
                'price' => 60,
                'description' => "Sovsal med fem sängplatser, badrum. Tillgång till fullt utrustat kök och pool. "
            ],
        );
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Tester',
            'email' => 'tester@gmail.com',
            'password' =>  Hash::make('123'),
        ]);
    }
}
