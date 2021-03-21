$(document).ready(function(){
  gatti();

});
// Definire un array di oggetti;
// ogni oggetto rappresenta un gatto,
// che è caratterizzato da: nome, età, colore e sesso.
// Tramite la funzione .forEach(),
// stampare in pagina tutti i gattini,
// ciascuno con il proprio colore e il proprio nome.
function gatti() {
  const cats =[
    {
      nome: 'Perla',
      eta: 2,
      colore: 'bianco',
      sesso: 'femmina'
    },
    {
      nome: 'Garfield',
      eta: 4,
      colore: 'arancione',
      sesso: 'maschio'
    },
    {
      nome: 'Birra',
      eta: 7,
      colore: 'nero',
      sesso: 'femmina'
    },
    {
      nome: 'Gina',
      eta: 10,
      colore: 'rosso',
      sesso: 'femmina'
    },
    {
      nome: 'Coco',
      eta: 15,
      colore: 'grigio',
      sesso: 'maschio'
    },
  ];
  // MILESTONE1
  // cats.forEach((item, i, array) => {
  //   $('#cats_list').append(`<li>Il gatto di nome ${item.nome} é di colore ${item.colore} </li>`)
  //});
  // MILESTONE 2
  const maschi = cats.filter((item) => item.sesso == 'maschio');
  const femmine = cats.filter((item) => item.sesso == 'femmina');

  console.log(femmine);
  console.log(maschi);



  cats.forEach((item, i, array) => {
    let colore;
    let brightnes;
    if (item.sesso == 'maschio') {
      colore = 'azzurro';
    } else {
      colore = 'rosa';
    }
    if (item.eta >= 10) {
      cats[i].brightnes = "60%";
      brightnes = 'brightnes_1';
    } else if (item.eta < 8 && item.eta > 5) {
      cats[i].brightnes = "80%";
      brightnes = 'brightnes_2';
    } else {
      cats[i].brightnes = "120%";
      brightnes = 'brightnes_3';
    }
    $('#cats_list').append(`<li class="${colore} ${brightnes}">Il gatto di nome ${item.nome} é di colore ${item.colore} <i class="fas fa-ribbon"></i> </li>`)
    });

    // MILESTONE 3
    // CREO NUOVO ARRAY MARGED E ELIMINO LE PROPRIETA CHE NON MI SERVONO
  let mergedcats = [...maschi,...femmine];
  //PRIMO MODO CON FOR
  //   for (var i = 0; i < mergedcats.length; i++){
  //   delete mergedcats[i].eta;
  //   delete mergedcats[i].sesso;
  // }
  // 2 MODO CON MAP
  let newarray = mergedcats.map(function(cat) {
    delete cat.eta;
    delete cat.sesso;
    return cat;
  })
    console.log(newarray);






}
