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
                // 'image' => "https://live.staticflickr.com/65535/52483900458_2d90d6deda.jpg",
                'image' => "https://www.decorilla.com/online-decorating/wp-content/uploads/2019/01/luxutry-apartment-design-online-feature.jpg",
                'price' => 69,
                'description' => "Lägenhet med fullt utrustat kök, vardagsrum, matplats, två badrum och fyra sovplatser"
            ],


        );
        DB::table('rooms')->insert(
            [
                'name' => "Dubbelrum",
                // 'image' => "https://live.staticflickr.com/65535/52483815710_81e5b4c64f.jpg",
                'image' => "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
                'price' => 40,
                'description' => "Rum med dubbelsäng och stort badrum. Rummet har både fläkt och aircondition."
            ],
        );
        DB::table('rooms')->insert(
            [
                'name' => "Ställplats",
                // 'image' => "https://live.staticflickr.com/65535/52483900488_30f5445a8f_w.jpg",
                'image' => "https://images.prismic.io/siestacampers/1fa39f07-9efe-4c5d-b4e2-2058c8c18ed9_portugal-campervan-hire-kombi-classic-van-small.jpg?auto=compress,format",
                'price' => 17,
                'description' => "Ställplats för bil, campervan, husvagn eller husbil med tillgång till el och vatten."
            ],
        );
        DB::table('rooms')->insert(
            [
                'name' => "Fembäddsrum",
                // 'image' => "https://live.staticflickr.com/65535/52483352471_e6203e41f5_w.jpg",
                'image' => "https://images.unsplash.com/photo-1636917754428-60ece5e521df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1bmslMjBiZWR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
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
