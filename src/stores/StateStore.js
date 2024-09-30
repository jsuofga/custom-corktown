import axios from 'axios'
import { defineStore } from 'pinia'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application

export const useStateStore = defineStore('stateStore', {
    // other options...
    state: () => ({ 
        
        page: '/', 
        ipAddressOfCiscoSwitch:'',
        ciscoSwitchModel:'',
        txPorts: 8,
        rxPorts: 16,
        portVlanMembership:[],
        rxSelected: '1',
        txSelected:'1',
        rxSelectedLabel: '',
        isAuthenticated:false,
        snackbar:false,
        piNotRespond:false,
        sourceList:[
          'DTV 1', 'DTV 2', 'DTV 3', 'DTV 4', 'OptiSign1', 'OptiSign2', 'OptiSign3','OptiSign4'
        ],
            
     }),
     getters:{

     },
     actions: {
        // since we rely on `this`, we cannot use an arrow function
        changePage(_page) {
          this.page = _page
          console.log(this.page)
        },
        selectRX(_rxID) {
            this.rxSelected = _rxID
            this.mergeType = '1'
        },
        switchRX(_txID){
          this.txSelected = _txID
          const serverURL = `${location.hostname}:1880`
          console.log(`http://${serverURL}/switchRX/${this.rxSelected}/vlan/${_txID + 1}`)
          fetch(`http://${serverURL}/switchRX/${this.rxSelected}/vlan/${_txID + 1}`)

        },
        saveSwitchConfigToPi(_ip_mdf){
          const serverURL = location.hostname
          fetch(`http://${serverURL}:3000/write/UserSwitchConfig/{"ip":"${_ip_mdf}","model":"CBS250-24","TXports":${this.txPorts},"RXports":${this.rxPorts}}`)

        },
       get_UserSwitchConfig(){
          const serverURL = `${location.hostname}:3000`
          // Read from Server
            fetch(`http://${serverURL}/read/UserSwitchConfig`, {method: 'GET',})
            .then(response => response.json())
            .then(result => {
              console.log('Success:', result);
              this.ipAddressOfCiscoSwitch = result['ip']

            })
            .catch(error => {
              console.log('Error:', error);
            });
      },

      get_SwitchStatus(){
        
        const serverURL_ciscoStat = `${location.hostname}:1880/ciscoStat`

        console.log(`http://${serverURL_ciscoStat}`)
        fetch(`http://${serverURL_ciscoStat}`)
        .then(function(response) {
            return response.json();
        })
        .then((myJson)=> {
          console.log(myJson)
          // this.txPorts = myJson.txCount
          // this.rxPorts = myJson.rxCount
          this.portVlanMembership = myJson.PortVlanMembership
          this.ciscoSwitchModel = myJson.model
          this.piNotRespond = false
          console.log(this.portVlanMembership)
        })
        .catch(()=> {
            this.piNotRespond = true
            console.log('ERROR!'); 
        })


      }
            
      },
  })


    
