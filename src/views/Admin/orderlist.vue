<template>
  <b-container fluid>
               <b-row>
                  <b-col sm="12">
                     <iq-card>
                        <template v-slot:headerTitle>
                              <h4 class="card-title">Order Lists</h4>
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
                                        <th width="20%">Total Cost</th>
                                        <th width="65%">Shipping Address</th>
                                        <th width="65%">Billing Address</th>
                                        <th width="65%">Status</th>
                                        <th width="65%">Order Date</th>
                                        <th width="10%">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(order,index) in orders" :key="index">
                                        <td>{{order._id}}</td>
                                        <td>{{order.totalCost}}</td>
                                        <td>{{order.shippingAddress}}</td>
                                        <td>{{order.billingAddress}}</td>
                                        <td>{{order.status}}</td>
                                        <td>{{order.orderDate}}</td>
                                        <td>
                                           <div class="flex align-items-center list-user-action">
                                            <a @click="showOrderDetails(order)" class="bg-primary" data-toggle="tooltip" data-placement="top" title="View Details"><i class="ri-eye-line"></i></a>
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
                            <a href="#"><img class="img-fluid rounded" :src="list.bookinfo.image" alt=""></a>
                            </span>
                        </b-col>
                        <b-col sm="4">
                            <div class="checkout-product-details">
                              <h5>{{list.bookinfo.name}}</h5>
                              <p class="text-success">{{list.bookinfo.genre.name}}</p>
                               <div class="price">
                                  <h5>${{list.bookinfo.price}}</h5>
                              </div>
                            </div>
                        </b-col>
                        <b-col sm="6">
                            <b-row>
                              <b-col sm="10">
                                  <b-row class="align-items-center mt-2">
                                    <b-col sm="7" md="6">
                                        NUM: {{list.quantity}}
                                    </b-col>
                                    <b-col sm="5" md="6">
                                        <span class="product-price">${{list.quantity * list.bookinfo.price}}</span>
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
      axios.get('/orders')
        .then(response => {
          that.orders = response
        })
        .catch(error => {
          console.error(error)
        })
      axios.get('/books')
        .then(response => {
          that.books = response
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
      this.lists = items.map(item => {
        const bookinfo = this.books.find(book => book.id === item.bookId)
        return {
          ...item,
          bookinfo
        }
      })
      this.$refs.orderModal.show()
    }
  },
  data () {
    return {
      orders: [],
      lists: [],
      books: []
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
