<template>
   <b-container fluid>
     <b-row>
       <b-col sm="12">
         <iq-card>
           <template v-slot:headerTitle>
             <h4 class="card-title">Add Categories</h4>
           </template>
           <template v-slot:body>
             <form @submit.prevent="submitForm">
               <div class="form-group">
                 <label>Category Name:</label>
                 <input type="text" class="form-control" v-model="categoryName">
               </div>
               <!-- <div class="form-group">
                 <label>Category Description:</label>
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
  name: 'addcategory',
  mounted () {
    core.index()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  data () {
    return {
      categoryName: ''
    }
  },
  methods: {
    submitForm () {
      axios.post(`/genres`, { name: this.categoryName })
        .then(response => {
          this.$router.push('/admin/category-list')
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
