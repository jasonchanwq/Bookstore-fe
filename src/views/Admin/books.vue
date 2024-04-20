<template>
  <b-container fluid>
               <b-row>
                  <b-col sm="12">
                     <iq-card>
                         <template v-slot:headerTitle>
                              <h4 class="card-title">book Lists</h4>
                           </template>
                           <template v-slot:headerAction>
                              <router-link to="/add-book" class="btn btn-primary text-white">Add New book</router-link>
                           </template>
                        <template v-slot:body>
                           <div class="table-responsive">
                              <table class="data-tables table table-striped table-bordered" style="width:100%">
                                <thead>
                                    <tr>
                                        <th style="width: 3%;">No</th>
                                        <th style="width: 12%;">Book Image</th>
                                        <th style="width: 15%;">Book Name</th>
                                        <th style="width: 15%;">Book Catrgory</th>
                                        <th style="width: 15%;">Book Author</th>
                                        <th style="width: 18%;">Book Description</th>
                                        <th style="width: 7%;">Book Price</th>
                                        <th style="width: 7%;">Book pdf</th>
                                        <th style="width: 15%;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(book,index) in books" :key="index">
                                        <td>{{index+1}}</td>
                                        <td><img class="img-fluid rounded" :src="book.src" alt=""></td>
                                        <td>{{book.name}}</td>
                                        <td>{{book.category}}</td>
                                        <td>{{book.author}}</td>
                                        <td>
                                          <p class="mb-0">{{book.description}}</p>
                                        </td>
                                        <td>{{book.author}}</td>
                                        <td><a href="/book-pdf"><i class="ri-file-fill text-secondary font-size-18"></i></a></td>
                                        <td>
                                           <div class="flex align-items-center list-user-action">
                                             <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="/add-book"><i class="ri-pencil-line"></i></a>
                                             <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
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
export default {
  name: 'Book',
  mounted () {
    core.index()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  watch: {
  },
  methods: {
  },
  data () {
    return {
      books: [
        {
          src: require('../../assets/images/browse-books/01.jpg'),
          name: 'Reading on the Worlds',
          category: 'General Books',
          author: 'Jhone Steben',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          price: '$89'
        },
        {
          src: require('../../assets/images/browse-books/02.jpg'),
          name: 'The Catcher in the Rye',
          category: 'History Books',
          author: 'Fritz Wold',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          price: '$89'
        },
        {
          src: require('../../assets/images/browse-books/03.jpg'),
          name: 'Little Black Book',
          category: 'Comic Books',
          author: 'John Klok',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          price: '$129'
        },
        {
          src: require('../../assets/images/browse-books/04.jpg'),
          name: 'Take On The Risk',
          category: 'General Books',
          author: 'George Strong',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          price: '$89'
        },
        {
          src: require('../../assets/images/browse-books/05.jpg'),
          name: 'Absteact On Background',
          category: 'Film & Photography',
          author: 'Ichae Semos',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          price: '$99'
        },
        {
          src: require('../../assets/images/browse-books/06.jpg'),
          name: 'Find The Wave Book',
          category: 'General Books',
          author: 'Fidel Martin',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          price: '$100'
        },
        {
          src: require('../../assets/images/browse-books/07.jpg'),
          name: 'See the More Story',
          category: 'Horror Story',
          author: 'Jules Boutin',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          price: '$79'
        },
        {
          src: require('../../assets/images/browse-books/08.jpg'),
          name: 'The Wikde Book',
          category: ' Computers & Internet',
          author: 'Kusti Franti',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          price: '$89'
        },
        {
          src: require('../../assets/images/browse-books/09.jpg'),
          name: 'Conversion Erik Routley',
          category: 'Sports',
          author: 'Argele Intili',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          price: '$79'
        },
        {
          src: require('../../assets/images/browse-books/10.jpg'),
          name: 'The Leo Dominica',
          category: 'General Books',
          author: 'Henry Jurk',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
          price: '$99'
        }
      ]
    }
  }
}
</script>
