<template>
        <nav id="bulb">
            <i class="far fa-lightbulb"></i>
            <a target="_blank" href="https://www.facebook.com">Facebook</a> 
            <a target="_blank" href="https://www.twitter.com/">Twitter</a> 
            <a target="_blank" href="https://www.instagram.com">instagram</a> 
            <a target="_blank" href="https://www.leparisien.fr/">Le Parisien</a>  
            <a target="_blank" href="https://www.lequipe.fr/">L'Equipe</a>
            <a target="_blank" href="https://www.proverbes-citations.com/">Proverbes</a>            
            <a target="_blank" href="https://www.ligue1.fr/">Ligue 1</a> 
            <a href="mailto:moderateur.groupomania@groupomania.com">Contact</a>
           
        </nav>
</template>

<script>
export default {
    name: "Bulb",
   
}
</script>

<style lang="css">
#bulb {
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: absolute;
    position: fixed;
    right: 1%;
    margin: auto;
    box-shadow: inset 0px 0px 0px 4px white;
    border: 6px solid blue;
    border-radius: 30px;
    padding: 15px;
    background-color:red;
    opacity: 0.95;
    margin-top: 25px;
   }
#bulb a {
    color: white;
    margin: auto;
    cursor: pointer;
}

#bulb a:hover{
color:orange}

#bulb p {
    font-size: 2em;
    margin: 0;
}
.fa-lightbulb {
    color: white;
    font-size: 2.5em;
    font-weight: lighter;
    text-shadow: -1px 0 1px#fcf404, 0 1px 1px#fcf404, 1px 0 1px #fcf404, 0 -1px 10px#fcf404;
    margin: auto;
}
@media screen and (max-width: 768px) {
	#bulb {
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    margin: auto;
    flex-wrap: wrap;
    left: 0;
    margin-top: 15px;
    }
    
}
</style>