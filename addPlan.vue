<template>
<div class="container">
  <h1>
    Latest Post
  </h1>

  <div class="create-post">
    
    <form action="">
      <div class="col-sm">
            <label for="name">Tour Duration</label><br>
            <input type="text" v-model="Duration" required placeholder="Enter Duration"
              class="inputstyle">
            <br><br>
            <label for="text">Enter Destination</label><br>
            <input type="text" v-model="Destination" placeholder="Destination" class="inputstyle"><br><br>

            <label for="name">Tranportation Method</label><br>
            <input type="text" v-model="Method" placeholder="Method" class="inputstyle"><br><br>
            <br><br>
          </div>
          <div class="col-sm">
            <label for="name">Activities</label><br>
            <input type="text" v-model="Activities" required placeholder="Enter your Activities" class="inputstyle">
            <br><br>
            <label for="text">Accomodation</label><br>
            <input type="text" v-model="Accomodation" placeholder="Your Accomodation" class="inputstyle"><br><br>
            
          </div>

          <div style="justify-content:center"><a href="/dashboardPage.vue" style="color:white">
              <button type="submit" class="submit" v-on:click="guide_add_plan">Add Plan</button></a></div>
    </form>
    
  </div>
  <hr>

</div>
</template>

<script>

import guide_add_plan from '../guide_add_plan';

export default {
  name: 'addPlan',
  
  methods:{
    async guide_add_plan(){
      await guide_add_plan.insertGuidePlan(
        this.Duration,this.Destination,this.Method,this.Activities,this.Accomodation);
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