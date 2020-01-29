function groupAnimals(animals) {
  // you can only write your code here!
  let aToZ = [];
  let obj = {};
  for (i = 0; i < animals.length; i++) {
        if(!obj[animals[i][0]]) {
            obj[animals[i][0]] = [];
            obj[animals[i][0]].push(animals[i]);
        }
        else {
            obj[animals[i][0]].push(animals[i]);
        }
    }
    for (k in obj) {
        aToZ.push(obj[k]);
    }

    return aToZ;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]