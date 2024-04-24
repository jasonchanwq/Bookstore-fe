<template>
  <b-container fluid>
               <b-row>
                  <b-col sm="12">
                     <iq-card>
                        <template v-slot:headerTitle>
                              <h4 class="card-title">Customer Lists</h4>
                           </template>
                           <template v-slot:headerAction>
                              <!-- <router-link to="/add-category" class="btn btn-primary text-white">Add New Category</router-link> -->
                           </template>
                        <template v-slot:body>
                           <div class="table-responsive">
                              <table class="data-tables table table-striped table-bordered" style="width:100%">
                                <thead>
                                    <tr>
                                        <th width="5%">No</th>
                                        <th width="20%">User ID</th>
                                        <th width="65%">Name</th>
                                        <th width="10%">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(customer,index) in customers" :key="index">
                                        <td>{{customer._id}}</td>
                                        <td>{{customer.userId}}</td>
                                        <td>{{customer.name}}</td>
                                        <td>
                                           <div class="flex align-items-center list-user-action">
                                            <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="Edit" :href="`/edit-customer?id=${customer._id}`"><i class="ri-pencil-line"></i></a>
                                            <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" @click="deleteCustome(customer._id)"><i class="ri-delete-bin-line"></i></a>
                                          </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                           </div>
                        </template>
                     </iq-card>
                  </b-col>
               </b-row>
               <!-- Modal -->
              <b-modal ref="orderModal" title="Order Details" hide-footer>
                <!-- Display order details here -->
                <ul class="list-inline p-0 m-0">
                  <li v-for="(list,index) in lists" :key="index" class="checkout-product">
                      <b-row class="align-items-center">
                        <b-col sm="2">
                            <span class="checkout-product-img">
                            <a href="#"><img class="img-fluid rounded" :src="require('../../assets/images/checkout/01.jpg')" alt=""></a>
                            </span>
                        </b-col>
                        <b-col sm="4">
                            <div class="checkout-product-details">
                              <h5>{{list.book_id}}</h5>
                              <!-- <p class="text-success">{{list.book_id.genre.name}}</p> -->
                              <!-- <div class="price">
                                  <h5>${{list.book_id.price}}</h5>
                              </div> -->
                            </div>
                        </b-col>
                        <b-col sm="6">
                            <b-row>
                              <b-col sm="10">
                                  <b-row class="align-items-center mt-2">
                                    <b-col sm="7" md="6">
                                        <input type="text" id="quantity" :value="list.quantity">
                                    </b-col>
                                    <b-col sm="5" md="6">
                                        <!-- <span class="product-price">${{list.quantity * list.book_id.price}}</span> -->
                                    </b-col>
                                  </b-row>
                              </b-col>
                              <b-col sm="2">
                                  <!-- <a href="#" class="text-dark font-size-20" @click="deleteItem(list)"><i class="ri-delete-bin-7-fill"></i></a> -->
                              </b-col>
                            </b-row>
                        </b-col>
                      </b-row>
                  </li>
                </ul>
              </b-modal>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import { mapGetters } from 'vuex'
import axios from '../../axios.js'
export default {
  name: 'Orderlist',
  mounted () {
    core.index()
    this.getData()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  watch: {
  },
  methods: {
    getData () {
      const that = this
      axios.get('/customers')
        .then(response => {
          that.customers = response
        })
        .catch(error => {
          console.error(error)
        })
    },
    showOrderDetails (order) {
      // Set the order details to the modal content
      // For example:
      // this.$refs.orderModal.$data.modalContent = order;
      // Show the modal
      const items = order.order.items
      this.lists = items
      this.$refs.orderModal.show()
    },
    deleteCustome (id) {
      const that = this
      axios.delete(`/customers/${id}`)
        .then(response => {
          that.getData()
        })
    }
  },
  data () {
    return {
      customers: [],
      lists: []
    }
  }
}
</script>

<style>
[dir=ltr][mode=light] .modal-dialog{
  width: 80vw;
  max-width: 80vw;
}
</style>
