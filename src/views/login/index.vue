<template>
<div class="login-container">
  <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-from" autocomplete="on" label-position="left" >
    <div class="title-container">
      <!--设置语言-->
      <h3 class="title">{{$t('login.title')}}</h3>
      <lang-select class="set-language"></lang-select>
    </div>
    <el-form-item prop="username">
      <span class="svg-container">
        <svg-icon icon-class="user"/>
      </span>
      <el-input
        v-model="loginForm.username"
        :aria-placeholder="$t('login.username')"
        name="username"
        type="test"
        auto-complete="on"
      />
    </el-form-item>

    <el-form-item prop="password">
      <span class="svg-container">
        <svg-icon icon-class="password"/>
      </span>
      <el-input
        :type="passwordType"
        v-model="loginForm.password"
        name="password"
        auto-complete="on"
        @keyup.enter.native="handleLogin"
      />
      <span class="show-pwd" @click="showPwd">
        <svg-icon icon-class="eye"/>
      </span>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import LangSelect from '@/components/LangSelect'
import { isValidUsername, isValidPassword } from '@/utils/validate'

export default {
  name: 'Login',
  components: { LangSelect },
  data () {
    // 定义检测username的方法
    const validateUsername = (rule, value, callback) => {
      if (!isValidUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callbacks) => {
      if (!isValidPassword(value)) {
        callbacks(new Error('The password can not be less than 6 digits'))
      } else {
        callbacks()
      }
    }
    return {
      loginForm: {
        // cookie中读取--
        username: 'admin',
        password: '111111'
      },
      // 登录规则
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined
    }
  },
  methods: {
    // 登录逻辑
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 展示密码
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    }
  }
}
</script>

<style scoped>

</style>
