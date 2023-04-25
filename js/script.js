// - Generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
// Attraverso l’apposita API di Boolean

const App = new Vue {
  el: "root",
  data: {
    randomMail: []
  },

  mounted: function () {
    for (let i = 0; i < 10; i++) {
      axios

      // Mail di Boolean
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      
      .then( (result) => {

      }
      )
    }
    
  }

}