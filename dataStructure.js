/* STRUKTUR DATA
    Sebelumnya kita sempat mempelajari tentang variabel dan tipe data yang ada di JavaScript. 
    Tipe data yang kita bahas sebelumnya termasuk dalam kategori tipe data primitif yang hanya bisa menyimpan satu nilai.

     Beberapa jenis struktur data yang akan kita pelajari, antara lain:
    - Object
    - Array
    - Map
    - Set
*/

/*OBJECT
    Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.
*/
// Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}.
// contoh 1
// const user = {};

// Object berisi pasangan key dan value yang juga dikenal dengan property. Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai.
// Sementara, value berisi nilai dengan tipe data apa pun termasuk objek lain.
// Bentuk sederhananya seperti berikut: let object = {key1: "value1", key2: "value2", key3: "value3"}
// contoh 2
// const user = {
//     firstName: "Luke",
//     lastName: "Skywalker",
//     age: 19,
//     isJedi: true
// };

// Kemudian untuk mengakses nilai dari properti object, kita dapat memanggil nama object lalu tanda titik dan diikuti nama propertinya
// contoh 3
// const user = {
//   firstName: "Joe",
//   lastName: "Mama",
//   age: 19,
//   isJedi: true,
// };
// console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
// console.log(`Umur saya ${user.age} tahun`);

// Selain dot operator, kita juga bisa mengakses properti dari object menggunakan bracket atau tanda kurung siku.
// contoh 4
// const user = {
//   firstName: "Joe",
//   lastName: "Mama",
//   age: 19,
//   isJedi: true,
//   "home world": "Bersyukuri",
// };
// console.log(`Saya berasal dari ${user["home world"]}`);

// Setelah mempelajari bagaimana membuat object dan menampilkan property di dalamnya, selanjutnya kita akan memodifikasi sebuah object.
// Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=).
// contoh 5
// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "Silver",
// };
// car.color = "Blue";
// car["year"] = 2023;
// console.log(car);

// Object car dideklarasikan sebagai const, tetapi kenapa kita bisa mengubah nilainya?
// Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai.
// Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa memodifikasi nilainya.
// Berbeda jika kita menginisialisasi ulang variabel dari object.
// contoh 6
// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "Silver",
// };
// car = { brand: "Mitsubishi" }; // Error

// Ketika kita mengubah object menggunakan assignment operator dan property/key-nya sudah ada, maka nilai di dalamnya akan tergantikan dengan nilai yang baru.
// Sedangkan, jika property dengan nama key yang ditentukan tidak ditemukan, maka property baru akan ditambahkan ke object.
// contoh 7
// const spaceship = {
//   name: "Millenium Falcon",
//   manufacturer: "Corellian Engineering Corporation",
//   maxSpeed: 1200,
//   color: "Light gray",
// };
// spaceship.color = "Glossy red";
// spaceship["maxSpeed"] = 1300;
// spaceship.class = "Light freighter";
// console.log(spaceship);

// Kita juga dapat menghapus property pada object menggunakan keyword delete seperti berikut:
// const spaceship = {
//   name: "Millenium Falcon",
//   manufacturer: "Corellian Engineering Corporation",
//   maxSpeed: 1200,
//   color: "Light gray",
// };
// spaceship.color = "Glossy red";
// spaceship["maxSpeed"] = 1300;
// delete spaceship.manufacturer;
// console.log(spaceship);

/*ARRAY
    Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel
*/

// contoh 1
// let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// console.log(myArray);

// Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index.
// Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.
// contoh 2
// let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// console.log(myArray[1]);

// Apa yang akan terjadi jika kita berusaha mengakses index di luar ukuran array-nya?
// Jika kita mengakses nilai array lebih dari index-nya, maka hasilnya akan undefined. Index terakhir array selalu jumlah nilai array - 1.
// contoh 3
// let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);
// console.log(myArray[4]);
// console.log(myArray[5]);
// console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// Bagaimana kita memanipulasi data pada array tersebut?
// Nah, untuk menambahkan data ke dalam array, kita bisa menggunakan metode push(). Fungsi push ini akan menambahkan data di akhir array.
// contoh 4
// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// myArray.push("JavaScript");
// console.log(myArray);

// Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().
// contoh 5
// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// myArray.pop();
// console.log(myArray);

// Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift() dan unshift().
// Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara unshift() digunakan untuk menambahkan elemen di awal array.
// contoh 6
// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// myArray.shift();
// myArray.unshift("Apple");
// console.log(myArray);

// Lalu bagaimana jika kita ingin menghapus data dari array? Sama seperti object, kita bisa menggunakan keyword delete.
// contoh 7
// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// delete myArray[1];
// console.log(myArray);

// Namun, perhatikan di sini bahwa keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong.
// Untuk menghapus elemen, gunakan metode splice() seperti ini:
// contoh 8
// const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// myArray.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
// console.log(myArray);

// Selain untuk menghapus elemen pada array, splice() juga dapat digunakan untuk menambahkan elemen pada array tersebut.
// Caranya dengan memberikan argumen ke-3 (atau selanjutnya, bersifat variadic) sebagai nilai yang akan dimasukan pada index yang diberikan pada argumen pertama.
// contoh 9
// const month = ["January", "March", "April", "May"];
// console.log("before splice: ", month);
// month.splice(1, 0, "February");
// console.log("after splice: ", month);

/*SPREAD OPERATOR
    Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. 
    Spread operator dituliskan dengan tiga titik (...). 
*/

// contoh 1
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// console.log(favorites);
/* output
     [ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
     */

// Pada contoh 1, kode tersebut hasil yang dicetak adalah sebuah array (ditunjukkan dengan tanda [ ]), karena memang kita mencetak nilai favorites itu sendiri.
// Nah, dengan menggunakan spread operator kita dapat menyebarkan nilai-nilai dalam array tersebut.
// contoh 2
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// console.log(...favorites);
/* output
    Seafood Salad Nugget Soup
    */

// Artinya contoh 2 bakal sama dengan contoh 3 berikut
// contoh 3
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru.
// Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini:
// contoh 4
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const others = ["Cake", "Pie", "Donut"];
// const allFavorites = [favorites, others];
// console.log(allFavorites);

// Nah, lantas bagaimana jika kita mencoba menggunakan spread operator?
// contoh 5
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const others = ["Cake", "Pie", "Donut"];
// const allFavorites = [...favorites, ...others];
// console.log(allFavorites);

// Selain array, spread operator juga bisa digunakan untuk object literals.
// Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.
// contoh 6
// const obj1 = { firstName: "Obi-Wan", age: 30 };
// const obj2 = { lastName: "Kenobi", gender: "M" };
// const newObj = { ...obj1, ...obj2 };
// console.log(newObj);

/*DESTRUCTURING OBJECT & ARRAY
    Iterasi object dan array adalah dua hal yang paling banyak digunakan dalam mengelola data di JavaScript. 
    JSON (JavaScript Object Notation) merupakan format data paling populer yang digunakan dalam transaksi data saat ini.
*/

// Perhatikan kode contoh 1, kode tersebut mengekstraksi nilai yang berada di dalam objek, kemudian menyimpannya pada variabel lokal dengan nama sama dengan properti di dalam object profile.
// Mungkin mengekstraksi nilai dari object dengan langkah ini terlihat mudah, tetapi bayangkan jika object memiliki banyak properti dan harus melakukan hal tersebut secara manual satu persatu.
// contoh 1
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };
// const firstName = profile.firstName;
// const lastName = profile.lastName;
// const age = profile.age;
// console.log(firstName, lastName, age);

// 1. Destructuring Object
// Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.
// contoh 2
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };
// const { firstName, lastName, age } = profile;
// console.log(firstName, lastName, age);
// Pada contoh 2 di atas tanda kurung kurawal merepresentasikan object yang akan didestrukturisasi. Di dalamnya terdapat firstName, lastName, dan age yang merupakan variabel untuk menyimpan nilai properti dari object profile. Kita juga perlu perhatikan penamaan variabelnya.
// Pastikan penamaannya sama seperti properti object-nya. Melalui nama variabel inilah nilai-nilai properti object akan dimasukkan secara otomatis.
// Sehingga variabel firstName akan berisikan nilai profile.firstName, lastName akan berisikan nilai profile.lastName, begitu juga dengan variabel age akan berisikan nilai profile.age.

// Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita desktrukturisasikan.
// Sehingga kita tidak perlu membuat variabel sebanyak properti yang dimiliki objeknya,
// contoh 3
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };
// const { lastName } = profile;
// console.log(lastName);

// 1.1 Destructuring Assignment
// Pada contoh 3 sebelumnya, kita telah melakukan destructuring object pada deklarasi variabel.
// Namun, pada kasus tertentu mungkin kita perlu melakukannya pada variabel yang sudah dideklarasikan.
// contoh 4
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };
// let firstName = "Dimas";
// let age = 20;
// // menginisialisasi nilai baru melalui destructuring object
// ({ firstName, age } = profile);
// console.log(firstName);
// console.log(age);

// 1.2 Default Values
// Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined.
// contoh 5
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };
// const { firstName, age, isMale } = profile;
// console.log(firstName);
// console.log(age);
// console.log(isMale);

// Alternatifnya, kita bisa secara opsional mendefinisikan nilai default pada properti tertentu jika tidak ditemukan. 
// Untuk melakukanya, tambahkan tanda assignment (=) setelah nama variabel dan tentukan nilai default-nya seperti ini:
// contoh 6
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };
// const { firstName, age, isMale = false } = profile;
// console.log(firstName);
// console.log(age);
// console.log(isMale);

// 1.3 Assigning to Different Local Variable Names
// Sampai saat ini kita tahu bahwa untuk melakukan destrukturisasi object pada variabel lokal, kita perlu menyeragamkan penamaan variabel lokal dengan properti object-nya.
// Namun, sebenarnya dalam proses destrukturisasi object kita bisa menggunakan penamaan variabel lokal yang berbeda.
// ES6 menyediakan sintaksis tambahan yang membuat kita dapat melakukan hal tersebut. 
// Penulisannya mirip seperti ketika kita membuat properti beserta nilainya pada object.
// contoh 7
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };
// const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
// console.log(localFirstName);
// console.log(localLastName);
// console.log(localAge);
 
// 2. Destructuring Array
// Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda kurung siku [ ]. 
// Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya.
// contoh 1
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);
// contoh 1 di atas merupakan contoh proses destructuring array. Di dalam array favorites terdapat 4 (empat) nilai string yang masing-masing nilainya dimasukkan ke variabel lokal firstFood, secondFood, thirdFood, dan fourthFood.
// Nilai dari array yang dimasukkan ke variabel lokal dipilih berdasarkan posisi di mana ia dideklarasikan pada array.
// Sebenarnya kita bebas untuk menentukan nama dari variabel lokal. Yang terpenting adalah urutan ketika deklarasi variabelnya saja.

// Kita juga bisa memilih nilai pada index tertentu untuk destrukturisasi pada array. 
// Contohnya, jika ingin mengambil nilai ketiga dari array, kita tidak perlu menyiapkan variabel lokal untuk menampung nilai array pertama, kedua, atau pun keempat. 
// Kita bisa melakukannya dengan membiarkan index array yang tidak kita inginkan tetap kosong (tanpa menulis variabel lokal). 
// Lebih lanjut, tanda koma (,) tetap diperlukan untuk menunjukkan posisi index-nya seperti ini:
// contoh 2
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const [, , thirdFood] = favorites;
// console.log(thirdFood);

// 2.1 Destructuring Assignment
// Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung. 
// contoh 3
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// let myFood = "Ice Cream";
// let herFood = "Noodles";
// [myFood, herFood] = favorites;
// console.log(myFood);
// console.log(herFood);

// Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel. 
// Sebelum ES6, untuk melakukan hal ini kita menggunakan cara manual menggunakan algoritma seperti ini:
// contoh 4
// var a = 1;
// var b = 2;
// var temp;
// console.log("Sebelum swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);
// temp = a;
// a = b;
// b = temp;
// console.log("Setelah swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// Dengan array destructuring assignment, kita bisa menukar nilai variabel dengan mudah tanpa membuat variabel tambahan.
// contoh 5
// let a = 1;
// let b = 2;
// console.log("Sebelum swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);
// [a, b] = [b, a]; // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
// console.log("Setelah swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// 2.2 Default Values
// Ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak dapat terjangkau oleh array, maka variabel tersebut akan bernilai undefined.
// Sama seperti object, pada destructuring array kita juga dapat memberikan nilai default pada variabel yang tidak dapat terjangkau oleh array, sehingga nilai pada variabel tidak akan menjadi undefined.
// contoh 6
// const favorites = ["Seafood"];
// const [myFood, herFood = "Salad"] = favorites;
// console.log(myFood);
// console.log(herFood);


/*MAP
    Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. 
    Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol
*/

// Untuk mendefinisikan Map gunakan constructor seperti di bawah ini:
// contoh 1
// const myMap = new Map();

// Apabila ingin menetapkan nilai dari Map secara langsung, gunakan array multi dimensi seperti ini:
// contoh 2
// const myMap = new Map([
//   ["1", "a String key"],
//   [1, "a number key"],
//   [true, true],
// ]);
// console.log(myMap);
// Pada contoh 2, Array pertama (yang berada di luar) berfungsi untuk menyimpan masing-masing elemen atau pasangan key-value dari Map. 
// Kemudian array di dalamnya, memiliki dua elemen, di mana elemen pertama adalah key dan elemen keduanya merupakan value.

// Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). 
// Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().
// contoh 3
// const capital = new Map([
//   ["Jakarta", "Indonesia"],
//   ["London", "England"],
//   ["Tokyo", "Japan"],
// ]);
// console.log(capital.size);
// console.log(capital.get("London"));
// capital.set("New Delhi", "India");
// console.log(capital.size);
// console.log(capital.get("New Delhi"));

// Perlu diperhatikan
// Meskipun kita bisa menetapkan dan mendapatkan data pada map seperti ini:
// contoh 4
// const wrongMap = new Map();
// wrongMap["My Key"] = "My Value";
// console.log(wrongMap["My Key"]);

// Namun, contoh 4 di atas bukanlah cara yang sesuai untuk mengoperasikan Map. 
// Ketika kita menetapkan nilai map seperti di atas, data akan disimpan sebagai generic object. 
// Ini akan mengakibatkan data tidak tersimpan dalam Map query dan tidak bisa menggunakan fitur dari Map seperti .has atau .delete.
// contoh 5
// const wrongMap = new Map();
// wrongMap["My Key"] = "My Value";
// console.log(wrongMap.has("My Key"));
// console.log(wrongMap.delete("My Key"));
// Jadi, pastikan untuk menggunakan metode .set() dan .get() untuk Map.



/*SET
    Set sederhananya merupakan kumpulan nilai (set of values). 
    Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. 
    Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi.
*/

// contoh 1
// const numberSet = new Set([1, 4, 6, 4, 1]);
// console.log(numberSet);

// Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi add().
// contoh 2
// const numberSet = new Set([1, 4, 6, 4, 1]);
// numberSet.add(5);
// numberSet.add(10);
// numberSet.add(6);
// console.log(numberSet);

// Fungsi add() hanya menerima satu argumen. 
// Jika kita memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan diabaikan.
// Juga set tidak memiliki urutan atau index, sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.
// contoh 3
// const numberSet = new Set([1, 4, 6, 4, 1]);
// numberSet.add(5);
// numberSet.add([1, 4, 6, 4, 1]);
// numberSet.add(6);
// numberSet.delete(4);
// console.log(numberSet);