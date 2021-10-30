<template>
  <div id="app">
    
    <header>
        <img src="./assets/icongroupomania.jpg" id="logogroupomania" alt="Logo de Groupomania" />
    </header>
    <router-view></router-view>


    
  </div>  
</template>

<script>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
body, html {
  margin: 0;
  padding: 0;
  height: 100%; 
  width:100%;
  background-image: url("assets/reseau-social.jpg");
}
#app {
  height: 100%;
  font-family: 'Montserrat', sans-serif;
}
header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  border-bottom: 6px solid #d44c5c;
  font-size: 1.25em;
  display: flex;
  flex-direction: row;
}
header a{
  text-decoration: none;
  color: red;
  margin: auto;
}
header img {
  width: 60%;
  margin: auto;
}

@media screen and (max-width: 768px) {
  header img {
    width: 50%;
  }
}
@media screen and (max-width: 450px) {
  header img {
    width: 50%;
  }
}

</style>
