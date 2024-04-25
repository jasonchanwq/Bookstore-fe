<template>
   <b-container fluid>
     <b-row>
       <b-col sm="12">
         <iq-card>
           <template v-slot:headerTitle>
             <h4 class="card-title">Edit Customers</h4>
           </template>
           <template v-slot:body>
             <form @submit.prevent="submitForm">
               <div class="form-group">
                 <label>Customer Name:</label>
                 <input type="text" class="form-control" v-model="name">
               </div>
               <div class="form-group">
                 <label>defaultShippingAddress:</label>
                 <input type="text" class="form-control" v-model="defaultShippingAddress">
               </div>
               <div class="form-group">
                 <label>defaultBillingAddress:</label>
                 <input type="text" class="form-control" v-model="defaultBillingAddress">
               </div>
               <button type="submit" class="btn btn-primary">Submit</button>
               <button class="btn btn-danger" @click="cancel">Cancel</button>
             </form>
           </template>
         </iq-card>
       </b-col>
     </b-row>
   </b-container>
 </template>

<script>
import { core } from '../../config/pluginInit'
import { mapGetters } from 'vuex'
import axios from '../../axios.js'

export default {
  name: 'addcustomer',
  mounted () {
    core.index()
    this.getId()
    this.getInfo()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  data () {
    return {
      id: '',
      name: '',
      defaultShippingAddress: '',
      defaultBillingAddress: ''
    }
  },
  methods: {
    getId () {
      const params = new URLSearchParams(window.location.search)
      this.id = params.get('id')
    },
    getInfo () {
      axios.get(`/customers/${this.id}`)
        .then(response => {
          this.name = response.name
          this.defaultShippingAddress = response.defaultShippingAddress
          this.defaultBillingAddress = response.defaultBillingAddress
        })
        .catch(error => {
          //console..error(error)
        })
    },
    submitForm () {
      axios.put(`/customers/${this.id}`, { name: this.name, defaultShippingAddress: this.defaultShippingAddress, defaultBillingAddress: this.defaultBillingAddress })
        .then(response => {
          this.$router.push({ path: '/admin/customer-list', query: { } })
        })
        .catch(error => {
          //console..error(error)
        })
    },
    cancel () {
      // return last page -1
      this.$router.go(-1)
    }
  }
}
</script>
