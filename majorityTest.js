
let name = process.argv[2];
let firstname = process.argv[3];
let age = process.argv[4];

let msg;

if (age >= 18) {

  msg = `${firstname} ${name}, vous etes majeur, vous pouvez voter`
}

else {

  msg = `${firstname} ${name}, vous êtes mineur, vous ne pouvez pas voter`
}


console.log(msg)