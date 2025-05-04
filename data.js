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


