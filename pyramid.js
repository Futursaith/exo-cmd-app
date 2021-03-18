

const showStars = (nbBase, motif) => {

  let str = ''
  for (let i = 1; i <= nbBase; ++i) {
    str += motif.repeat(i)
    if (i !== nbBase) {
      str += '\n'
    }
  }
  return str
}


const nbBase = process.argv[2];
const motif = process.argv[3];


let resultat = showStars(nbBase, motif)
console.log(resultat)