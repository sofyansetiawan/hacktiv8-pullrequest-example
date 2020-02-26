1)Buatalah sebuah function "generateBoard" yang menerima sebuah parameter berupa number.
parameter yang di terima selalu diasumsikan sebuah bilangan positif.
function ini akan membuat sebuah board yang berupa array multidimensi.
array paling luar akan memiliki array didalamnya dan sebanyak parameter yang diberikan
lalu array di dalam nya akan memiliki item dan sebanyak parameter yang diberikan.
item - item dalam nested array ini akan menerima value random berupa 1 huruf di alpabet atau 1 angka dari bilangan 0 - 9
contoh : 
- input = 4
- contoh board yang terbuat 
[
  [ 8, 'U', 'J', 'S' ],
  [ 4, 'K', 'H', 'C' ],
  [ 1, 5, 2, 'Y' ],    
  [ 0, 4, 'F', 2 ]     
]
setelah board terbuat lakukan proses pengecekan item dalam board tersebut
jika jumlah item number berbeda dengan jumlah item string, maka program akan melakukan proses pembuatan board yang berbeda lagi secara otomatis.
sampai item string dan item number berjumlah sama.
dilarang menggunakan built-in function selain .push dan Math.

2) Buatlah sebuah function "sortByPhaseThenSortByLocation".
function ini menerima sebuah parameter berupa nested array, data tersebut berisi kota - kota asal students di hacktiv8
function ini akan mensorting data yang di terima menjadi sebuah nested object.
dimana object paling luar akan memiliki nama masing - masing phase sebagai key.
lalu di masing - masing object phase tersebut, akan memiliki nama - nama kota tempat student berasa.
contoh:
- input :
let arr = [
  ["Depok", "Bekasi", "Depok", "Jakarta", "Tangerang", "Bogor", "Phase 0"],
  ["Tegal", "Depok", "Bandung", "Bandung", "Bogor", "Phase 1"],
  ["Jakarta", "Bekasi", "Bandung", "Bogor", "Tangerang", "Bogor", "Phase 2"],
  ["Bali", "Makasar", "Singkawang", "Medan", "Timika", "Lombok", "Phase 3"],
]
- ouput : 
{
  'Phase 0': { Depok: 2, Bekasi: 1, Jakarta: 1, Tangerang: 1, Bogor: 1 },  
  'Phase 1': { Tegal: 1, Depok: 1, Bandung: 2, Bogor: 1 },
  'Phase 2': { Jakarta: 1, Bekasi: 1, Bandung: 1, Bogor: 2, Tangerang: 1 },
  'Phase 3': {
    Bali: 1,
    Makasar: 1,
    Singkawang: 1,
    Medan: 1,
    Timika: 1,
    Lombok: 1
  }
}
- key dalam tiap object harus dinamis.
- dilarang menggunakan built-in function apapun.