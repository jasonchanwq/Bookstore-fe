<template>
  <b-container fluid>
               <b-row>
                  <b-col sm="12">
                     <iq-card>
                        <template v-slot:headerTitle>
                              <h4 class="card-title">Category Lists</h4>
                           </template>
                           <template v-slot:headerAction>
                              <router-link to="/add-category" class="btn btn-primary text-white">Add New Category</router-link>
                           </template>
                        <template v-slot:body>
                           <div class="table-responsive">
                              <table class="data-tables table table-striped table-bordered" style="width:100%">
                                <thead>
                                    <tr>
                                        <th width="5%">No</th>
                                        <th width="20%">Category Name</th>
                                        <th width="10%">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(genre,index) in genres" :key="index">
                                        <td>{{index+1}}</td>
                                        <td>{{genre.name}}</td>
                                        <!-- <td>
                                          <p class="mb-0">{{book.description}}</p>
                                        </td> -->
                                        <td>
                                           <div class="flex align-items-center list-user-action">
                                            <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="Edit" :href="`/edit-category?id=${genre._id}`"><i class="ri-pencil-line"></i></a>
                                             <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" @click="deleteGenre(genre._id)"><i class="ri-delete-bin-line"></i></a>
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
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import { mapGetters } from 'vuex'
import axios from '../../axios.js'
export default {
  name: 'Categorylist',
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
      axios.get('/genres')
        .then(response => {
          that.genres = response
        })
        .catch(error => {
          console.error(error)
        })
    },
    deleteGenre (id) {
      const that = this
      axios.delete(`/genres/${id}`)
        .then(response => {
          that.getData()
        })
    }
  },
  data () {
    return {
      genres: [
      ]
    }
  }
}
</script>
