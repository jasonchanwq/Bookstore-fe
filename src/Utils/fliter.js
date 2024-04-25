import Vue from 'vue'
import moment from 'moment'

Vue.filter('reverse', function (value) {
  return value.slice().reverse()
})

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).fromNow()
  }
})
