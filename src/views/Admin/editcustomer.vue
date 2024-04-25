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
                 <input type="text" class="form-control" v-model="customerName">
               </div>
               <!-- <div class="form-group">
                 <label>Customer Description:</label>
                 <textarea class="form-control" rows="4"></textarea>
               </div> -->
               <button type="submit" class="btn btn-primary">Submit</button>
               <button type="reset" class="btn btn-danger">Reset</button>
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
    this.getCustomerName()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  data () {
    return {
      id: '',
      customerName: ''
    }
  },
  methods: {
    getId () {
      const params = new URLSearchParams(window.location.search)
      this.id = params.get('id')
    },
    getCustomerName () {
      axios.get(`/genres/${this.id}`)
        .then(response => {
          this.customerName = response.name
        })
        .catch(error => {
          console.error(error)
        })
    },
    submitForm () {
      axios.put(`/genres/${this.id}`, { name: this.customerName })
        .then(response => {
          this.$router.push({ path: '/admin/customer-list', query: { } })
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
