//manual test cases
const s1 = 'abc';
const s2 = 'bdc';
const s3 = 'foo';
const s4 = 'bar';
const s5 = 'bar';
const s6 = 'foo';
const s7 = 'fleece';
const s8 = 'bleed';

//function declaration
const oneToOneMap = (s1, s2) => {

  //boolean if input strings have 1:1 mapping
  let result = false;

  //split input strings into arrays
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  //mapping of input strings
  const map1 =  {};
  const map2 = {};

  for (let i = 0; i < arr1.length; i++)  {
    if (map1[arr1[i]]) {
      map1[arr1[i]]++;
    } else {
      map1[arr1[i]] = 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (map2[arr2[i]]) {
      map2[arr2[i]]++;
    } else {
      map2[arr2[i]] = 1;
    }
  }

  //getting map keys
  let map1Values = Object.values(map1);
  let map2Values = Object.values(map2);

  //compare key counts, indicate if 1:1 map if condition is true
  if (map1Values.length >= map2Values.length) result = true;

  //return resulting boolean
  return result;
}

//setting up to grab arguments from cli
const args = process.argv.slice(2);


//print function return value using test cases
console.log(oneToOneMap(args[0], args[1]));
