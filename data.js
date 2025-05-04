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


const fruit = ['banana', 'orange', 'mango', 'lemon']
const fruiti = []
for (i=0; i < fruit.length; i++){

  fruiti[fruit.length- 1 - i] = fruit[i]

}
console.log(fruiti)


let land = []
const subber = 'land'
for (i=0; i<countries.length;i++){
 if (countries[i].includes(subber)){
  land.push(countries[i])
 }
}

console.log(land)

let newCountriess = []

for (i=0; i<countries.length; i++){

  newCountriess[countries.length-1-i] = countries[i].toUpperCase()
  
}

console.log(newCountriess)

let asterisco = '#'
console.log(asterisco)
for (i=0; i < 5; i++){

  asterisco = asterisco + ' #'
  console.log(asterisco)
}


let rgb = 0
let rgbArr = []
for (i=0; i<3; i++){

  rgb = Math.floor(Math.random()*256)
  rgbArr.push(rgb)
  
}


console.log(`RGB: ${rgbArr}`)


let mern =''

for (i=0; i<mernStack.length; i++){

  mern = mern+mernStack[i].slice(0,1)
}

console.log(mern)


const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]


for (i=0; i<fullStack.length; i++){

  

  for (j=0; j < fullStack[i].length; j++){
    console.log(fullStack[i][j])
  }

 
  

    
}


let casual = [

  [0,4,6,7,8,9,'yu6'],
  ['ciao', 'uff', 'jjj'],
  ['patagonia', 'lol']
]

let plus = ''

for (i=0; i < casual.length; i++){

  for (j=0; j < casual[i].length; j++){
     if (casual[i][j] > 0 && typeof casual[i][j] === typeof 1){
      plus = plus + casual[i][j]
    }
  }
    
}

console.log(plus)



let casuale = [

  [0,4,6,7,8,9,'yu6'],
  ['ciao', 'uff', 'jjj'],
  ['patagonia', 'lol'],
  ['enieiv', 12]
]

let somma = 0
for (i=0; i < casuale.length; i++){

  for (j=0; j < casuale[i].length; j++){

    if (typeof casuale[i][j] == typeof 1){
      somma = somma+ casuale[i][j]
    }
  }

}

if (somma > 10){
  console.log(`La somma ${somma} è maggiore di 10`)
}else{
  console.log(`La somma ${somma} è minore di 5`)
}