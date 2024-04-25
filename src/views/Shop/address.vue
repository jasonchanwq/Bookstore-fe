<template>
   <div id="address" class="card-block p-0 col-12 show">
     <div class="row align-item-center">
       <b-col lg="12">
         <iq-card>
           <template v-slot:headerTitle>
             <h4 class="card-title">Add New Address</h4>
           </template>
           <template v-slot:body>
             <form @submit.prevent="submitOrder">
               <b-row class="mt-3">
                 <b-col md="12">
                   <div class="form-group">
                     <label>Shipping Address: *</label>
                     <input type="text" class="form-control" v-model="shippingAddress" required>
                   </div>
                 </b-col>
                 <b-col md="12">
                   <div class="form-group">
                     <label>Billing Address: *</label>
                     <input type="text" class="form-control" v-model="billingAddress" required>
                   </div>
                 </b-col>
                 <b-col md="6">
                   <button type="submit" class="btn btn-primary">Save And Deliver Here</button>
                 </b-col>
               </b-row>
             </form>
           </template>
         </iq-card>
       </b-col>
     </div>
   </div>
 </template>

<script>
import { core } from '../../config/pluginInit'
import { mapGetters } from 'vuex'
import axios from '../../axios.js'

export default {
  name: 'Address',
  mounted () {
    core.index()

    this.getCartIdFromRoute()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  data () {
    return {
      shippingAddress: '',
      billingAddress: '',
      cartId: ''
    }
  },
  methods: {
    submitOrder () {
      axios.post(`/orders`, {
        shippingAddress: this.shippingAddress,
        billingAddress: this.billingAddress,
        cartId: this.cartId
      })
        .then(response => {
          this.$router.push('/home')
        })
    },
    getCartIdFromRoute () {
      const params = new URLSearchParams(window.location.search)
      this.cartId = params.get('cartId')
    }
  }
}
</script>
