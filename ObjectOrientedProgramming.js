/*OBJECT ORIENTED PROGRAMMING*/

// contoh 1
// const car = {
//   // properties
//   brand: 'Ford',
//   color: 'red',
//   maxSpeed: 200,
//   chassisNumber: 'f-1',
//   // methods
//   drive: () => {
//     console.log('driving');
//   },
//   reverse: () => {
//     console.log('reversing');
//   },
//   turn: () => {
//     console.log('turning');
//   }
// }

// console.log(car.brand); // Ford
// console.log(car.color); // red
// console.log(car.maxSpeed); // 200
// console.log(car.chassisNumber); // f-1
// car.drive(); // driving
// car.reverse(); // reversing
// car.turn(); // turning

// Pada contoh 1 diatas, Kode di atas merupakan contoh objek car di JavaScript.
// Seperti yang kita lihat, objek car memiliki properti brand, color, maxSpeed, dan chassisNumber; dan juga method drive, reverse, dan turn.
// Kita bisa akses nilai properti dan panggil method yang ada di dalam objek tersebut.

// Lalu bagaimana jika kita ingin membuat objek dua mobil baru atau bahkan lebih dengan nilai yang berbeda?
// contoh 2
// const car = {
//   brand: "Ford",
//   color: "red",
//   maxSpeed: 200,
//   chassisNumber: "f-1",
//   drive: () => {
//     console.log("driving");
//   },
//   reverse: () => {
//     console.log("reversing");
//   },
//   turn: () => {
//     console.log("turning");
//   },
// };

// const myCar = {
//   brand: "Tesla",
//   color: "black",
//   maxSpeed: 250,
//   chassisNumber: "t-1",
//   drive: () => {
//     console.log("driving");
//   },
//   reverse: () => {
//     console.log("reversing");
//   },
//   turn: () => {
//     console.log("turning");
//   },
// };

// const yourCar = {
//   brand: "BMW",
//   color: "white",
//   maxSpeed: 300,
//   chassisNumber: "b-1",
//   drive: () => {
//     console.log("driving");
//   },
//   reverse: () => {
//     console.log("reversing");
//   },
//   turn: () => {
//     console.log("turning");
//   },
// };

// Kode contoh 2 di atas disebut tidak efektif. Bagaimana jika ada banyak mobil yang harus dibuat? 
// Misalnya, kita ingin membangun aplikasi yang memiliki entitas pelanggan. 
// Jika menggunakan cara di atas, kita harus membuat objek pelanggan. Masalahnya jika aplikasi sudah digunakan oleh 100 pelanggan? 
// Apakah kita sanggup untuk membuat 100 obejct?


// Oleh karena itu, OOP menawarkan sebuah solusi yakni dengan membuat object blueprint. 
// Melalui object blueprint, kita bisa membuat cetakan untuk membuat objek yang sudah terdefinisikan macam-macam properti dan method-nya.
// Sehingga kita cukup menggunakan cetakan tersebut untuk membuat objek yang serupa, tetapi kita bisa menentukan nilai-nilai properti yang berbeda.
// contoh 3 
// class Car {                          // blueprint (kelas) Car
//   constructor(merk, model, tahun) {  // jangan hiraukan dulu blog kode ini ya
//     this.merk = merk;
//     this.model = model;
//     this.tahun = tahun;
//     this.kecepatan = 0;
//   }

//   // Method untuk mengendarai mobil
//   drive(kecepatanBaru) {
//     this.kecepatan = kecepatanBaru;
//     console.log(`${this.merk} ${this.model} sedang berjalan dengan kecepatan ${this.kecepatan} km/jam.`);
//   }

//   // Method untuk menghentikan mobil
//   stop() {
//     this.kecepatan = 0;
//     console.log(`${this.merk} ${this.model} telah berhenti.`);
//   }
// }

// // Membuat beberapa objek mobil menggunakan blueprint "Car"
// const myCar = new Car("Toyota", "Camry", 2022);
// const yourCar = new Car("Honda", "Civic", 2021);
// const hisCar = new Car("Nissan", "X-Trail", 2020);



/*CONSTRUCTOR
    JavaScript bukanlah class-based language, melainkan prototype-based language.
    Menariknya, konsep-konsep OOP yang memanfaatkan class seperti pewarisan dapat dilakukan dengan memanfaatkan prototype.
    Untuk konsep pewarisan di beberapa materi mendatang, semantara kita fokus ke masalah sebelumnya, yaitu object blueprint.
*/


// Bagaimana cara membuat object blueprint di JavaScript?
// contoh 1






// SKIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP OOP