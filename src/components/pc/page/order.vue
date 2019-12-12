<template>
  <div>
      <div id="nav">
      <nav>
        <div class="parcel">
          <div class="logo">
            <img src="@/assets/images/logo.png" alt>
          </div>
          <div class="nav">
            <h2>查询结果</h2>
            <router-link to="/">返回东金中心首页</router-link>
          </div>
        </div>
      </nav>
    </div>
    <div class="table">
    <!-- 交易订单查询组件 -->
    <el-table style="width: 90%; cursor: pointer;" :data="tableDataEnd" >
      <el-table-column prop="userName" label="认购人" width="70" align=""></el-table-column>
      <el-table-column prop="transactionAmount" label="认购金额" align="left"></el-table-column>
      <el-table-column prop="issuerCompany" label="挂牌方" align=""></el-table-column>
      <el-table-column prop="guarateeCompany" label="担保方" align=""></el-table-column>
      <el-table-column prop="entrustedAdmin" label="受托管理人/资产管理人" align=""></el-table-column>
      <el-table-column prop="productName" label="资产名称" align=""></el-table-column>
      <el-table-column prop="productCode" label="资产编号" align=""></el-table-column>
      <el-table-column prop="interestDay" label="起息日" align=""></el-table-column>
      <el-table-column prop="expirationDay" label="到期日" align=""></el-table-column>
      <el-table-column prop="paymentType" label="付息方式" align=""></el-table-column>
    </el-table>
    <div class="paging">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="pageSize"
        layout="total,  prev, pager, next, jumper"
        :total="totalElements"
      ></el-pagination>
    </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
export default {
  data() {
    return {
      pageSize: 0, //每页的数据条数
      currentPage: 1, //默认开始页面
      totalElements: 0,
      order: [],
      tableDataEnd: []
    };
  },
  methods: {
    // 初始页currentPage、初始每页数据数pageSize和数据data
    handleSizeChange: function(val) {
      this.pageSize = val; //每页下拉显示数据
      this.handleCurrentChange(this.currentPage);
      this.getOrders();
    },
    handleCurrentChange: function(val) {
      this.currentPage = val; //点击第几页
      this.getOrders();
    }, //组件自带监控当前页码
    currentChangePage(list) {
      let from = (this.currentPage - 1) * this.pageSize;
      let to = this.currentPage * this.pageSize;
      this.tableDataEnd = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tableDataEnd.push(list[from]);
        }
      }
    },
    //获取订单信息方法
    getOrders() {
      request({
        url: "website/orderSearch",
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "channel-code": "AXXXXXXXXX",
          "client-type": "PCH5",
          version: "0.0.1",
          "x-auth-token": window.sessionStorage.XAuthToken
        },
        data: {
          pageNumber: this.currentPage - 1,
          pageSize: 10
        }
      })
        .then(res => {
          console.log(res);
        if (res.data.retCode == 'N00000') {
           this.order = res.data.body.content;
        this.tableDataEnd = res.data.body.content;
        this.totalElements = res.data.body.totalElements;
        this.pageSize = res.data.body.pageable.pageSize;
        }else{
           this.$notify.warning(res.data.retMsg)
        }
        })
        .catch(err => {
          console.log(err);
            this.$notify.error('服务器出现异常,请稍后再试')
        });
    }
  },
  mounted() {
    this.getOrders();
  }
};
</script>

<style lang="scss" scoped >
@import "../../../assets/css/pc/blendent.scss";
.paging {
  width: 100%;
  text-align: center;
  padding-top: 30px;
}
/deep/.el-table th:nth-child(2)>.cell{
	text-align: left !important;
}

#nav {
  width: 100%;
  height: 100px;
  left: 0;
  position: absolute;
  z-index: 3;
  background: $white;
  min-width: 1250px;
}
nav {
  width: 100%;
  line-height: 65px;
  text-align: center;
  background: $white;
  a {
    color: $text;
    position: absolute;
    top: 20px;
    right: 50px;
  }
}
.parcel {
  width: 60%;
  height: 65px;
  position: relative;
}
.logo {
  width: 150px;
  height: 60px;
  position: absolute;
  left: 3%;
  top: 30%;
  text-align: center;
}
.logo img {
  height: 100%;
}
.nav {
  width: 80%;
  height: 65px;
  position: absolute;
  right: 0;
  h2 {
    font-weight: 200;
    text-align: left;
    font-size: 20px;
    line-height: 100px;
  }
}
.table{
    position: relative;
    top: 150px;
}
</style>
