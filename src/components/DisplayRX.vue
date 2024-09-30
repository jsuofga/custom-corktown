<template>
  
    <button class="button" @click = "selectRX(rxLabel,rxID)">
       {{rxLabel}} 
   
       <div id='rx-label'>P{{parseInt(rxID) + stateStore.txPorts}} </div>
      <div id='rx-ch-select'>{{stateStore.sourceList[stateStore.portVlanMembership[parseInt(rxID) + stateStore.txPorts -1] - 2]}}</div>


    </button>

</template>


<script>
 import {useStateStore} from '@/stores/StateStore'

  export default {
    name: "DisplayRX",
    props:['rxLabel','rxID'],
    components:{},
    setup(){
      // Pinia
        const stateStore = useStateStore()
        return {stateStore}
      },
    data: () => ({
      
    }),
    methods: {
      selectRX(_rxLabel,_rxID){
        this.stateStore.rxSelectedLabel = `${_rxLabel}`
        this.stateStore.selectRX(_rxID)
        this.$router.push('/videoinputs')
      }
    },
    computed:{

    }
   
  };

</script>

<style scoped>

.button {
  position: relative;
  border: 1px solid white;
  color: white;
  width: 80px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin: 12px 10px;
  cursor: pointer;
  border-radius: 6px;
}
.button:hover {
  background-color: purple;
  color: white;
}
.notDetected
{
  cursor: not-allowed;
  pointer-events: none;
  border: none;
  background-color: rgb(255,59,48);
  opacity: 0.2;
}
#rx-label{
  position: absolute;
  top:0;
  left: 0.0em;;
  font: 0.8em sans-serif;
}
#rx-ch-select{
  position:relative;
  bottom: -0.5em;
  font: 0.8em sans-serif;
}

.alert{
  border:1px solid red;
}

</style>

