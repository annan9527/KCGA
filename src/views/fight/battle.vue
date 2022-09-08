/**
 * 办公管理   发文管理
 */
<template>
  <div>
    <!-- 搜索筛选 -->

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
        width="100"
      >
        <template slot-scope="scope" >
          <div :class="{'active':scope.row.currentState === '接收'}">
            {{ scope.row.currentState }}
          </div>
        
        </template>
      </el-table-column>
      <el-table-column
        sortable
        prop="category"
        label="文件标题"
        width="450"
        align="left"
      ></el-table-column>
      <el-table-column
        sortable
        prop="docNumber"
        label="文件编号"
        width="160"
      ></el-table-column>
      <el-table-column
        sortable
        prop="addTime"
        label="发稿人"
        width="100"
      ></el-table-column>
      <el-table-column
        sortable
        prop="status"
        label="紧急程度"
        width="100"
      ></el-table-column>
      <el-table-column sortable prop="editTime" label="收文日期" width="200">
      </el-table-column>
      <el-table-column sortable  label="操作" width="200">
        <el-button type="primary" size="mini" @click="dialogVisible=true">查看</el-button>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <Pagination
      v-bind:child-msg="pageparm"
      @callFather="callFather"
    ></Pagination>
    <!-- 编辑界面 -->
    <el-dialog
  :visible.sync="dialogVisible"
  width="50%"
  :before-close="handleClose">
  <div style="margin: 20px;">
        <h1>公安部印发《公安机关反有组织犯罪工作规定》（附全文）</h1>
      <h3>(图像)政务：安徽公安在线 2022-08-30 08:19</h3>
      <p style="line-height:40px; font-size: large;">
        为深入贯彻落实《中华人民共和国反有组织犯罪法》，保证公安机关依法、规范、高效开展反有组织犯罪工作，切实保护公民和组织的合法权益，近日，公安部制定印发《公安机关反有组织犯罪工作规定》，自2022年10月1日起施行。
        反有组织犯罪法是我国第一部专门、系统、完备规范反有组织犯罪工作的法律，在反有组织犯罪法搭建的法律框架基础上，作了承接细化和充实巩固，系统归纳了公安机关反有组织犯罪工作职责和基本原则；对公安机关预防和治理职责及相关程序作了细化；明确了公安机关核查有组织犯罪线索的法律地位和具体程序；明确了公安机关办理有组织犯罪案件的一般规定和特殊要求；强化了公安机关反有组织犯罪“打财断血”“打伞破网”工作机制；明确了反有组织犯罪法新设定行政处罚的实施办法，并对国际合作、专业队伍建设、物质保障、证人保护等有关内容作了细化规定。
        公安部有关负责人表示，公安机关将以规定出台为契机，进一步加强反有组织犯罪法的宣传贯彻工作，坚持标本兼治、惩防并举，积极构建及时主动发现、全面彻底打击、专业精准防控、长效综合治理、高效协同配合的反有组织犯罪工作新格局，不断推动常态化扫黑除恶工作走深走实，为建设更高水平的平安中国、法治中国贡献更大力量。
        中华人民共和国公安部令
      </p>
      </div>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import { deptList, deptSave, deptDelete } from "../../api/userMG";
import Pagination from "../../components/Pagination";
export default {
  data() {
    return {
      dialogVisible:false,
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
            addTime:"王丽娜",
            status: "一类",
            docNumber: "B124556",
            currentState: "接收",
            deptName: "B124599",
            deptNo: "1",
            category: "公安部现行有效规章及规范性文件目录",
            editTime: "2022/3/5",
          },
          {
            addTime:"王丽娜",
            status: "一类",
            docNumber: "B124556",
            currentState: "接收",
            deptName: "B124599",
            deptNo: "1",
            category: "公安部现行有效规章及规范性文件目录",
            editTime: "2022/3/5",
          },
          {
            addTime:"王丽娜",
            status: "一类",
            docNumber: "B124556",
            currentState: "未接收",
            deptName: "B124599",
            deptNo: "1",
            category: "公安部现行有效规章及规范性文件目录",
            editTime: "2022/3/5",
          },
          {
            addTime:"王丽娜",
            status: "一类",
            docNumber: "B124556",
            currentState: "接收",
            deptName: "B124599",
            deptNo: "1",
            category: "公安部现行有效规章及规范性文件目录",
            editTime: "2022/3/5",
          },
          {
            addTime:"王丽娜",
            status: "一类",
            docNumber: "B124556",
            currentState: "未接收",
            deptName: "B124599",
            deptNo: "1",
            category: "公安部现行有效规章及规范性文件目录",
            editTime: "2022/3/5",
          },
          {
            addTime:"王丽娜",
            status: "一类",
            docNumber: "B124556",
            currentState: "接收",
            deptName: "B124599",
            deptNo: "1",
            category: "公安部现行有效规章及规范性文件目录",
            editTime: "2022/3/5",
          },
          {
            addTime:"王丽娜",
            status: "一类",
            docNumber: "B124556",
            currentState: "未接收",
            deptName: "B124599",
            deptNo: "1",
            category: "公安部现行有效规章及规范性文件目录",
            editTime: "2022/3/5",
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
    handleClose(){

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
.active {
   color: brown;
   font-size: 12px;
}
</style>

 