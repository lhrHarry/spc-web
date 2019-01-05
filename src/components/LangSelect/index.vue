<template>
  <!--下拉菜单 ，trigger 点击触发   @command：绑定事件的一种方式 -->
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <svg-icon class-name="international-icon" icon-class="language"></svg-icon>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language==='zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language==='en'" command="en">English</el-dropdown-item>
      <el-dropdown-item :disabled="language==='es'" command="es">Español</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'index',
  // 获取store中的计算属性
  computed: {
    language () {
      // 配置store vuex
      return this.$store.getters.language
    }
  },
  methods: {
    // 设置国际化
    handleSetLanguage (lang) {
      // 配置i18n
      this.$i18n.locale = lang
      this.$store.dispatch('setLanguage', lang)
      // 滑出消息提示
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
  .international-icon {
    font-size: 20px;
    cursor: pointer;
    vertical-align: -5px!important;
  }
</style>
