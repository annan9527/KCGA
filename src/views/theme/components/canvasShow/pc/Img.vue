<template>
  <div class="box">
    <div class="pic">
      <img src="@/assets/img/banner/01.png" alt="" />
    </div>
    <div class="pic">
      <img src="@/assets/img/banner/01.png" alt="" />
    </div>
    <div class="pic">
      <img src="@/assets/img/banner/01.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 1000px;

  margin-bottom: 22px;

  background: radial-gradient(circle, #dfeaf5 0%, #f3f7fb 100%);
  border-radius: 2px;
  display: flex;
  .pic {
    flex: 1;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>