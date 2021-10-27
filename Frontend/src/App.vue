<template>
  <div id="app">
    
    <header>
       <h1> <img src="./assets/iconwhite.jpg" id="logoconnect" alt="Logo Groupomania" /></h1>
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
  height: 100px;
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
  width: 30%;
  margin: auto;
}

@media screen and (max-width: 768px) {
  header img {
    width: 35%;
  }
}
@media screen and (max-width: 450px) {
  header img {
    width: 50%;
  }
}
</style>
