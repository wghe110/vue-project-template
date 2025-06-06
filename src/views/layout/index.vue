<template>
  <div class="wrap-layout">
    <header></header>
    <section class="content">
      <router-view></router-view>
    </section>
    <footer></footer>
  </div>
</template>

<script>
export default {}
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