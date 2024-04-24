<template>
   <b-container fluid>
     <b-row>
       <b-col sm="12">
         <iq-card>
           <template v-slot:headerTitle>
             <h4 class="card-title">Edit Categories</h4>
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
    this.getId()
    this.getCategoryName()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  data () {
    return {
      id: '',
      categoryName: '' // 添加一个数据绑定，用于保存表单输入的分类名称
    }
  },
  methods: {
    getId () {
      // 从 URL 中获取参数
      const params = new URLSearchParams(window.location.search)
      this.id = params.get('id')
    },
    getCategoryName () {
      axios.get(`/genres/${this.id}`)
        .then(response => {
          this.categoryName = response.name
        })
        .catch(error => {
          console.error(error)
        })
    },
    submitForm () {
      // 执行提交逻辑
      axios.put(`/genres/${this.id}`, { name: this.categoryName })
        .then(response => {
          // 处理成功响应
          // 导航到目标路由，并传递参数
          this.$router.push({ path: '/admin/category-list', query: { } })
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
