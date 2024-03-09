<template>
  <div class="app-container">
    <el-table v-loading="loading" :data="bookList" >
        <!-- <el-table-column type="selection" width="55" align="center" /> -->
        <el-table-column label="序号" align="center" prop="bookId" />
        <el-table-column label="图书标题" align="center" prop="bookTitle" />
        <el-table-column label="图书作者" align="center" prop="bookAuth" />
  <!--      <el-table-column label="图书内容" align="center" prop="bookContent" />-->
        <el-table-column label="出版年份" align="center" prop="bookversionDate" width="180">
        </el-table-column>
        <el-table-column label="ISBN" align="center" prop="bookIsbn" />
        <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              icon="el-icon-edit"
              @click="handleUpdate(scope.row)"
             
            >修改</el-button>
            <el-button
              size="mini"
              type="text"
              icon="el-icon-delete"
              @click="handleDelete(scope.row)"
             
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="图书标题" prop="bookTitle">
            <el-input v-model="form.bookTitle" placeholder="请输入图书标题" />
          </el-form-item>
          <el-form-item label="图书作者" prop="bookAuth">
            <el-input v-model="form.bookAuth" placeholder="请输入图书作者" />
          </el-form-item>
          <el-form-item label="图书内容">
            <editor v-model="form.bookContent" :min-height="192"/>
          </el-form-item>
          <el-form-item label="出版年份" prop="bookversionDate">
            <el-date-picker clearable
              v-model="form.bookversionDate"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="请选择出版年份">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="ISBN" prop="bookIsbn">
            <el-input v-model="form.bookIsbn" placeholder="请输入ISBN" />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </el-dialog>


  </div>
</template>
<script>
export default {

 name: "book",
 data() {
      return {
        // 遮罩层
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
    created() {
      this.getList();
    },
    methods: {
      /** 查询书籍管理列表 */
      getList() {
           this.$http.get('api/list').then(response => {
            this.bookList = response.data;
           console.log(this.bookList);
           });
        },
         // 取消按钮
      cancel() {
        this.open = false;
        this.reset();
      },
      // 表单重置
      reset() {
        this.form = {
          bookId: null,
          bookTitle: null,
          bookAuth: null,
          bookContent: null,
          bookversionDate: null,
          bookIsbn: null
        };
        this.resetForm("form");
      },

    }
}
</script>
<style scoped>

</style>