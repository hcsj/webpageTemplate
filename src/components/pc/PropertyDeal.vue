<template>
  <!-- 资产交易模块 -->
  <div>
    <head-nav></head-nav>
    <div id="content-msg-box" v-if="!openDetails">
      <div class="content-msg-box">
        <el-breadcrumb class="breadcrumb-t">
          <el-breadcrumb-item>您当前的位置是:</el-breadcrumb-item>
          <el-breadcrumb-item>资产交易</el-breadcrumb-item>
          <el-breadcrumb-item v-if="activeIndex == '债权类资产'">债权类资产</el-breadcrumb-item>
          <el-breadcrumb-item v-if="activeIndex == '实物类资产'">实物类资产</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content-msg-c">
          <!-- 侧边栏部分 -->
          <div class="press-cl">
            <li v-for="(pre,index) in tabList" :key="index">
              <span
                class="press-cls"
                @click="activeIndex = pre.title"
                :class="['tab-button',{active:activeIndex === pre.title}]"
              >{{pre.title}}</span>
            </li>
          </div>
          <div class="content-msg-c-r">
            <el-form :model="dealForm" ref="dealForm" label-width="90px" class="demo-ruleForm">
              <section>
                <el-form-item label="项目编号:" prop="name">
                  <el-input v-model="dealForm.name"></el-input>
                </el-form-item>
                <el-form-item label="标的名称:" prop="name">
                  <el-input v-model="dealForm.name"></el-input>
                </el-form-item>
                <el-form-item label="项目地区:" prop="name">
                  <el-input v-model="dealForm.name"></el-input>
                </el-form-item>
              </section>
              <section>
                <el-form-item label="项目行业:" prop="name">
                  <el-input v-model="dealForm.name"></el-input>
                </el-form-item>
                <el-form-item label="起始日期:" prop="name">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    style="width:100%"
                    v-model="dealForm.date"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item label="结束日期:" prop="name">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="dealForm.date"
                    style="width:100%"
                  ></el-date-picker>
                </el-form-item>
              </section>
              <div class="btn">
                <el-button type="primary" @click="search('dealForm')">搜索</el-button>
              </div>
            </el-form>
            <div class="content-msg-table" v-if="activeIndex == '债权类资产'">
              <el-table
                :data="tableData"
                style="width: 100%"
                :header-cell-style="{'background-color': '#e8e8e8'}"
                @row-click="open"
              >
                <el-table-column prop="date" label="项目编号"></el-table-column>
                <el-table-column prop="name" label="标的名称"></el-table-column>
                <el-table-column prop="address" label="标的行业"></el-table-column>
                <el-table-column prop="date" label="项目地区"></el-table-column>
                <el-table-column prop="name" label="挂牌价格(万元)"></el-table-column>
                <el-table-column prop="address" label="挂牌起始日期"></el-table-column>
                <el-table-column prop="address" label="挂牌结束日期"></el-table-column>
              </el-table>
              <div class="content-msg-pagination">
                <span
                  class="pagination-left"
                >共{{totalElements}}条记录&#x3000;第{{currentPage}}/{{totalElements}}页</span>
                <span class="pagination-right">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="totalPages"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="pageSize"
                    layout="total,  prev, pager, next, sizes"
                    :total="totalElements"
                  ></el-pagination>
                </span>
              </div>
            </div>
            <div class="content-msg-table" v-if="activeIndex == '实物类资产'">
              <el-table
                :data="tableData"
                style="width: 100%"
                :header-cell-style="{'background-color': '#e8e8e8'}"
                @row-click="open"
              >
                <el-table-column prop="date" label="项目编号"></el-table-column>
                <el-table-column prop="name" label="标的名称"></el-table-column>
                <el-table-column prop="address" label="标的行业"></el-table-column>
                <el-table-column prop="date" label="项目地区"></el-table-column>
                <el-table-column prop="name" label="挂牌价格(万元)"></el-table-column>
                <el-table-column prop="address" label="挂牌起始日期"></el-table-column>
                <el-table-column prop="address" label="挂牌结束日期"></el-table-column>
              </el-table>
              <div class="content-msg-pagination">
                <span
                  class="pagination-left"
                >共{{totalElements}}条记录&#x3000;第{{currentPage}}/{{totalElements}}页</span>
                <span class="pagination-right">
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="totalPages"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="pageSize"
                    layout="total,  prev, pager, next, sizes"
                    :total="totalElements"
                  ></el-pagination>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <deal-details v-else></deal-details>
  </div>
</template>

<script>
import HeadNav from "./common/HeadNav";
import Details from "./PropertyDeal/PropertyDealsDetails";
export default {
  components: {
    "head-nav": HeadNav,
    "deal-details": Details
  },
  data() {
    return {
      activeIndex: "债权类资产",
      openDetails: false,
      tabList: [
        {
          title: "债权类资产"
        },
        {
          title: "实物类资产"
        }
      ],
      dealForm: {
        name: "",
        date: ""
      },
      currentPage: 0,
      pageSize: 10,
      totalPages: 0,
      totalElements: 0,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    search(formName) {
      alert("submit!");
    },
    open(row) {
      // this.openDetails = true
      this.$router.push({
        name: "PropertyDealsDetails",
        params: {
          type: this.activeIndex == "债权类资产" ? "1" : "2"
        }
      });
      console.log(row);
    },
    handleCurrentChange(val) {
      //   console.log(val);
      this.currentPage = val - 1;
      if (this.activeIndex == "债权类资产") {
      } else if (this.activeIndex == "实物类资产") {
      }
    },
    handleSizeChange(val) {
      this.currentPage = 0;
      this.pageSize = val;
      if (this.activeIndex == "债权类资产") {
      } else if (this.activeIndex == "实物类资产") {
      }
    }
  }
};
</script>

<style lang="scss" scoped>
//引入配色
@import "../../assets/css/pc/blendent.scss";
@import "../../assets/css/pc/home_business.scss";

.press-cl {
  width: 160px;
  min-width: 160px;
  text-align: center;
  line-height: 100px;
  span {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
    color: $theme;
    overflow: hidden;
    transition: 0.3s;
    border-top: 4px solid transparent;
    &:hover {
      border-bottom-right-radius: 40px;
      background: $white;
      color: $second;
    }
  }
  li::before {
    content: "";
    width: 90px;
    height: 2px;
    position: absolute;
    left: 40px;
    top: 0px;
    background: $white;
    transition: 0.3s;
  }
  li:first-child::before {
    background: transparent;
  }
  li {
    display: block;
    width: 100%;
    height: 100px;
    background: #e8e8e8;
    cursor: pointer;
    transition: 0.3s;
    box-sizing: border-box;
    position: relative;
  }
  .tab-button.active {
    position: relative;
    z-index: 2;
    border-top: 3px solid $second;
    background: $white;
    color: $second;
    border-bottom-right-radius: 40px;
    box-shadow: 0 0 5px $shadow;
  }
}
</style>