<template>
  <div>

     <!-- Liste des messages -->   
      <div v-for="message in messages" :key="message.id" class="bloclist">
          <div class="blocauthor">
              <h3><i class="far fa-user-circle"></i> {{ message.User.firstname}} {{ message.User.lastname }} </h3>
              <div class="blocjob">  
                  <p><i class="fas fa-user-tie mt-4 sm-mr-1"></i>   {{ message.User.jobtitle }} </p>  
                  <p><i class="far fa-clock mt-4"></i>  {{ message.createdAt | moment("DD.MM.YY HH:mm") }} </p>
              </div>
          </div>
          <div class="blocmessage">
              <h4><i class="far fa-bookmark mt-2">  Sujet:</i> {{ message.title }} </h4>
              <h5 class="message"><i class="far fa-envelope">  Message:</i>"  {{ message.content }} "</h5>
          </div>  
          <div class="blocactions">
                <button v-if="message.userId == userId || isAdmin == true" 
                type="button" @click="deleteMessage(message.id)" class="accountbutton">Supprimez </button>
          </div>
       
          <Answers :messageId="message.id" :messageUserId="message.userId" />
      </div>   
  </div>

</template>

<script>
import Answers from "@/components/Answers.vue";
export default {
    name: "ListMessages",
    components: {
        Answers
    },
    

    data() {
        return {
            firstname: "",
            lastname: "",
            jobtitle: "",
            userId: "",
            isAdmin: "",
            messages: []
        }
    },
    mounted() {
        this.userId = JSON.parse(localStorage.getItem("userId"));
        this.isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
        console.log(localStorage);


        let url = "http://localhost:3000/api/messages";
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
                this.messages = data;
                console.log(this.messages)

            })
            .catch(error => console.log(error))
    },

    methods: {

        ///////////////////DELETE MESSAGE/////////////////////
        deleteMessage(messageid) {
            let url = `http://localhost:3000/api/messages/${ messageid }`;
            let options = {
                method: "DELETE",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }
            };
            fetch(url, options)
                .then((response) => {
                    console.log(response);
                    alert("Suppression du message confirmé ! 😢");
                    window.location.reload();
                })
                .catch(error => console.log(error))
        },
    },
}
</script>

<style lang="css">
.bloclist {
  width: 70%;
  margin: auto;
  margin-top: 25px;
  background-image: url("../assets/backmess.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px; 
  padding: 25px;
}
h4 {
 
  font-size: 1.25em;
  text-decoration: underline;
   
}
.blocjob {
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 50%;
  justify-content: space-around;
  
}

.blocjob p{
  font-size:1.5em;
  }

.blocauthor i {
  color: #0c2444;
  font-size: 1.75em;
  
}
.blocactions {
  width: 90%;
  margin: 0 auto;
  flex-direction: row;
}
.blocactions button {
  margin-bottom: 10px;
}
.blocauthor {
  width: 100%;
  background-color: blue;
  border-radius: 30px; 
  display: flex; 
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: white;
}
.blocauthor h3 {
  font-size: 1.75em;
  margin: auto;
  padding-left: 15px;
  width: 50%;
}
.blocmessage {
  width: 100%;
  margin-top:20px;
  border-radius: 30px; 
  border: 6px solid grey;
  box-sizing: content-box;
  text-align: center;
}
.blocmessage  h5 {
  font-style: italic;
}
h5 i, h4 i {
  font-size: 1.25em;
  color: blue;
  margin-right:20px
}
@media screen and (max-width: 765px) {
	.bloclist {
    width: 90%; 
    box-shadow: inset 0px 0px 0px 8px white;
    border: 5px solid #d44c5c;
    font-size: 0.9em;
  }
  .form-group {
    display: flex;
    flex-direction: column;
      }

  label, input, textarea {
    width: 75%;
    text-align: center;
  }

  .message {margin-right:10px;
  } 

  .blocjob {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
 }

 .blocauthor {
  font-size: 0.7em;
  margin: auto;
  padding-left: 30px;
  width:103%;
   }
   .blocauthor i {margin-left:-26px}

}
</style>