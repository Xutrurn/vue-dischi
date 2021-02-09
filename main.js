// alert("Hello world");

// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
//
// Stampiamo tutto a schermo, in questo momento non è importante la parte grafica.
//
// Bonus:
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.
//
// Chiamata: https://flynn.boolean.careers/exercises/api/array/music



var app = new Vue({
  el: "#app",
  data: {
    dischi: [],
    valoreSelezionato: '',
    generiMusicali: []
  },
  mounted() {

    axios
      .get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((result) => {
        // console.log(result.data.response);
        this.dischi = result.data.response;
        this.selezionaGenere();
      })
      .catch(error => console.log('errore', error));
  },

  methods: {
    selezionaGenere() {
      this.dischi.forEach(element => {
        // console.log(element);
        if (!this.generiMusicali.includes(element.genre)) {
          this.generiMusicali.push(element.genre)
          // console.log(this.generiMusicali);
        }
      });
    }

  }



});

// console.log();
