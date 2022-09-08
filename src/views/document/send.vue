/**
 * 办公管理   发文管理
 */
<template>
  <div>
    <!-- 搜索筛选 -->
    <el-form :inline="true" :model="formInline" class="user-search">
      <el-form-item label="发文编号">
        <el-input
          size="small"
          v-model="formInline.deptName"
          placeholder="输入部门名称"
        ></el-input>
      </el-form-item>
      <el-form-item label="文件编号">
        <el-input
          size="small"
          v-model="formInline.deptNo"
          placeholder="输入部门代码"
        ></el-input>
      </el-form-item>
      <el-form-item label="文件标题">
        <el-input
          size="small"
          v-model="formInline.deptNo"
          placeholder="输入部门代码"
        ></el-input>
      </el-form-item>
      <el-form-item label="办文类别">
        <el-radio-group v-model="radio">
          <el-radio :label="3" border size="medium">全部</el-radio>
          <el-radio :label="6" border size="medium">办件</el-radio>
          <el-radio :label="9" border size="medium">阅件</el-radio>
        </el-radio-group>
      </el-form-item>
      <br />
      <el-form-item label="拟 稿 人">
        <el-input
          size="small"
          v-model="formInline.deptNo"
          placeholder=" "
        ></el-input>
      </el-form-item>
      <el-form-item label="拟稿单位">
        <el-input
          size="small"
          v-model="formInline.deptNo"
          placeholder=" "
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
      <el-form-item label="紧急程度">
        <el-select
          size="small"
          v-model="formInline.roleId"
          placeholder="请选择"
        >
          <el-option label="平件" value="0"></el-option>
          <el-option label="急件" value="1"></el-option>
          <el-option label="特急" value="2"></el-option>
          <el-option
            v-for="parm in userparm"
            :key="parm.roleId"
            :label="parm.roleName"
            :value="parm.roleId"
          ></el-option>
        </el-select>
      </el-form-item>
      <br />

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
        prop="deptName"
        label="公文编号"
        width="150"
      ></el-table-column>
      <el-table-column
        sortable
        prop="currentState"
        label="当前状态"
        width="200"
      ></el-table-column>
      <el-table-column
        sortable
        prop="category"
        label="文件标题"
        width="450"
        align="center"
      ></el-table-column>
      <el-table-column
        sortable
        prop="docNumber"
        label="文件编号"
        width="160"
      ></el-table-column>
      <el-table-column
        sortable
        prop="status"
        label="紧急程度"
        width="200"
      ></el-table-column>
      <el-table-column sortable prop="editTime" label="收文日期" width="200">
        <template slot-scope="scope">
          <div>{{ scope.row.editTime | timestampToTime }}</div>
        </template>
      </el-table-column>
      <el-table-column
        sortable
        prop="addTime"
        label="拟稿人"
        width="200"
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
            status: "一类",
            docNumber: "265280",
            category:
              "公安部印发关于公安机关执行《人民警察法》有关问题的解释的通知",
            currentState: "接收",
            addTime: 1521062371000,
            editTime: 1526700200000,
            deptId: 2,
            deptName: "B124599",
            deptNo: "1",
            parentId: 1,
          },
          {
            status: "二类",
            docNumber: "265280",
            category:
              "公安部印发关于公安机关执行《人民警察法》有关问题的解释的通知",
            currentState: "接收",
            addTime: 1521062371000,
            editTime: 1526700200000,
            deptId: 2,
            deptName: "B124599",
            deptNo: "1",
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

 