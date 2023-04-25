// - Generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// Attraverso l’apposita API di Boolean

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            mails: [],
            numb: 10
// 10 indirizzi da generare
        }
    },
    methods:{
        generateMail(){
            // Generare 10 indirizzi email
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((element)=>{
                this.mails.push(element.data.response)
                console.log(this.mails.length);
                if(this.numb == this.mails.length){
                    this.$nextTick(()=>{
                        this.$refs.adress[this.$refs.adress.length-1].scrollIntoView({behavior: "smooth"})
                        console.log(this.$refs.adress[this.$refs.adress.length-1])
                    })
                }
            });
        },
        generateMails(){
            this.mails=[];
            for(let i =0; i<this.numb;i++){
                this.generateMail();
            }
        },
        addMail(){
            this.numb++;
            // usiamo la Api di Boolean 
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((element)=>{
                this.mails.push(element.data.response)
                console.log(this.mails.length);
                if(this.numb == this.mails.length){
                        this.$nextTick(()=>{
                        this.$refs.adress[this.$refs.adress.length-1].scrollIntoView({behavior: "smooth"})
                        console.log(this.$refs.adress[this.$refs.adress.length-1])
                    })
                }
            });
        }
    }
})
app.mount('#app');