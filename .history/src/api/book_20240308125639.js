import Vue from 'vue'
import axios from 'axios'
// config baseurl
axios.defaults.baseURL='http://127.0.0.1:8484/'


// 查询书籍管理列表
export function listBook(query) {
  axios.get(axios.defaults.baseURL +'/book/list')
}

// 查询书籍管理详细
export function getBook(bookId) {
  return request({
    url: this.$http+'/book/' + bookId,
    method: 'get'
  })
}

// 新增书籍管理
export function addBook(data) {
  return request({
    url: this.$http + '/system/book',
    method: 'post',
    data: data
  })
}

// 修改书籍管理
export function updateBook(data) {
  return request({
    url: this.$http + '/book',
    method: 'put',
    data: data
  })
}

// 删除书籍管理
export function delBook(bookId) {
  return request({
    url: this.$http +  '/book/' + bookId,
    method: 'delete'
  })
}
