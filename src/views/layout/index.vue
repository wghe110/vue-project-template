<template>
  <div class="wrap-layout">
    <header>
      <el-button @click="loginOutFn">退出登录</el-button>
    </header>
    <section class="content">
      <router-view></router-view>
    </section>
    <footer>
      <router-link to="/a">
        <el-button>a</el-button>
      </router-link>
      <router-link to="/b">
        <el-button>b</el-button>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    this.initFn();
  },
  methods: {
    initFn() {
      const token = localStorage.getItem('token');
      if(!token) {
        this.$router.push('/login')
      }
    },
    loginOutFn() {
      localStorage.clear();
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap-layout{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  >header{
    height: 100px;
    background-color: red;
  }
  >footer{
    height: 60px;
    background-color: blue;
  }
  >.content{
    flex: 1;
    min-height: 300px;
    overflow: auto;
  }
}
</style>