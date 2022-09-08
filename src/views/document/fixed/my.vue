/**
 * 网站内容管理 信息管理
 */
<template>
  <div>
    
    <!-- 搜索筛选 -->
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="文件名">
        <el-input size="small" v-model="formInline.number" placeholder="请输入文件名查询"></el-input>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button size="small" type="primary" icon="el-icon-search" @click="search">查询</el-button>
        <el-button @click="onQuery" icon="el-icon-refresh" size="mini" type="danger">重置</el-button>
        <el-button size="small" type="primary" icon="el-icon-plus" @click="handleEdit()">添加</el-button>
      </el-form-item>
      <br />
      <el-form-item>
        <el-button type="primary" icon="el-icon-edit">修改</el-button>
        <el-button type="primary" icon="el-icon-share">分享</el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
       
      </el-form-item>
    </el-form>

    <!--列表-->
    <el-table
      size="small"
      :data="listData"
      highlight-current-row
      v-loading="loading"
      border
      element-loading-text="拼命加载中"
      style="width: 100%;"
    >
      <el-table-column align="center" type="selection" width="60"></el-table-column>
      <el-table-column sortable prop="number" label="编号" width="200"></el-table-column>
      <el-table-column sortable prop="deptNo" label="栏目名" width="200"></el-table-column>
      <el-table-column sortable prop="editTime" label="发布时间" width="200">
        <template slot-scope="scope">
          <div>{{scope.row.editTime|timestampToTime}}</div>
        </template>
      </el-table-column>
      <el-table-column sortable prop="articleTitle" label="文章标题" width="300"></el-table-column>
      
      <el-table-column sortable prop="editTime" label="上传文件" width="300">
           <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件,且不超过500kb</div>
        </el-upload>
      </el-table-column>
      <el-table-column align="center" label="操作" min-width="300">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteUser(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <Pagination v-bind:child-msg="pageparm" @callFather="callFather"></Pagination>
    <!-- 编辑界面 -->
    <el-dialog :title="title" :visible.sync="editFormVisible" width="30%" @click="closeDialog">
      <el-form label-width="120px" :model="editForm" :rules="rules" ref="editForm">
        <el-form-item label="编号" prop="number">
          <el-input size="small" v-model="editForm.number" auto-complete="off" placeholder="请输入编号"></el-input>
        </el-form-item>
        <el-form-item label="栏目名" prop="deptNo">
          <el-input size="small" v-model="editForm.deptNo" auto-complete="off" placeholder="请输入栏目名"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="closeDialog">取消</el-button>
        <el-button
          size="small"
          type="primary"
          :loading="loading"
          class="title"
          @click="submitForm('editForm')"
        >保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { deptList, deptSave, deptDelete } from "../../api/userMG";
import Pagination from "../../components/Pagination";
export default {
  data() {
    return {
      nshow: true, //switch开启
      fshow: false, //switch关闭
      loading: false, //是显示加载
      editFormVisible: false, //控制编辑页面显示与隐藏
      title: "添加",
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      editForm: {
        deptId: "",
        number: "",
        deptNo: "",
        token: localStorage.getItem("logintoken")
      },
      // rules表单验证
      rules: {
        number: [{ required: true, message: "请输入编号", trigger: "blur" }],
        deptNo: [{ required: true, message: "请输入栏目名称", trigger: "blur" }]
      },
      formInline: {
        page: 1,
        limit: 10,
        varLable: "",
        varName: "",
        token: localStorage.getItem("logintoken")
      },
      // 删除文章
      seletedata: {
        ids: "",
        token: localStorage.getItem("logintoken")
      },
      userparm: [], //搜索权限
      listData: [], //用户数据
      // 分页参数
      pageparm: {
        currentPage: 1,
        pageSize: 10,
        total: 10
      }
    };
  },
  // 注册组件
  components: {
    Pagination
  },
  /**
   * 数据发生改变
   */

  /**
   * 创建完毕
   */
  created() {
    this.getdata(this.formInline);
  },

  /**
   * 里面的方法只有被调用才会执行
   */
  methods: {
    //   点击上传
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
    // 获取公司列表
    getdata(parameter) {
      this.loading = true;
      // 模拟数据开始
      let res = {
        code: 0,
        msg: null,
        count: 5,
        data: [
            
          {
            addUser: null,
            articleTitle: null,
            addTime: 1521062371000,
            editTime: 1526700200000,
            deptId: 2,
            number: "1512812337219207170",
            deptNo: "通知通告",
            parentId: 1
          },
          {
            addUser: null,
            articleTitle: null,
            addTime: 1521063247000,
            editTime: 1526652291000,
            deptId: 3,
            number: "1512812337219207170",
            deptNo: "通知通告",
            parentId: 1
          },
          {
            addUser: null,
            articleTitle: null,
            addTime: 1526349555000,
            editTime: 1526349565000,
            deptId: 12,
            number: "1512812337219207178",
            deptNo: "通知通告",
            parentId: 1
          },
          {
            addUser: null,
            articleTitle: null,
            addTime: 1526373178000,
            editTime: 1526373178000,
            deptId: 13,
            number: "1512812337219207177",
            deptNo: "通知通告",
            parentId: 1
          },
          {
            addUser: null,
            articleTitle: null,
            addTime: 1526453107000,
            editTime: 1526453107000,
            deptId: 17,
            number: "1512812337219207109",
            deptNo: "通知通告",
            parentId: 1
          }
        ]
      };
      this.loading = false;
      this.listData = res.data;
      this.pageparm.currentPage = this.formInline.page;
      this.pageparm.pageSize = this.formInline.limit;
      this.pageparm.total = res.count;
      // 模拟数据结束

      /***
       * 调用接口，注释上面模拟数据 取消下面注释
       */
      // deptList(parameter)
      //   .then(res => {
      //     this.loading = false
      //     if (res.success == false) {
      //       this.$message({
      //         type: 'info',
      //         message: res.msg
      //       })
      //     } else {
      //       this.listData = res.data
      //       // 分页赋值
      //       this.pageparm.currentPage = this.formInline.page
      //       this.pageparm.pageSize = this.formInline.limit
      //       this.pageparm.total = res.count
      //     }
      //   })
      //   .catch(err => {
      //     this.loading = false
      //     this.$message.error('菜单加载失败，请稍后再试！')
      //   })
    },

    // 分页插件事件
    callFather(parm) {
      this.formInline.page = parm.currentPage;
      this.formInline.limit = parm.pageSize;
      this.getdata(this.formInline);
    },
    // 搜索事件
    search() {
      this.getdata(this.formInline);
    },
    //显示编辑界面
    handleEdit: function(index, row) {
      this.editFormVisible = true;
      if (row != undefined && row != "undefined") {
        this.title = "修改";
        this.editForm.deptId = row.deptId;
        this.editForm.number = row.number;
        this.editForm.deptNo = row.deptNo;
      } else {
        this.title = "添加";
        this.editForm.deptId = "";
        this.editForm.number = "";
        this.editForm.deptNo = "";
      }
    },
    // 编辑、增加页面保存方法
    submitForm(editData) {
      this.$refs[editData].validate(valid => {
        if (valid) {
          deptSave(this.editForm)
            .then(res => {
              this.editFormVisible = false;
              this.loading = false;
              if (res.success) {
                this.getdata(this.formInline);
                this.$message({
                  type: "success",
                  message: "文章保存成功！"
                });
              } else {
                this.$message({
                  type: "info",
                  message: res.msg
                });
              }
            })
            .catch(err => {
              this.editFormVisible = false;
              this.loading = false;
              this.$message.error("文章保存失败，请稍后再试！");
            });
        } else {
          return false;
        }
      });
    },
    // 删除公司
    deleteUser(index, row) {
      this.$confirm("确定要删除吗?", "信息", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deptDelete(row.deptId)
            .then(res => {
              if (res.success) {
                this.$message({
                  type: "success",
                  message: "该文章已删除!"
                });
                this.getdata(this.formInline);
              } else {
                this.$message({
                  type: "info",
                  message: res.msg
                });
              }
            })
            .catch(err => {
              this.loading = false;
              this.$message.error("文章删除失败，请稍后再试！");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 关闭编辑、增加弹出框
    closeDialog() {
      this.editFormVisible = false;
    }
  }
};
</script>

<style scoped>
.user-search {
  margin-top: 20px;
}
.userRole {
  width: 100%;
}
</style>

 
 