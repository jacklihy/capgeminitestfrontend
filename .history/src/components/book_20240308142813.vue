<template>
  
</template>
<script>
export default {

 name: "book",
 data() {
      return {
        // 遮罩层
        loading: true,
        // 选中数组
        ids: [],
        // 非单个禁用
        single: true,
        // 非多个禁用
        multiple: true,
        // 显示搜索条件
        showSearch: true,
        // 总条数
        total: 0,
        // 书籍管理表格数据
        bookList: [],
        // 弹出层标题
        title: "",
        // 是否显示弹出层
        open: false,
        // 查询参数
        queryParams: {
          pageNum: 1,
          pageSize: 10,
          bookTitle: null,
          bookAuth: null,
          bookContent: null,
          bookversionDate: null,
          bookIsbn: null
        },
        // 表单参数
        form: {},
        // 表单校验
        rules: {
        }
      };
    },
    methods: {
      /** 查询书籍管理列表 */
      getList() {
           this.$http.get('/list').then(response => {
            this.bookList = response.rows;
            this.total = response.total;
           });
        }
    }
}
</script>
<style scoped>

</style>