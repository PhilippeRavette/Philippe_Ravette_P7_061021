<template>
        <div>    
            <!-- Répondre  -->
            <div class="blocanswer">
                <textarea type="text" id="content" name="content" rows="2" class="form-control mt-3" v-model="content"  aria-label="content"
                placeholder="Insérer votre commentaire svp..."></textarea>
                <a v-on:click="createAnswer()"><i class="far fa-paper-plane" title="Envoyer"></i></a>          
            </div>

        <!-- Liste des réponses  -->
                <div> 
                    <div v-for="answer in answers" :key="answer.id" class="blocanswers" >                        
                        <p class="text-success">  {{ answer.User.firstname}} {{ answer.User.lastname}} {{answer.createdAt | moment("DD.MM.YY HH:mm")}} <br>  {{ answer.content}} </p>          
                    </div>
                </div>
        </div>
</template>


<script >

export default {
    name: "Answers",

    data() {
        return {
            answer: "",
            answers: [],
            content: ""
                              
        }
    },
    //Passer des données aux composants enfants avec les props//
    props: {
        messageId: Number,
        messageUserId: Number,        
    },
    
    mounted() {
        ///////////////////GET ANSWERS/////////////////////
        let url = "http://localhost:3000/api/answers/" + this.messageId + "/display";
        let options = {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem("token"),
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.answers = data;
                console.log(this.answers)
                
            })
            .catch(error => console.log(error))
    },


    methods: {
        ///////////////////CREATE ANSWER///////////////////// 
        createAnswer() {
            let inputContent = {
                "content": this.content,
                "messageId": this.messageId
               
            }
            let url = "http://localhost:3000/api/answers/new"
            let options = {
                method: "POST",
                body: JSON.stringify(inputContent),
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
                }
            }
            fetch(url, options)
                .then(res => res.json())
                .then(() => {
                window.location.reload();
                // this.answers.push(inputContent);
                this.content = "";
                })
                .catch(error => console.log(error))
        }
    },
}
</script>

<style lang="css">
.blocanswer {
  width: 100%;
  margin: 0;
  border-radius: 30px; 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.blocanswer a {
  width: 10%;
}
.blocanswers {
  text-align: center;
  width: 90%;
  margin-top: 20px;
  margin-right:80px;
  border-radius: 30px; 
  border: 6px solid  #d44c5c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:10px
}
.blocanswers i {
  color: #0c2444;
}
.blocanswers p {
  font-style: italic;
  font-size:20px;
}
.blocanswer i {
  color: white;
  font-size: 1.75em;
  padding-right: 25px;
  text-shadow: -3px 0 3px #d44c5c, 0 3px 3px  #d44c5c, 3px 0 3px  #d44c5c, 0 -3px 15px  #d44c5c;
  margin-left:15px
}
.blocanswer textarea:focus {
  border-color: white;
  box-shadow: 0px 0px 20px grey;
}
@media screen and (max-width: 765px) {
.blocanswers {
  width: 102%;
  }
}

</style>
