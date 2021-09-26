// variable hoisting
const test = '';
console.log(test);

// arrow function

const arrFun = () => {
  let inp = document.getElementById('check').value;
  let inp2 = document.getElementById('check1').value;
  // if (inp !== "" && inp2 !== "") {
  //   console.log("If")
  //   if (inp === inp2) {
  //     let para = `True statement`;

  //     document.getElementById("para").innerHTML = para;

  //     // console.log("true");
  //   } else {
  //     let para = `False statement`;
  //     document.getElementById("para").innerHTML = para;
  //     // console.log("false");
  //   }
  // } else {
  //   console.log("else")
  //   document.getElementById("para").innerHTML = "";
  //   return false;
  // }

  // console.log("inp", inp);
  // console.log("inp", inp2);
  // console.log(inp !== "" && inp2 !== "");

  const a = () => {
    // console.log("first");
    inp === inp2
      ? (document.getElementById('para').innerHTML = `${inp} True statement`)
      : (document.getElementById('para').innerHTML = `${inp2} False statement`);
  };

  const b = () => {
    // console.log("second");
    document.getElementById('para').innerHTML = '';
    return false;
  };

  inp !== '' && inp2 !== '' ? a() : b();
};
//  Using Array in JS
// Reverse string build in method
// let arr = 'Singh';
let arr = document.getElementById('check2');

let splt = arr.split('');
console.log(splt);
let rev = splt.reverse();
console.log(rev);
let jn = rev.join('');
console.log(jn);

// Without buildIn method
let intVal = '';

let arrRev = () => {
  console.log('arrInp');
};

let arrRevIt = () => {
  let arrInp = document.getElementById('check2').value;
  if (intVal === '') {
    intVal = arrInp;
  }
  let splitStrn = arrInp.split('');
  let revThis = splitStrn.reverse();
  let jnThis = revThis.join('');
  // console.log(intVal);
  document.getElementById('result').innerHTML = jnThis;
};
