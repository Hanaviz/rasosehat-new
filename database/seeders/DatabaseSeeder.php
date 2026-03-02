<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Shop;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create Admin
        User::create([
            'name' => 'Admin Rasosehat',
            'email' => 'admin@rasosehat.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'phone_number' => '081234567890',
        ]);

        // 2. Create Seller
        $seller = User::create([
            'name' => 'Budi Penjual Sehat',
            'email' => 'seller@rasosehat.com',
            'password' => Hash::make('password'),
            'role' => 'seller',
            'phone_number' => '082234567891',
        ]);

        // Create Shop for Seller
        Shop::create([
            'user_id' => $seller->id,
            'name' => 'Salad Padang Premium',
            'slug' => 'salad-padang-premium',
            'address' => 'Jln. Khatib Sulaiman No. 42, Kota Padang',
            'description' => 'Menyediakan aneka salad buah dan sayur segar dengan saus homemade yang rendah kalori.',
            'is_active' => true,
        ]);

        // 3. Create Regular Consumer
        User::create([
            'name' => 'Siti Konsumen Sehat',
            'email' => 'user@rasosehat.com',
            'password' => Hash::make('password'),
            'role' => 'user',
            'phone_number' => '083334567892',
        ]);

        // 4. Create Default Healthy Categories
        $categories = [
            ['name' => 'Rendah Kalori', 'description' => 'Menu di bawah 400 kkal untuk defisit kalori.'],
            ['name' => 'Tinggi Protein', 'description' => 'Cocok untuk pembentukan otot dan masa recovery.'],
            ['name' => 'Bebas Gula', 'description' => 'Aman untuk penderita diabetes atau diet gula.'],
            ['name' => 'Tinggi Serat', 'description' => 'Membantu pencernaan dengan sayur dan buah pilihan.'],
            ['name' => 'Katering Diet', 'description' => 'Paket makanan sehat mingguan atau bulanan.'],
            ['name' => 'Salad Buah', 'description' => 'Aneka buah segar dengan topping sehat.'],
        ];

        foreach ($categories as $cat) {
            Category::create([
                'name' => $cat['name'],
                'slug' => Str::slug($cat['name']),
                'description' => $cat['description'],
            ]);
        }

        // 5. Create Sample Menus for Seller
        $shop = Shop::where('slug', 'salad-padang-premium')->first();
        
        $menuItems = [
            [
                'name' => 'Salad Buah Yogurt Creamy',
                'price' => 35000,
                'stock' => 20,
                'image_path' => 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
                'description' => 'Campuran buah segar premium dengan saus yogurt rendah lemak yang sangat menyegarkan.',
                'recipe_steps' => "1. Cuci bersih buah-buahan seperti apel, pir, dan anggur.\n2. Potong-potong buah menjadi dadu kecil agar mudah dikonsumsi.\n3. Siapkan saus yogurt plain dengan campuran sedikit madu alami.\n4. Campurkan buah dan saus dalam mangkuk besar.\n5. Tambahkan parutan keju rendah lemak sebagai topping.\n6. Sajikan dalam keadaan dingin untuk kelezatan maksimal.",
                'categories' => ['salad-buah', 'rendah-kalori'],
                'nutrients' => ['calories' => 250, 'protein' => 5, 'carbs' => 45, 'fat' => 3, 'fiber' => 8, 'sugar' => 12, 'sodium' => 45]
            ],
            [
                'name' => 'Poke Bowl Salmon Teriyaki',
                'price' => 65000,
                'stock' => 15,
                'image_path' => 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
                'description' => 'Nasi merah dengan potongan salmon segar, alpukat, dan edamame yang kaya akan nutrisi penting.',
                'recipe_steps' => "1. Masak nasi merah hingga pulen dan matang sempurna.\n2. Siapkan salmon segar dan potong dadu, lalu marinasi dengan saus teriyaki buatan sendiri.\n3. Iris alpukat dan siapkan edamame yang sudah direbus.\n4. Tata nasi merah di dasar mangkuk.\n5. Letakkan salmon, alpukat, dan edamame di atas nasi secara rapi.\n6. Taburi dengan biji wijen dan irisan daun bawang.",
                'categories' => ['tinggi-protein'],
                'nutrients' => ['calories' => 480, 'protein' => 28, 'carbs' => 55, 'fat' => 18, 'fiber' => 10, 'sugar' => 4, 'sodium' => 210]
            ],
            [
                'name' => 'Green Smoothie Detox',
                'price' => 28000,
                'stock' => 50,
                'image_path' => 'https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=800&q=80',
                'description' => 'Smoothie bayam, nanas, dan chia seeds pilihan untuk hasil pencernaan yang jauh lebih sehat.',
                'recipe_steps' => "1. Masukkan bayam organik segar ke dalam blender.\n2. Tambahkan potongan nanas manis dan air kelapa secukupnya.\n3. Blender hingga tekstur menjadi sangat halus.\n4. Tuangkan smoothie ke dalam gelas saji.\n5. Taburkan chia seeds di atasnya sebagai tambahan serat.\n6. Segera konsumsi untuk mendapatkan manfaat nutrisi optimal.",
                'categories' => ['tinggi-serat', 'bebas-gula'],
                'nutrients' => ['calories' => 120, 'protein' => 3, 'carbs' => 25, 'fat' => 1, 'fiber' => 12, 'sugar' => 0, 'sodium' => 25]
            ],
            [
                'name' => 'Chicken Breast Quinoa Bowl',
                'price' => 55000,
                'stock' => 10,
                'image_path' => 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800&q=80',
                'description' => 'Dada ayam panggang premium dengan quinoa dan sayuran segar penuh warna.',
                'recipe_steps' => "1. Panggang dada ayam dengan bumbu rempah alami hingga matang merata.\n2. Rebus quinoa hingga lembut dan tiriskan.\n3. Siapkan sayuran seperti wortel dan brokoli, lalu kukus sebentar.\n4. Letakkan quinoa di piring saji sebagai dasar.\n5. Iris dada ayam panggang dan letakkan di atas quinoa bersama sayuran.\n6. Tambahkan sedikit olive oil untuk rasa yang lebih gurih.",
                'categories' => ['tinggi-protein', 'rendah-kalori'],
                'nutrients' => ['calories' => 380, 'protein' => 35, 'carbs' => 40, 'fat' => 8, 'fiber' => 6, 'sugar' => 2, 'sodium' => 155]
            ]
        ];

        foreach ($menuItems as $item) {
            $menu = $shop->menus()->create([
                'name' => $item['name'],
                'slug' => Str::slug($item['name']),
                'price' => $item['price'],
                'stock' => $item['stock'],
                'description' => $item['description'],
                'recipe_steps' => $item['recipe_steps'],
                'image_path' => $item['image_path'],
                'is_verified' => true,
                'is_available' => true
            ]);

            $categoryIds = Category::whereIn('slug', $item['categories'])->pluck('id');
            $menu->categories()->attach($categoryIds);

            $menu->nutrients()->create($item['nutrients']);
        }

        // 6. Create Sample Reviews
        $reviewer1 = User::create([
            'name' => 'Rina Setiawan',
            'email' => 'rina@rasosehat.com',
            'password' => Hash::make('password'),
            'role' => 'user',
            'phone_number' => '084434567893',
        ]);

        $reviewer2 = User::create([
            'name' => 'Andi Pratama',
            'email' => 'andi@rasosehat.com',
            'password' => Hash::make('password'),
            'role' => 'user',
            'phone_number' => '085534567894',
        ]);

        $allMenus = \App\Models\Menu::all();
        $reviewData = [
            ['user_id' => $reviewer1->id, 'rating' => 5, 'comment' => 'Segar banget dan porsinya pas! Cocok untuk diet saya. Pasti pesan lagi.'],
            ['user_id' => $reviewer2->id, 'rating' => 4, 'comment' => 'Rasanya enak dan sehat. Pengiriman cepat. Cuma sausnya agak kurang banyak.'],
            ['user_id' => User::where('email', 'user@rasosehat.com')->first()->id, 'rating' => 5, 'comment' => 'Menu favorit saya! Bahan-bahan organik berkualitas super.'],
        ];

        foreach ($allMenus as $menu) {
            foreach ($reviewData as $review) {
                \App\Models\Review::create(array_merge($review, ['menu_id' => $menu->id]));
            }
        }
    }
}
