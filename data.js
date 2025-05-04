let paga = 8
let pagagiornaliera = paga*8
let pagasettimanale = pagagiornaliera *5
let pagamensile = pagasettimanale *4

console.log (`Il tuo guadagno giornaliero è di ${pagagiornaliera}, il tuo guadagno settimanale è di ${pagasettimanale}, il tuo stipendio mensile è di ${pagamensile}, il tuo stipendio annuale è di ${pagamensile*12}`)

if ((pagamensile*12) < 30000){
  console.log('datti da fare')
}

let newArr = [250, 25000, 42000, 60000, 88000, 12000, 'abc', '7hf5']
let massimo = newArr[0]

for (i=0; i < newArr.length; i++){

  if (newArr[i] > massimo && typeof newArr[i] === typeof 1){
    massimo = newArr[i]
    
    
  }
  
}

console.log(massimo)


let newArrr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
let second =[]

for (i=0; i < newArrr.length; i++){
  second.push(newArrr[i])
    for (j=0; j < second.length; j++){
      let massimox = second[0].length
      if (second[j].length > massimo){
        massimox = second[j]
        console.log(massimox)
      }
    }
}

console.log(second)


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']


let arrayTot = []
for (i=0; i<countries.length; i++){

  arrayTot.push(countries[i], (countries[i].slice(0,3)).toUpperCase(), countries[i].length)
}

console.log(arrayTot)





