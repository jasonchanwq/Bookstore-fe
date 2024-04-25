<template>
   <b-container fluid>
      <b-row>
          <b-col sm="12">
              <iq-card>
                  <template v-slot:headerTitle>
                      <h4 class="card-title">Add Books</h4>
                  </template>
                  <template v-slot:body>
                      <form @submit.prevent="Submit">
                          <div class="form-group">
                              <label>Book Name:</label>
                              <input type="text" class="form-control" v-model="bookName">
                          </div>
                          <div class="form-group">
                              <label>Book Category:</label>
                              <select class="form-control" v-model="selectedGenreId">
                                 <option disabled value="">Select Book Category</option>
                                 <option v-for="genre in genres" :key="genre._id" :value="genre._id">{{ genre.name }}</option>
                              </select>
                          </div>

                          <div class="form-group">
                              <label>Book Image:</label>
                              <div class="custom-file">
                                  <input type="file" class="custom-file-input" accept="image/png, image/jpeg" @change="handleFileChange">
                                  <label class="custom-file-label">Choose file</label>
                              </div>
                          </div>
                          <div class="form-group">
                              <label>Book Price:</label>
                              <input type="text" class="form-control" v-model="bookPrice">
                          </div>
                          <div class="form-group">
                              <label>Book Stock:</label>
                              <input type="text" class="form-control" v-model="bookStock">
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
import axios from '../../axios.js'
import { core } from '../../config/pluginInit'
import { mapGetters } from 'vuex'
export default {
  name: 'addbook',
  mounted () {
    core.index()
    this.fetchGenres()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  data () {
    return {
      bookName: '',
      genres: [],
      selectedGenreId: '',
      bookImage: null,
      bookPrice: '',
      bookStock: ''
    }
  },
  methods: {
    async fetchGenres () {
      try {
        const response = await axios.get('/genres')
        this.genres = response
      } catch (error) {
        //console..error('Error fetching genres:', error)
      }
    },
    async Submit () {
      try {
        const formData = {
          name: this.bookName,
          genreId: this.selectedGenreId,
          numberInStock: this.bookStock,
          price: this.bookPrice,
          image: this.bookImage
        }

        const response = await axios.post('books', formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        //console..log('Book added:', response)

        this.bookName = ''
        this.selectedGenreId = ''
        this.bookImage = null
        this.bookPrice = ''
        this.bookStock = ''
        this.$router.go(-1)
      } catch (error) {
        //console..error('Error adding book:', error.response.data)
      }
    },
    handleFileChange (event) {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.onload = () => {
        this.bookImage = reader.result
      }

      reader.readAsDataURL(file)
    },
    cancel () {
      // return last page -1
      this.$router.go(-1)
    }
  }
}
</script>
