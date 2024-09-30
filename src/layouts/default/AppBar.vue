<template>
  <v-app-bar elevation="2" height="50" >
                 <v-app-bar-title class="d-flex justify-space-around">
                      <v-container>
                          <v-row class = "d-flex align-center">
                            <v-col class = "pa-0" >
                                <!-- <div class = "text-caption">Design By</div> -->
                            </v-col>
                            <v-col  class = "pa-0">
                                <v-img src="@/assets/logo_octava.png " width="120" > </v-img>
                            </v-col>
                            <v-chip color ="red" v-if = "stateStore.piNotRespond">controller not found</v-chip>
                            <v-chip color ="red" v-if = "stateStore.ciscoSwitchModel == '' ">Cisco switch not found</v-chip>
         
                          </v-row>
                      </v-container>
                 </v-app-bar-title>
                <v-chip>1.0</v-chip>
                <v-btn icon="mdi-cog" @click= "this.$router.push('/accesscontrol')"></v-btn>


  </v-app-bar>
</template>

<script >
  import { useStateStore} from '@/stores/StateStore'
  export default {
    name: "AppBar",
    components:{},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },

    data: () => ({
        
    }),
    methods: {

    },
};
</script>
