# oop-challenge-person
One of my challenges about OOP using Javascript

Kita akan membuat simulasi mengenai `Person` . 

Buatkan class `Person` yang memiliki beberapa properti dengan ketentuan berikut ini :

- `firstname` (terdapat validasi jika firstname yang dimasukkan bertipe string dan minimal 3 huruf, jika tidak maka akan berisi **""**)
- `lastname` (terdapat validasi jika lastname yang dimasukkan bertipe string dan minimal 3 huruf, jika tidak maka akan berisi **""**)
- `birthyear` (terdapat validasi jika birthyear yang dimasukkan bertipe number dan diatas 1980, jika tidak maka akan berisi **null**)
- `gender` (terdapat validasi jika gender yang dimasukkan selain male dan female, maka akan **null**)
- `address` berisi `null` saat instantiate
- `contact` berisi `null` saat instantiate
- `money` berisi `0`
- `properties` harusnya berisi koleksi barang-barang kepemilikan / harta

 `Person` mempunyai:

-  `getAge` untuk menampilkan berapa umurnya ketika dihitung dari tahun saat ini. 
  - jika birthyear adalah null, maka getAge akan menampilkan `No Age`
- `fullname` untuk menampilkan gabungan nama depan dan nama belakang.
  - Jika firstname atau lastname kosong, maka fullname akan menampilkan `John Doe`
- `working(something)` yang memiliki rules:
  - Jika yang dikerjakan adalah `ngoding javascript`, maka `money` nya bertambah `2000000`
  - Jika yang dikerjakan adalah `menulis artikel`, maka `money` nya bertambah `1000000`
  - Jika yang dikerjakan adalah `mengantar barang`, maka `money` nya bertambah `500000`
  - Selain itu maka money tidak bertambah
- `setAddress(params...)` yang berisi informasi `country, city, street, number, postalcode` untuk mengisi properti `address`

- `setContact(params...)` yang berisi informasi untuk mengisi properti contact dengan ketentuan berikut:
  - `phone` berisi string nomor telefon dan harus berisi tanda `+`
  - `email` berisi email dari gabungan firstname dan lastname dari `Person` ditambah `@email.com` sehingga email yang diharapkan menjadi `firstnamelastname@email.com` (diubah menjadi huruf kecil)
  - `website` berisi link website dari gabungan firstname dan lastname dari `Person` sehingga menjadi `www.firstnamelastname.com`
- `buyProperty(property)` : `Person`membeli property untuk menambahkan ke koleksi property / hartanya nya.
  - Setiap membeli sebuah `property` (ada validasi pastikan property itu mempunyai `price` ) 
  - Jika `money` masih cukup untuk membeli dengan `price` tersebut, maka `money` akan dikurangi dengan `price` property tersebut
    
- Berikut ini skeleton kode untuk membantumu:

```
/*
 * Person
 */

class Person {

}

class Contact {

}

class Address {

}

/*
 * Properties
 */

class Car {
	constructor(name, brand, type, color, price){}
}

class House {
	constructor(numberOfFloor, type, price, numberOfRooms){}
}

class Laptop {
	constructor(name, brand, processor, memory, harddrive, price){}
}

const sofyan = new Person("Sofyan", "Setiawan", 1992, "male");

const putri = Person.createNew("Putri", "Fitri", 1998, "female"); // ketika dijalankan menghasilkan instance person juga

console.log(sofyan.getAge); // 28

console.log(sofyan.fullname); // "Sofyan Setiawan"

sofyan.working("ngoding javascript") // money + 2000000
sofyan.working("menulis artikel") // money + 1000000
sofyan.working("mengantar barang") // money + 500000
sofyan.working("ngoding javascript") // money + 2000000
// total akhir money sofyan adalah 5500000

const mycar = new Car(/*isi argument*/);
const rumahMewah = new House(/*isi argument*/);
const macbook = new Laptop(/*isi argument*/);

sofyan.buyProperty(mycar);
sofyan.buyProperty(macbook);
```
