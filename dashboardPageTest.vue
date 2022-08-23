<template>
    <div class="modal-content">
            <form action="" class="login-form">
              <div class="p-3">
                <h1>Tour Plan</h1>
                <div class="form-group p-1">
                  <input type="text" v-model="Title" placeholder="Tour Title"> 
                </div>
                <div class="form-group p-1">
                    <input type="text" v-model="tourDuration" placeholder="Tour Duration">
                </div>
                <div class="form-group p-1">
                    <input type="text" v-model="Duration" placeholder="Duration">
                </div>
                <!-- <div class="form-group p-1"> -->
                    <!-- <input class="form-control-sm" type="file" multiple v-on:change="uploadFile" id="formFile"><br> -->
                    <!-- <small>Add a cover photo for the tour plan</small>
                </div> -->
                <div class="form-group p-1">
                   <input type="text" v-model="startingCity" placeholder="Enter Starting City">
                </div>
              </div>
              Dynamic input fields to add more destinations               
                
                <div class="form-group p-1">
                   <input type="text" v-model="nextDestination" placeholder="Enter Next Destination">
                  
                </div>
                <div class="form-group p-1">
                   <input type="text" v-model="transportMethod" placeholder="Transportation Method">
                </div>
                <div class="form-group p-1">
                   <input type="text" v-model="Accomodation" placeholder="Accomodation">
                </div>
              
              <!-- Controls to add or remove fields-->
              <div class="p-2">
                <a href="#" id="add-destination" @click="add" class="controls"><i class="fa-solid fa-plus"></i>Add Destination</a>
                <a href="#" id="remove-destination" @click="remove(index)" class="controls"><i class="fa-solid fa-minus"></i>Remove Destination</a>
              </div>
              <div class="p-4">
                 <button type="submit" class="newbtn btn btn-primary btn-lg" v-on:click="guideAddPlan">Add Plan</button>
              </div>
              
            </form>
          </div>
</template>

<script>
import guide_add_plan from '../guide_add_plan';

export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name:"dashboardPageTest",

methods:{

async guideAddPlan(){
      await guide_add_plan.insertGuidePlan(
        this.Title,this.tourDuration,this.Duration,this.startingCity,this.nextDestination,
        this.transportMethod,this.Accomodation);
    }
  }
}

</script>

<style scoped>
.newbtn{
  background-color: #0084BD;
  border-color: #0084BD;
  border-style: solid;
  border-radius: 20px;
  padding-left: 30px;
  padding-right: 30px;
}
.newbtn:hover{
  background-color:hsl(198, 72%, 46%);
  border-color:hsl(198, 72%, 46%);
}
.cardstyle{
  max-width: 200px;
  max-height:40vh;
  margin-left: 50px;
  margin-right: 50px;
  }
  .modal-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: none;
    }
    .modal-content h1,p {
      margin-bottom: 16px;
    }
     .modal-content h1 {
      font-size: 32px;
    }
     .modal-content p {
      font-size: 18px;
    }
    .login-form{
    border: 1.5px;
    border-radius: 5px;
    border-color: gray;
    border-style: solid;
    width: 30vw;
    max-height: 1000vh;
    align-items: center;
  
}
.login-form input{
  border-width: 1.5px;
  border-color: gray;
  border-style: solid;
  border-radius: 10px;
  word-spacing: 5px;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 350px;
}
.controls{
  color: black;
  padding: 5px;
  
}
</style>