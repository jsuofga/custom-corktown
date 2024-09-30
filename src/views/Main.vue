<template>
    <v-container id="myContainer" fluid class="fill-height" >
      <!-- <DisplayRX class = "rotate-cw" rxLabel = 'Beer 1' rxID = '1'/> -->

      <v-col>
        <v-row id = 'row1'>
          <v-col class = 'myCols'><DisplayRX rxLabel = 'TV1' rxID = '1'/></v-col>
          <v-col class = 'myCols d-flex justify-center align-center'><div class = 'ter align-center text-white'>Vendor</div></v-col>
          <v-col class = 'myCols'><DisplayRX rxLabel = 'TV3' rxID = '3'/></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
        </v-row>
      <v-row id = 'row2'>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'><DisplayRX rxLabel = 'TV2' rxID = '2'/></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'> </v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols text-white'><div class = 'd-flex justify-center align-end'>DuckPins</div> </v-col>
      </v-row>
      <v-row id = 'row3'>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols d-flex justify-center align-center tap'><DisplayRX rxLabel = 'TV4' rxID = '4'/></v-col>
          <v-col class = 'myCols d-flex justify-center align-center tap'><DisplayRX rxLabel = 'TV5' rxID = '5'/></v-col>
          <v-col class = 'myCols d-flex justify-center align-center tap'><DisplayRX rxLabel = 'TV6' rxID = '6'/></v-col>
          <v-col class = 'myCols d-flex justify-center align-center tap'><DisplayRX rxLabel = 'TV7' rxID = '7'/></v-col>
          <v-col class = 'myCols d-flex justify-center align-center tap'><DisplayRX rxLabel = 'TV8' rxID = '8'/></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols d-flex justify-center align-start wall'><DisplayRX rxLabel = 'TV10' rxID = '10'/></v-col>
      </v-row>
      <v-row id = 'row4'>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols  text-white'><div class = 'd-flex justify-center align-center'>Beer Taps</div> </v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols'><div><DisplayRX rxLabel = 'TV11' rxID = '11'/></div> </v-col>
      </v-row>
      <v-row id = 'row5'>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols '>    
            <v-img id ="logo" src = '@/assets/logo.png' contain></v-img>
          </v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols d-flex justify-center align-start '> <div class=" rotate-ccw"><DisplayRX rxLabel = 'TV9' rxID = '9'/></div></v-col>
          <v-col class = 'myCols'></v-col>
      </v-row>
      <v-row id = 'row6'>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols '></v-col>
          <v-col class = 'myCols ' ></v-col>
          <v-col class = 'myColsc '></v-col>
          <v-col class = 'myCols'></v-col>
      </v-row>
      <v-row id = 'row7'>
          <v-col class = 'myCols'><div class = 'd-flex justify-center align-center text-white'>Office</div> </v-col>
          <v-col class = 'myCols d-flex justify-center align-center'><div class=" rotate-ccw"><DisplayRX rxLabel = 'TV12' rxID = '12'/></div></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols'></v-col>
          <v-col class = 'myCols v-col-6 text-white d-flex justify-center align-end'><div id="customer-support" class = 'd-flex justify-center align-center'>
            IVS Comm 877-487-1177 info@ivscomm.com</div>
          </v-col>
  
      </v-row>
    </v-col>
    </v-container>
</template>

<script>
  //
  import { useStateStore} from '@/stores/StateStore'
  import DisplayRX from '@/components/DisplayRX.vue'


  export default {
    name: "Main",
    components: {DisplayRX},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },

    data: () => ({
        
    }),
    computed:{
           
    
    },
    methods: {


    },
    created(){
        this.getStatus= setInterval(this.stateStore.get_SwitchStatus,5000)
     
    },
    beforeUnmount(){
        console.log('Stop')
        clearInterval(this.getStatus)

    }

  }
</script>

<style scoped>
#myContainer{
  padding:0px;
}
 .myCols {
  flex-direction: column;
  /* border: 1px solid blue; */
 }

.rotate-ccw{
  transform: rotate(-90deg);
 }
.rotate-cw{
  transform: rotate(90deg);
 }
 .rotate-ccw-45{
  transform: rotate(-45deg);
 }
  .rotate-cw-45{
  transform: rotate(45deg);
 }
 #row1{
  height: 10vh;
 }
#row2{
  height: 10vh;
}
#row3{
  height: 10vh;
}
#row4{
  height: 10vh;
}
#row5{
  height: 20vh;
}
#row6{
  height: 10vh;
}
#row7{
  height: 10vh;
}
.tap{
  background-color:  #CF5B13
}
 #all-chip{
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left:10px;
  padding-right:10px;
  margin: 0px;
  color:white
 }
 #customer-support{
  font-size: 0.8rem;
 }
 .wall{
  border-bottom: 2px solid white;
 }


</style>