<template>
  <div class="layout hom-layout">
    <div
      class="list-group-item"
      v-for="(item, index) in componentsData"
      :key="index"
    >
      <component
        :is="componentMap[terminal - 1].get(item.type)"
        :componentContent="item.componentContent"
        :terminal="terminal"
      ></component>
    </div>
  </div>
</template>

<script>
import componentMap from './componentMap'
export default {
  name: 'canvasPage',
  data () {
    return {
      terminal: 3,
      componentsData: [],
      activeComponent: -1,
      componentMap: componentMap
    }
  },
}
</script>

<style lang="scss" scoped>
.hom-layout {
  background-color: #f5f5f5;
}
</style>

<style lang="scss">
.warp {
  width: 1252px;
  margin: 0 auto;
  max-width: 96%;
}
.flex-box {
  display: flex;
}
</style>
