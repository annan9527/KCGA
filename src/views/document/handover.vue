/**
 * 办公管理   公文交接
 */
<template>
  <div>
    <!-- 搜索筛选 -->
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="公文编号">
        <el-input
          size="small"
          v-model="formInline.deptName"
          placeholder="输入部门名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="文件标题">
        <el-input
          size="small"
          v-model="formInline.deptNo"
          placeholder="输入部门代码"
        ></el-input>
      </el-form-item>
      <el-form-item label="文件文号">
        <el-input
          size="small"
          v-model="formInline.deptNo"
          placeholder="输入部门代码"
        ></el-input>
      </el-form-item>
      <el-form-item label="当前状态">
        <el-select
          size="small"
          v-model="formInline.isLock"
          placeholder="请选择"
        >
          <el-option label="待办" value=""></el-option>
          <el-option label="办结" value="N"></el-option>
        </el-select>
      </el-form-item>
      <br />
      <el-form-item label="发送单位">
        <el-input
          size="small"
          v-model="formInline.deptName"
          placeholder="输入部门名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="发送人 ">
        <el-input
          size="small"
          v-model="formInline.deptNo"
          placeholder="输入部门代码"
        ></el-input>
      </el-form-item>
      <el-form-item label="接收日期">
        <el-input
          placeholder="请选择日期"
          suffix-icon="el-icon-date"
          v-model="input1"
        ></el-input>
      </el-form-item>
      <el-form-item label="到">
        <el-input
          placeholder="请选择日期"
          suffix-icon="el-icon-date"
          v-model="input1"
        ></el-input>
      </el-form-item>
      <el-form-item style="margin-left: 50px">
        <el-button
          size="small"
          type="primary"
          icon="el-icon-search"
          @click="search"
          >搜索</el-button
        >
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
      style="width: 100%"
    >
      <el-table-column
        align="center"
        type="selection"
        width="100"
      ></el-table-column>
      <el-table-column
        sortable
        prop="deptNo"
        label="公文编码"
        width="100"
      ></el-table-column>
      <el-table-column
        sortable
        prop="Specification"
        label="当前状态"
        width="100"
      ></el-table-column>
      <el-table-column
        sortable
        prop="categore"
        label="文件标题"
        width="443"
      ></el-table-column>
      <el-table-column
        sortable
        prop="status"
        label="文件文号"
        width="150"
      ></el-table-column>
      <el-table-column
        sortable
        prop="deptName"
        label="发送单位"
        width="110"
      ></el-table-column>
      <el-table-column
        sortable
        prop="status"
        label="发送人"
        width="130"
      ></el-table-column>
      <el-table-column
        sortable
        prop="addTime"
        label="发送日期"
        width="150"
      ></el-table-column>
      <el-table-column
        sortable
        prop="deptNo"
        label="接收单位"
        width="120"
      ></el-table-column>
      <el-table-column
        sortable
        prop="editTime"
        label="接受时间"
        width="120"
      ></el-table-column>
      <el-table-column
        sortable
        prop="Nores"
        label="退回原因"
        width="130"
      ></el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <Pagination
      v-bind:child-msg="pageparm"
      @callFather="callFather"
    ></Pagination>
    <!-- 编辑界面 -->
    <el-dialog
      :title="title"
      :visible.sync="editFormVisible"
      width="30%"
      @click="closeDialog"
    >
      <el-form
        label-width="120px"
        :model="editForm"
        :rules="rules"
        ref="editForm"
      >
        <el-form-item label="部门名称" prop="deptName">
          <el-input
            size="small"
            v-model="editForm.deptName"
            auto-complete="off"
            placeholder="请输入部门名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="部门代码" prop="deptNo">
          <el-input
            size="small"
            v-model="editForm.deptNo"
            auto-complete="off"
            placeholder="请输入部门代码"
          ></el-input>
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
          >保存</el-button
        >
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
      input1: "",
      radio: 3,
      active: 0,
      nshow: true, //switch开启
      fshow: false, //switch关闭
      loading: false, //是显示加载
      editFormVisible: false, //控制编辑页面显示与隐藏
      title: "添加",
      editForm: {
        deptId: "",
        deptName: "",
        deptNo: "",
        token: localStorage.getItem("logintoken"),
      },
      // rules表单验证
      rules: {
        deptName: [
          { required: true, message: "请输入部门名称", trigger: "blur" },
        ],
        deptNo: [
          { required: true, message: "请输入部门代码", trigger: "blur" },
        ],
      },
      formInline: {
        page: 1,
        limit: 10,
        varLable: "",
        varName: "",
        token: localStorage.getItem("logintoken"),
      },
      // 删除部门
      seletedata: {
        ids: "",
        token: localStorage.getItem("logintoken"),
      },
      userparm: [], //搜索权限
      listData: [], //用户数据
      // 分页参数
      pageparm: {
        currentPage: 1,
        pageSize: 10,
        total: 10,
      },
    };
  },
  // 注册组件
  components: {
    Pagination,
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
    //   状态栏
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    // 获取公司列表
    getdata(parameter) {
      this.loading = true;
      // 模拟数据
      let res = {
        code: 0,
        msg: null,
        count: 5,
        data: [
          {
            Nores: "内容有误",
            status: "265280522",
            categore:
              "公安部印发关于公安机关执行《人民警察法》有关问题的解释的通知",
            Specification: "接收",
            addUser: null,
            editUser: null,
            addTime: 1521062371000,
            editTime: 1526700200000,
            deptId: 2,
            deptName: "分局",
            deptNo: "总队",
            parentId: 1,
          },
         
        ],
      };
      this.loading = false;
      this.listData = res.data;
      // 分页赋值
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
    handleEdit: function (index, row) {
      this.editFormVisible = true;
      if (row != undefined && row != "undefined") {
        this.title = "修改";
        this.editForm.deptId = row.deptId;
        this.editForm.deptName = row.deptName;
        this.editForm.deptNo = row.deptNo;
      } else {
        this.title = "添加";
        this.editForm.deptId = "";
        this.editForm.deptName = "";
        this.editForm.deptNo = "";
      }
    },
    // 编辑、增加页面保存方法
    submitForm(editData) {
      this.$refs[editData].validate((valid) => {
        if (valid) {
          deptSave(this.editForm)
            .then((res) => {
              this.editFormVisible = false;
              this.loading = false;
              if (res.success) {
                this.getdata(this.formInline);
                this.$message({
                  type: "success",
                  message: "公司保存成功！",
                });
              } else {
                this.$message({
                  type: "info",
                  message: res.msg,
                });
              }
            })
            .catch((err) => {
              this.editFormVisible = false;
              this.loading = false;
              this.$message.error("公司保存失败，请稍后再试！");
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
        type: "warning",
      })
        .then(() => {
          deptDelete(row.deptId)
            .then((res) => {
              if (res.success) {
                this.$message({
                  type: "success",
                  message: "公司已删除!",
                });
                this.getdata(this.formInline);
              } else {
                this.$message({
                  type: "info",
                  message: res.msg,
                });
              }
            })
            .catch((err) => {
              this.loading = false;
              this.$message.error("公司删除失败，请稍后再试！");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 关闭编辑、增加弹出框
    closeDialog() {
      this.editFormVisible = false;
    },
  },
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

 