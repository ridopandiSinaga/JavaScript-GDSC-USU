/*FUNCTION*/
// -----------------------------------------------------------------------------------------------------------//
/*DECLARING FUNCTION*/

// 1. Parameter & Argument
// Parameter merupakan variabel yang didefinisikan sebagai input dari sebuah fungsi.
// contoh 1
// function multiply(a, b) {
//   return a * b;
// }

// Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi.
// contoh 2
// multiply(3, 4);

// Setelah membuat fungsi kita dapat memanggilnya dengan menuliskan nama fungsi diikuti tanda kurung dan memasukkan argumen di dalamnya (jika ada).
// contoh 3
// function greeting() {
//   console.log("Good Morning!");
// }
// greeting();

// Untuk menambahkan parameter pada fungsi, tambahkan variabel di dalam tanda kurung fungsi.
// Namun, variabel tersebut tidak memerlukan keyword var, let, ataupun const.
// Kita juga bisa menambahkan lebih dari satu parameter dengan memberikan tanda koma antar variabel parameternya.
// contoh 4
// function greeting(name, language) {
//   if (language === "English") {
//     console.log(`Good Morning ${name}!`);
//   } else if (language === "French") {
//     console.log(`Bonjour ${name}!`);
//   } else {
//     console.log(`Selamat Pagi ${name}!`);
//   }
// }

// Sehingga dalam memanggilnya pun kita perlu mengirimkan dua buah nilainya sebagai argumen:
// contoh 5
// function greeting(name, language) {
//   if (language === "English") {
//     console.log(`Good Morning ${name}!`);
//   } else if (language === "French") {
//     console.log(`Bonjour ${name}!`);
//   } else {
//     console.log(`Selamat Pagi ${name}!`);
//   }
// }
// greeting("Harry", "French");

// Function dapat menghasilkan output atau mengembalikan sebuah nilai.
// Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan perhitungan matematika dan hasilnya dapat kita masukkan ke dalam sebuah variabel.
// Agar fungsi bisa mengembalikan nilai, gunakan keyword return diikuti dengan nilai yang akan dikembalikan.
// contoh 6
// function multiply(a, b) {
//   return a * b;
// }
// let result = multiply(10, 2);
// console.log(result);

// Nilai kembalian tidak hanya number, bisa juga berupa string, boolean, object, array, atau tipe yang lain.
// contoh 7
// function greeting(name, language) {
//   if (language === "English") {
//     return `Good Morning ${name}!`;
//   } else if (language === "French") {
//     return `Bonjour ${name}!`;
//   } else {
//     return `Selamat Pagi ${name}!`;
//   }
// }
// let greetingMessage = greeting("Harry", "French");
// console.log(greetingMessage);

// 2. Expression Function
// Cara lain untuk membuat sebuah fungsi pada JavaScript adalah expression function.
// Expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel.
// Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. Fungsi yang tidak bernama juga dikenal dengan anonymous function.
// contoh 1
// const greeting = function (name, language) {
//   if (language === "English") {
//     return "Good Morning " + name + "!";
//   } else if (language === "French") {
//     return "Bonjour " + name + "!";
//   } else {
//     return "Selamat Pagi " + name + "!";
//   }
// };
// console.log(greeting("Ron", "English"));

/*FUNCTION PARAMETER*/

// 1. Default Parameter
// Fungsi pada JavaScript tidak melakukan pengecekan terhadap jumlah maupun tipe argumen yang dimasukkan ke dalam parameter.
// Ini berarti kita bisa memasukkan argumen meskipun tidak sesuai dengan parameter yang telah didefinisikan.
// contoh 1
// function exponentsFormula(baseNumber, exponent) {
//   const result = baseNumber ** exponent;
//   console.log(`${baseNumber}^${exponent} = ${result}`);
// }
// exponentsFormula(2);

// Seperti yang kita lihat pada contoh kode di atas, ketika argumen lebih sedikit dari parameternya, maka parameter yang tidak terdefinisi akan bernilai undefined. Sebagai solusi jika memungkinkan, kita bisa memberikan nilai default pada parameter.
// Nilai ini akan digunakan jika kita tidak memasukkan parameter.
// contoh 2
// function exponentsFormula(baseNumber, exponent = 2) {
//   const result = baseNumber ** exponent;
//   console.log(`${baseNumber}^${exponent} = ${result}`);
// }
// exponentsFormula(3);

// 2. Rest Parameter
// Masih ingat dengan spread operator (...)?
// Jika spread operator menyebarkan array menjadi beberapa elemen berbeda, rest parameter ini adalah kebalikan dari operator tersebut.
// Rest parameter juga dituliskan menggunakan three consecutive dots (...). Dengan rest parameter, kita dapat menggabungkan beberapa elemen menjadi satu array.
// Tentu teknik ini sangat bermanfaat ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.
// contoh 1
// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }
// console.log(sum(1, 2, 3, 4, 5));

/*ARROW FUNCTION
     Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. 
     Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). 
     Tentunya penulisan arrow function ini akan lebih singkat.
*/

// Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular function.
// Regular function dapat berupa function declaration dan function expression.
// Namun, arrow function hanya berupa expression function saja. Itu sebabnya arrow function memiliki nama lengkap “arrow function expression”.

// contoh 1 (reguler function)
// // contoh 1.1 Dengan function declaration
// function sayHello(greet) {
//   console.log(`${greet}!`);
// }
// // contoh 1.2 Dengan function expression
// const sayName = function (name) {
//   console.log(`Nama saya ${name}`)
// }

// contoh 2  (arrow function)
// function expression
// const sayName = (name) => {
//   console.log(`Nama saya ${name}`)
// }

// Pada arrow function kita tidak perlu menuliskan keyword function setiap membuat fungsi.
// Kita tetap menuliskan parameter di dalam tanda kurung lalu diikuti dengan tanda panah (=>) sebelum kurung kurawal.

// Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung seperti berikut:
// contoh 3
// const sayName = name => {
//   console.log(`Nama saya ${name}`);
// };
// sayName("Leia");

// Namun, jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong seperti ini:
// contoh 4
// const sayHello = () => {
//   console.log("Selamat sore semuanya!");
// };
// sayHello();

// Ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal.
// Tentunya ini akan menghemat baris kode yang kita tulis.
// contoh 5
// const sayName = (name) => console.log(`Nama saya ${name}`);
// sayName("Leia");

// Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).
// contoh 6
// const multiply = (a, b) => a * b;
// console.log(multiply(3, 4));

/*VARIABLE SCOPE
     Ada banyak keadaan di mana kita membutuhkan variabel untuk diakses di seluruh script yang kita buat. 
     Tetapi ada juga keadaan di mana kita ingin variabel tersebut hanya dapat diakses pada cakupan fungsi dan fungsi turunannya saja.
     Variabel yang dapat diakses dari seluruh script disebut dengan “globally scoped”, sementara variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan “locally scoped”.

     Variabel JavaScript menggunakan fungsi untuk mengelola cakupannya. 
     Jika variabel didefinisikan di luar fungsi, maka variabel tersebut bersifat global. 
     Jika variabel didefinisikan di dalam fungsi, maka variabel bersifat lokal dan cakupannya hanya pada fungsi tersebut beserta turunannya.
*/

// contoh 1
// // global variable, dapat diakses pada parent() dan child()
// const a = 'a';

// function parent() {
//   // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
//   const b = 'b';

//   function child() {
//     // local variable, dapat diakses hanya pada fungsi child().
//     const c = 'c';
//   }
// }

// Kita harus berhati-hati dalam mendefinisikan variabel di dalam fungsi.
// Pasalnya, kita bisa mendapatkan hasil yang tidak diperkirakan, contohnya seperti berikut:
// contoh 2
// function multiply(num) {
//   total = num * num;
//   return total;
// }
// let total = 9;
// let number = multiply(20);
// console.log(total);

// Mungkin kita berharap nilai total akan tetap 9, mengingat variabel total pada fungsi multiply seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut.
// Hal ini bisa terjadi karena pada fungsi multiply() kita tidak menetapkan variabel total sebagai cakupan lokal.
// Kita tidak menggunakan keyword const atau let ketika mendeklarasikan variabel total pada fungsi multiply() sehingga variabel total menjadi global.

// Sehingga perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.
// Sebisa mungkin kita harus menghindari pembuatan variabel global, karena variabel global dapat diakses pada seluruh script yang kita tuliskan. Semakin banyak variabel global yang kita tuliskan, semakin tinggi kemungkinan tabrakan (collision) terjadi.

/*CLOSURE
    Sebelumnya kita telah tahu bahwa fungsi dapat didefinisikan dalam lingkup global atau di dalam fungsi lain. 
    Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure. 
    Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.
*/

// contoh 1
// function init() {
// function init() {
//   const name = "Obi Wan";

//   function greet() {
//     console.log(`Halo, ${name}`);
//   }

//   return greet;
// }

// const myFunction = init();
// myFunction();

// Pada contoh 1
// Fungsi init() memiliki variabel lokal name dan fungsi greet().
// Fungsi greet() adalah inner function yang didefinisikan di dalam init() dan hanya bisa diakses dari dalam fungsi init().
// Perhatikan bahwa fungsi greet() tidak memiliki variabel lokal.
// Namun, karena inner function memiliki akses ke variabel di parent function-nya, sehingga greet() dapat mengakses variabel name.
// Itulah yang dimaksud dengan lexical scope.

// contoh 2
// function init() {
//   const name = "Obi Wan";

//   function greet() {
//     console.log(`Halo, ${name}`);
//   }

//   return greet;
// }

// const myFunction = init();
// myFunction();

// Pada contoh 2 di atas akan menghasilkan output yang sama.
// Perbedaannya adalah fungsi greet() dikembalikan (return) dari outer function-nya sebelum dieksekusi.
// Karena variabel name berada dalam scope init(), maka umumnya variabel tersebut akan hilang atau dihapus ketika fungsinya selesai dijalankan.
// Namun, pada kasus di atas fungsi greet() yang diakses melalui fungsi MyFunction() masih memiliki referensi atau akses ke variabel name.
// Variabel pada mekanisme di atas telah tertutup (close covered), yang berarti variabel tersebut berada di dalam closure.

// Memang di awal cukup sulit untuk memahami closure.
// Jadi, mari kita lihat langsung untuk apa closure ini digunakan pada suatu program yang nyata.
// JavaScript tidak memiliki cara untuk mendeklarasikan suatu fungsi atau variabel menjadi private seperti bahasa Java, c++ dll.
// Sehingga sebuah fungsi atau variabel bisa diakses dari mana pun.
// Kenapa kita membutuhkan private method? Salah satunya adalah untuk membatasi akses ke fungsi atau variabel.
// contoh 3
// let counter = 0;

// const add = () => {
//   return ++counter;
// };

// console.log(add());
// console.log(add());
// counter = 23;
// console.log(add());

// Pada contoh 3 diatas nilai counter akan bertambah ketika kita memanggil fungsi add().
// Namun, kita juga bisa mengubah nilai counter secara langsung dengan assignment operator.
// Pada contoh program yang lebih kompleks, sebaiknya hal ini dihindari karena perubahan langsung pada nilai counter bisa saja memunculkan bug.

// Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private. Seperti inilah contoh program counter yang dibuat dengan closure:
// contoh 4
// const add = () => {
//   let counter = 0;
//   return () => {
//     return ++counter;
//   };
// };

// const addCounter = add();

// console.log(addCounter());
// console.log(addCounter());
// console.log(addCounter());





// Menggunakan closure untuk variabel privat
function createCounterWithClosure() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    },
    // Closure untuk membuat variabel privat
    makePrivate: function() {
      let privateVar = 'Ini adalah variabel privat';

      return {
        getPrivateVar: function() {
          return privateVar;
        },
      };
    },
  };
}

const counterWithClosure = createCounterWithClosure();

console.log(counterWithClosure.count); // Output: undefined
console.log(counterWithClosure.getCount()); // Output: 0
counterWithClosure.increment();
console.log(counterWithClosure.getCount()); // Output: 1

const privateCounter = counterWithClosure.makePrivate();

console.log(privateCounter.privateVar); // Output: undefined, karena privateVar privat
console.log(privateCounter.getPrivateVar()); // Output: "Ini adalah variabel privat"
