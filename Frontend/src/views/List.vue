<template>
     <section>
        <Navbar></Navbar>
        
          <div class="blocsignup">
			<h1>"Profitons de notre magnifique réseau social pour améliorer notre communication."</h1> 
                            
          </div> 

          <ListMessages/> 
     </section> 
</template>


<script>
import Navbar from '../components/Navbar'
import ListMessages from '../components/ListMessages'
export default {
    name: 'List',
    components: {
        Navbar,
        ListMessages
    },
}
</script>
  
<style lang="css">
.blocsignup h1 {
   margin-top: 0;
   padding: 10px;
}
</style>