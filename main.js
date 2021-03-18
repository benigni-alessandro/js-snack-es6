$(document).ready(function(){
  // bicicletta();
   calcio();

});
function bicicletta() {
  // Creare un array di oggetti:
  // Ogni oggetto descriverà una bici da corsa
  // con le seguenti proprietà: nome e peso.
  // Stampare a schermo la bici con peso minore
  // utilizzando destructuring e template literal
  const bici =[
    {
      nome: 'Bmx',
      peso: 5
    },
    {
      nome: 'Tandem',
      peso: 5
    },
    {
      nome: 'Triciclo',
      peso: 3
    },
    {
      nome: 'Bici da cicloturismo',
      peso: 3
    },
    {
      nome: 'Mountain bike',
      peso: 5
    },
    {
      nome: 'Gravel bike',
      peso: 8
    },
  ];
  let index = 0;
  let min = bici[0].peso;
  for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < min) {
      const {peso} = bici[i];
      min = peso;
      index = i;
    }
  }
  document.write(`La bici che pesa meno é la ${bici[index].nome} ed il suo peso é ${min} kg`);
}

function randomNumberInRange(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function calcio() {
  const equipos =[
    {
      nome: 'juve',
      punti_fatti: 0,
      falli: 0
    },
    {
      nome: 'milan',
      punti_fatti: 0,
      falli: 0
    },
    {
      nome: 'inter',
      punti_fatti: 0,
      falli: 0
    },
    {
      nome: 'lazio',
      punti_fatti: 0,
      falli: 0
    },
    {
      nome: 'verona',
      punti_fatti: 0,
      falli: 0
    },
    {
      nome: 'atalanta',
      punti_fatti: 0,
      falli: 0
    },
  ];

  let new_array =[];

  for (let i = 0; i < equipos.length; i++) {
    equipos[i].punti_fatti = randomNumberInRange(0, 100);
    equipos[i].falli = randomNumberInRange(0, 100);

    const {nome, falli} = equipos[i]
    new_array.push(nome, falli);
  }
  console.log(new_array);
  console.log(equipos);
}
