<template>
  <div class="wrap-login">
    <el-radio-group v-model="menuType">
      <el-radio label="a">a路由</el-radio>
      <el-radio label="b">b路由</el-radio>
    </el-radio-group>
    <el-button @click="loginFn">登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuType: 'a'
    }
  },
  methods: {
    loginFn() {
      localStorage.setItem('token', this.menuType);
      this.$store.commit('setInited', false)
      this.$router.push('/').catch(err => {})
    }
  }
}
</script>