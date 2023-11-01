/* FUNDEMENTAL JAVASCRIPT */

/*COMMENT 
  Sebuah komentar akan dilewatkan oleh interpreter atau compiler, 
  sehingga tidak akan memengaruhi alur program yang kita tulis. 
  Komentar ini bisa digunakan sebagai dokumentasi atau penjelasan dari kode yang kita tulis.
*/

// Terdapat dua metode untuk memberikan komentar.

// Pertama, untuk memberikan komentar pada satu baris saja, kita bisa gunakan tanda dua garis miring (//) di awal baris.
// contoh 1
// console.log("Halo!");

// Kedua, untuk memberikan komentar lebih dari satu baris kita bisa menggunakan tanda /* This is a comment containing /* nested comment *\/
// contoh 2
/* Ini merupakan komentar dengan lebih dari satu baris
    Teks apapun yang berada disini akan dijadikan komentar.
    Ketika menggunakan ini, jangan lupa untuk menutupnya.
    */

/*VARIABLE 
    Pada JavaScript ada tiga cara untuk mendeklarasikan sebuah variabel, yaitu menggunakan keyword var, let, dan const.
    Biasa digunakan keyword let dan const dibandingkan dengan var yang dinilai kontrovesial atau tidak disarankan lagi.
    Kenapa? silakan simak disini ya (https://softwareengineering.stackexchange.com/questions/274342/is-there-any-reason-to-use-the-var-keyword-in-es6)

    Beberapa saran untuk penulisan variabel:
    - Harus dimulai dengan huruf atau underscore (_).
    - Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
    - Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata, tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
    - Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)
*/

// contoh let
// contoh 1.  Menggunakan declaration statement
// let lastName;
// lastName = "STUDENTS CLUB";
// console.log(lastName);

//contoh 2. Langsung menggunakan assignment expression.
// let lastName = "STUDENTS CLUB";
// console.log(lastName);

// contoh const
// const z = 100;
// console.log(z);
// z = 200;
// console.log(z);

/*TIPE DATA
 */

// 1. Undefined
// Tipe data ini terbentuk ketika sebuah variabel tidak memiliki nilai.
// Artinya, ketika kita mendeklarasikan variabel tanpa menginisialisasikan nilainya, variabel tersebut menjadi undefined.

// contoh
//  let x;
//  console.log(typeof x);

// 2. Numbers
// Nilai dari tipe data number adalah angka. Variabel bertipe data number dituliskan seperti angka pada umumnya:

// contoh 1
// let x = 10;
// console.log(typeof(x))

// contoh 2
// let y = 17.25;
// console.log(typeof(y))

// Pada tipe data number, kita juga dapat melakukan perhitungan aritmatika seperti penjumlahan, pengurangan, perkalian, dsb
// contoh 3
// let a = 6;
// let b = 9;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

//Pada operator aritmatika juga terdapat operator increment (++) dan decrement (--).
//Operator increment dan decrement digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang.

//contoh 4
// let postfix = 5;
// console.log(postfix++);

// console.log(postfix);

// let prefix = 5;
// console.log(++prefix)

// 3. BigInt
// Pada JavaScript, tipe data “Number” hanya mencakup nilai dari -(253 - 1) hingga (253 - 1).
// Untuk kebutuhan umum, sebenarnya nilai tersebut sudah sangat cukup.
// Namun, akan ada kebutuhan tertentu di mana kita membutuhkan cakupan nilai yang lebih besar, seperti untuk kriptografi atau menentukan waktu hingga presisi microsecond.
// Untuk nilai di luar Number, kita bisa menggunakan tipe BigInt. Untuk membedakan tipe BigInt dan Number, tambahkan karakter n di akhir angka. Contohnya adalah seperti kode di bawah ini. Bandingkan dengan yang bertipe Number.

// contoh 1
// const bigNumber = 1234567890123456789012345678901234567890n;
// const myInt = 1234567890123456789012345678901234567890;
// console.log(bigNumber);
// console.log(myInt);

// Meskipun digunakan untuk menyimpan angka dengan nilai besar, namun BigInt tetap bisa digunakan untuk nilai yang lebih kecil.
// contoh 2
// const bigIntButSmall = 7n;

// Kita juga bisa menggunakan BigInt untuk operasi aritmatika pada umumnya. Yang membedakan adalah pada operasi pembagian,
// hasilnya akan dibulatkan ke bawah dan tanpa mengandung nilai desimal. Contohnya adalah seperti ini:
// contoh 3
// console.log(5n + 2n);
// console.log(5n - 2n);
// console.log(5n * 2n);
// console.log(5n / 2n);
// console.log(5n % 2n);
/* output
    7n
    3n
    10n
    2n; Bukan 2.5n
    1n
    */

// 4. Strings
// Untuk menetapkan nilai sebagai string pada variabel gunakan tanda petik satu (‘) atau petik dua (“) di antara teksnya.
// contoh 1
// let greet = "Hello";
// console.log(typeof greet);

// Tidak ada perbedaan antara menggunakan petik satu atau petik dua.
// Kita dapat menggunakan tanda petik secara bergantian, khususnya jika kita memiliki teks yang mengandung tanda petik.
// contoh 2
// const question = '"What do you think of GDSC?" I asked';
// console.log(question);

// Lalu bagaimana jika teks memiliki kedua tanda petik seperti ini?
// contoh 3
// const answer = '"I think it's awesome!" he answered confidently';
// console.log(answer);

// Tentunya kode di atas akan menghasilkan eror.
// Solusinya, gunakan backslash(\) untuk mengurangi ambiguitas dalam tanda petik. Mekanisme ini juga dikenal dengan nama escape string.
// contoh 4
// const answer = '"I think it\'s awesome!" he answered confidently';
// console.log(answer);

// Selain tanda petik, backslash juga berguna untuk mengabaikan simbol lain yang menimbulkan ambigu di dalam string, contohnya seperti backslash itu sendiri.
// contoh 5
// console.log("Windows path: C:\\Program Files\\MyProject");

// Pada String, kita juga dapat menggunakan operator plus (+).
//  Operator tersebut berfungsi untuk menggabungkan dua teks yang terpisah menjadi satu buah teks.
// contoh 6
// let greet = "Halo";
// let moreGreet = greet + greet;
// console.log(moreGreet);

// Selain concatenation, string pada JavaScript juga mendukung string interpolation. 
// Sederhananya, kita bisa memasukkan variabel ke dalam sebuah string template menggunakan backticks (`).
// contoh 7
// const myName = "Asep";
// console.log(`Hello, my name is ${myName}.`);

// 5. Boolean
// contoh 1
// let x = true;
// let y = false;
// console.log(typeof x);
// console.log(typeof y);

// Kita juga bisa menggunakan operator komparasi seperti lebih dari (>) atau kurang dari (<).
// contoh 2
// const a = 10;
// const b = 12;

// let isGreater = a > b;
// let isLess = a < b;

// console.log(isGreater);
// console.log(isLess);

// 6. Null
// Serupa dengan undefined, namun null perlu diinisialisasikan pada variabel.
// Null biasa digunakan sebagai nilai sementara pada variabel, tapi sebenarnya nilai tersebut “tidak ada”.
// contoh 1
// let someLaterData = null;
// console.log(someLaterData);

// 7. Symbol
// Tipe data Symbol digunakan untuk menunjukkan identifier yang unik.
// Ketika membuat Symbol, kita bisa memberikan deskripsi atau nama symbol seperti ini:
// contoh 1
// const id = Symbol("id");
// console.log(id);

// Symbol disebut sebagai identifier yang unik karena meskipun kita membuat dua variabel symbol dengan nama atau deskripsi yang sama, kedua nilainya tetap dianggap berbeda.
// contoh 2
// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(id1 == id2);

/*OPERATOR
    yaitu  simbol yang memberi tahu interpreter untuk melakukan operasi seperti matematika, relasional, atau logika untuk memberikan hasil tertentu
*/

// 1. Assignment Operator
// contoh 1
// let x = 10;
// let y = 5;
// x += y;
// console.log(x);

// Pada contoh kode di atas, terdapat expression x += y;
// Apa artinya? Assignment operator tersebut digunakan sebagai shortcut dari x = x + y.
// Cara ini juga dapat digunakan pada operator aritmatika lain seperti, perkalian, pengurangan, pembagian, dan lainnya.
// contoh 2
// let x = 10;
// let y = 5;
// x += y; // artinya -> x = x + y;
// x -= y; // artinya -> x = x - y;
// x *= y; // artinya -> x = x * y;
// x /= y; // artinya -> x = x / y;
// x %= y; // artinya -> x = x % y;

// 2. Comparison Operator
// Ada beberapa comparison operator yakni:
// ==	Membandingkan kedua nilai apakah sama (tidak identik).
// !=	Membandingkan kedua nilai apakah tidak sama (tidak identik).
// ===	Membandingkan kedua nilai apakah identik.
// !==	Membandingkan kedua nilai apakah tidak identik.
// >	Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
// >=	Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
// <	Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
// <=   Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.

// contoh 1
// let a = 10;
// let b = 12;
// console.log(a < b);
// console.log(a > b);

// Dalam operator komparasi di JavaScript, hal yang menjadi sedikit “tricky” adalah membedakan antara “sama” (==) dan “identik” (===).
// contoh 2
// const aString = '10';
// const aNumber = 10
// console.log(aString == aNumber) // true, karena nilainya sama-sama 10
// console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

// 3. Logical Operator
// Ada beberapa logical operator:
// &&	Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
// ||	Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).
// !   Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.

// contoh 1
// let a = 10;
// let b = 12;
// /* AND operator */
// console.log(a < 15 && b > 10); // (true && true) -> true
// console.log(a > 15 && b > 10); // (false && true) -> false
// /* OR operator */
// console.log(a < 15 || b > 10); // (true || true) -> true
// console.log(a > 15 || b > 10); // (false || true) -> true
// /* NOT operator */
// console.log(!(a < 15)); // !(true) -> false
// console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false

/*IF/ELSE STATEMENT*/

// contoh 1
// const isRaining = true;
// console.log("Persiapan sebelum berangkat kegiatan.");
// if (isRaining) {
//   console.log("Hari ini hujan. Bawa payung.");
// }
// console.log("Berangkat kegiatan.");

// contoh 2
// let x = 50;
// if (x > 70) {
//   console.log(x);
// } else {
//   console.log("Nilai kurang dari 70");
// }

//  JavaScript juga mendukung ternary operator atau conditional expression, sehingga kita bisa menuliskan if-else statement hanya dalam satu baris.
// Bentuk sederhananya: condition ? true expression : false expression
// contoh 3
// const isMember = false;
// const discount = isMember ? 0.1 : 0;
// console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

// Truthy & Falsy
// Setiap nilai pada JavaScript pada dasarnya juga mewarisi sifat boolean. Nilai ini dikenal dengan truthy atau falsy.
// Nilai truthy berarti nilai yang ketika dievaluasi akan menghasilkan nilai true, begitu pula falsy bernilai false.
// Selain nilai boolean false, tipe data atau nilai yang dianggap falsy, antara lain:
// - Number 0
// - BigInt 0n
// - String kosong seperti “” atau ‘’
// - null
// - undefined
// - NaN, atau Not a Number

// contoh 2
// let name = "";
// if (name) {
//   console.log(`Halo, ${name}`);
// } else {
//   console.log("Nama masih kosong");
// }

/*SWITCH CASE STATEMENT
    Selain if, JavaScript juga mendukung switch statement untuk melakukan pengecekan banyak kondisi dengan lebih mudah dan ringkas.
*/

// contoh 1
// let language = "French";
// let greeting = null;
// switch (language) {
//   case "English":
//     greeting = "Good Morning!";
//     break;
//   case "French":
//     greeting = "Bonjour!";
//     break;
//   case "Japanese":
//     greeting = "Ohayou Gozaimasu!";
//     break;
//   default:
//     greeting = "Selamat Pagi!";
// }
// console.log(greeting);

/*LOOP*/

// 1. For loop
// Dari beberapa cara melakukan proses loop pada JavaScript, “for” merupakan salah satu cara yang banyak digunakan.
// Bentuk sederhananya yaitu:
// for(inisialisasi variabel; test kondisi; perubahan nilai variabel) {// do something}

// contoh 1
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// 2. For of loop
// Cara ini jauh lebih sederhana dan modern dibanding for loop biasa.
// Bentuk sederhananya seperti:
// for (arrayItem of myArray) {// do something}

// contoh 2
// let myArray = ["Luke", "Han", "Chewbacca", "Leia"];
// for (const arrayItem of myArray) {
//   console.log(arrayItem);
// }

// 3. While dan do-while

// while tidak memiliki ketergantungan dengan variabel iterasi seperti pada for loop.
// Karena itu, meskipun while dapat melakukan perulangan yang sama dengan for, while lebih cocok digunakan pada kasus di mana kita tidak tahu pasti berapa banyak perulangan yang diperlukan.
// Contoh 1
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// Kondisi pada while akan dievaluasi sebelum blok kode di dalamnya dijalankan, sedangkan do-while akan mengevaluasi boolean expression setelah blok kodenya berjalan.
// Ini artinya kode di dalam do-while akan dijalankan setidaknya satu kali.
// contoh 2
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 100);

// 3. Infinite loops
// Ketika menerapkan perulangan pada program, ada satu kondisi yang perlu kita hindari yaitu infinite loop.
// Infinite loop atau endless loop adalah kondisi di mana program kita stucked di dalam perulangan.
// Ia akan berjalan terus hingga menyebabkan crash pada aplikasi dan komputer kecuali ada intervensi secara eksternal, seperti mematikan aplikasi.

//contoh 1
// let i = 1;
// while (i <= 5) {
//   console.log(i);
// }

//contoh 2
// for (let i = 1; i <= 5; i = 1) {
//   console.log(i);
// }
