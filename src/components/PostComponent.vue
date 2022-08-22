<template>
<div class="container">
  <h1>
    Latest Post
  </h1>

  <div class="create-post">
    <label for="create-post">
      Say something...
    </label>
    <form action="">
      <div class="col-sm">
            <label for="name">First Name</label><br>
            <input type="text" v-model="fName" required placeholder="Enter your first name"
              class="inputstyle">
            <br><br>
            <label for="text">NIC</label><br>
            <input type="text" v-model="NIC" placeholder="xxxxxxxxxV" class="inputstyle"><br><br>
            <label for="name">Contact Details</label><br>
            <input type="number" v-model="phnNo" placeholder="+94xxxxxxxxx" class="inputstyle"><br><br>
            <label for="password">Password</label><br>
            <input type="password" v-model="password" required placeholder="Password" class="inputstyle"
              id="id_password"><br><br>
          </div>
          <div class="col-sm">
            <label for="name">Last Name</label><br>
            <input type="text" v-model="lName" required placeholder="Enter your last name" class="inputstyle">
            <br><br>
            <label for="name">Email</label><br>
            <input type="email" v-model="email" placeholder="example@gmail.com" class="inputstyle"><br><br>
            <label for="text">Address</label><br>
            <input type="text" v-model="Address" placeholder="Your Address" class="inputstyle"><br><br>
            <label for="password">Confirm Password</label><br>
            <input type="password" v-model="confPass" required placeholder="Re-enter password"
              class="inputstyle"><br><br>
          </div>
          <p><input type="checkbox" v-model="checkAgree">I have agreed to the terms and privacy policy</p>
          <div style="justify-content:center"><a href="/dashboardPage.vue" style="color:white">
              <button type="submit" class="submit" v-on:click="guide_signup">Sign In</button></a></div>
    </form>
    
  </div>
  <hr>

</div>
</template>

<script>

import guide_reg from '../guide_reg';

export default {
  name: 'PostComponent',
  
  methods:{
    async guide_signup(){
      await guide_reg.insertGuideSignUp(
        this.fName,this.NIC,this.phnNo,this.password,this.lName,
        this.Address,this.confPass);
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
