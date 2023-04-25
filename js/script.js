// - Generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// Attraverso l’apposita API di Boolean
const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            mails: [],
            numb: 40
        }
    },