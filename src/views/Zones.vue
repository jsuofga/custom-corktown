<template>
  <v-container class="fill-height">
 
    <v-col class = " d-flex flex-column justify-center " >
      <v-row class = "d-flex justify-center pa-10">
          <img src="@/assets/logo.png " width="200">
      </v-row>
      <v-row >
          <v-col  class = " d-flex justify-end ma-6 ">
              <button class = "button-round" @click = "selectZone('main')">Main</button>
          
          </v-col>
          <v-col  class = " d-flex justify-start ma-6 ">
              <button class = "button-round" @click = "selectZone('secondfloor')">2ndFloor</button>
          </v-col>

      </v-row>
    </v-col>

  </v-container>
</template>

<script >
  import { useStateStore} from '@/stores/StateStore'
  export default {
  name: "Zones",
  components:{},

  setup(){
    // Pinia
      const stateStore = useStateStore()
      return {stateStore}
    },

  data: () => ({
    
  }),
  methods: {
    selectZone(_zone){
      if(_zone == 'main'){
          this.stateStore.changePage('main')
          this.$router.push('/main')
      }else if(_zone == 'secondfloor'){
          this.stateStore.changePage('secondfloor')
          this.$router.push('/secondfloor')

      }
    }
  },
};


  
</script>

<style scoped>

/* .border-color{
   border-style: solid ;
   border-color: red;

} */

 .button-round{
   font-size: 1.5rem;
   height:200px;
   width:200px;
   border-radius: 50%;
   color:white;
   border-style: solid ;
   border-color: white;
   border-width: 1.5px;
}
.button-round:hover{
  background-color: #212121;
  color: white;
}
/* .roundBtn:hover {
  background-color:#2196f3 !important;
} */

</style>
