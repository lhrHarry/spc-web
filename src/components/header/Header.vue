<template >
  <div class="header">
    <el-header>
      <el-row>
        <el-col :span="4">
          <div class="spc-logo-0"><img class="spc-logo" src="../../assets/workspace.png" alt="spc-logo"></div>
        </el-col>
        <el-col :span="10">
          <el-menu
            :default-active="activeIndex2"
            mode="horizontal"
            @select="handleSelect"
            background-color="#161616"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">Tools</el-menu-item>
            <el-submenu index="2">
              <template slot="title">Space</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">spx</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>Message</el-menu-item>
            <el-menu-item index="4"><a href="#" target="_blank">Store</a></el-menu-item>
          </el-menu>
        </el-col>
        <el-col class="right-col" :span="10">
          <!-- 检测到登录就隐藏登录注册连接 打开用户名的渲染-->
          <a class="el-icon-info"></a>
          <a class="el-icon-edit"></a>
          <a class="el-icon-share"></a>
          <a class="el-icon-delete"></a>
          <a class="el-icon-search"></a>
          <a><el-input
            class="searchInput"
            placeholder="请输入内容"
            clearable>
          </el-input></a>
        </el-col>
      </el-row>
    </el-header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      activeIndex2: '1',
      username: '',
      hiddenLogin: false
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
    if (!this.username) {
      this.hiddenLogin = true
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .header {
    background: #161616;
    height: 64px;
  }

  .el-col-4 {
    float: left;
  }
  .spc-logo {
    width: 60px;
    height: 60px;
  }
  .spc-logo-0 {
    margin-left: 40px;
  }
  a {
    color: azure;
    margin: 0 15px;
    line-height: 64px;
    height: 64px;
    float: right;
    font-size: 28px;
    /*font-weight: bold;  //加粗*/
  }
  .searchInput {
    height: 100%;
    display: block;
  }
  .right-col {
    float: right;
  }
  .el-col , .el-menu{
    line-height: 64px;
    height: 64px;
  }

</style>
