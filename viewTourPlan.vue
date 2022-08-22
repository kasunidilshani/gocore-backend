<template>
<div class="container">
  
  <div class="create-post">
    
    <div class="post"
    v-for="(post,index) in getTourPlan" 
    v-bind:item="post"
    v-bind:index="index"
    v-bind:key="post.id">


    <p class="text">{{post.Duration}}</p>
    <p class="text">{{post.Destination}}</p>
    <p class="text">{{post.Method}}</p>
    <p class="text">{{post.Activities}}</p>
    <p class="text">{{post.Accomodation}}</p>


    </div>
  </div>
  <hr>

</div>
</template>

<script>

import view_tour_plan from '../view_tour_plan';

export default {
  name: 'viewTourPlan',
  data(){
    return{
      getTourPlan: [],
      error: '',
      Duration: '',
      Destination: '',
      Method: '',
      Activities: '',
      Accomodation: ''
    }
  },
  async created(){
    try{
      this.getTourPlan = await view_tour_plan.get_view_tour_plan();
    }
    catch(err){
      this.error = err.message;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>