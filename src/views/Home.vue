<template>
  <div class="home">
  </div>
</template>

<script>
import API from '@/utils/api'
export default {
  name: 'Home',
  data(){
    return {  
    }
  },
  created() {
    API.demo.demo().then(res =>{
      console.log(res)
    })
  }
};
</script>
