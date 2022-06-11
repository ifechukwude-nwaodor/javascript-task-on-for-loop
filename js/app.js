let team_profile=[
    {
      name: "Edward Preciuos Omegbu",
      img:"image/gamepad.jpg",
      image:"image/codegiyu.jpg",
      complexion: "Dark",
      bestFood:"Pasta",
      bestMovie:" One piece",
      age: "26",
      //learnt:[HTML, CSS, javascript]

   },

   {
      name: "Ifechukwude",
      img:"image/flower.jpg",
      image:"image/me.jpg",
      complexion: "Fair",
      bestFood:"Rice",
      bestMovie:"Titanic",
      age:"24",
     // learnt:[HTML, CSS, javascript]

   },

   {
      name: "Natacha",
      img:"image/flowery.jpg",
      image:"image/natacha.jpg",
      complexion: "Dark",
      bestFood:"Starch and banga soup",
      bestMovie:"Like stars on earth",
      age:"24",
      //learnt:[HTML, CSS, javascript]

   },

   {
      name: "Ayodeji Eluyemi",
      img:"image/basketball.jpg",
      image:"image/ayo.jpg",
      complexion: "Dark",
      bestFood: "Fried Rice",
      bestMovie:"Arthdal Chronicle",
      age:"20",
      //learnt:[HTML, CSS, javascript]

   },

   {
      name: "Adedamola Jimi Bada",
      img:"image/football.jpg",
      image:"image/bada.jpg",
      complexion: "Dark",
      bestFood:"Beans",
      bestMovie:"Revenge of the sith.",
      age:"24",
      //learnt:[HTML, CSS, javascript]

   },

   {
      name:"Fawsiyyah Lamidi",
      img:"image/flowers.jpg",
      image:"image/fawsiyyah.jpg",
      complexion:"Fair",
      bestFood:"Rice and beans",
      bestMovie:"Little",
      age:"17",
     // learnt:[HTML, CSS, javascript]

   },

   {
      name: "Obi Divine",
      img:"image/basketballer.jpg",
      image:"image/divine.jpg",
      complexion: "Dark",
      bestFood:"Yam and egg",
      bestMovie:"Ready player one",
      age:"22",
      //learnt:[HTML, CSS, javascript]

   },

   {
      name: "Chinonso MIchael",
      img:"image/arcade.jpg",
      image:"image/nonso.jpg",
      complexion: "Dark",
      bestFood:"African salad",
      bestMovie:"Power",
      age:"25",
      //learnt:[HTML, CSS, javascript]

   },

   {
      name: "Mohammed Akorede",
      img:"image/cards.jpg",
      image:"image/sosoliso.jpg",
      complexion: "Dark",
      bestFood:"none",
      bestMovie:"none",
      age:"22",
      //learnt:[HTML, CSS, javascript]

   }

]

let row = document.getElementById('row');

for (i = 0; i<team_profile.length; i++){
   let memberProfile = `<div class="col-lg-4 mt-5 mb-5">
                           <div class="card">
                              <div class="imageCard rounded-top" style="background:url(../${team_profile[i].img})">
                                  
                              </div>
                              <div class ="img-card mx-auto rounded-circle">
                                  <img src="${team_profile[i].image}" class="img-fluid rounded-circle">
                              </div>
                              <div class="details mt-5 ps-3">
                                  <h3 class="name text-center text-warning"> ${team_profile[i].name}</h3>
                                  <p class="name fst-italic fw-2"><span class=" text-warning">Complexion:</span> ${team_profile[i].complexion}</p>
                                  <p class="name fst-italic fw-2"><span class=" text-warning">Best food:</span> ${team_profile[i].bestFood}</p>
                                  <p class="name fst-italic fw-2"><span class=" text-warning">Best movie:</span> ${team_profile[i].bestMovie}</p>
                                  <p class="name fst-italic fw-2"><span class=" text-warning">Age:</span> ${team_profile[i].age}</p>
                                  <p class="name fst-italic fw-2"><span class=" text-warning">Things learnt:</span> learnt html, css, javascript</p>
                              </div>
                              <div class="mb-5 text-center">
                                 <button class="clickme btn btn-warning button" onclick="alertname(${i})"> who am i?</button>
                              </div>
                           </div>
                        </div>`;


   row.innerHTML += memberProfile;
}
function alertname(i) {
       alert(team_profile[i].name + " is awesome");
}



  


