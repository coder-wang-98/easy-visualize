<template>
  <div>
    <el-switch 
      v-model="theme" 
      active-value="light"
      inactive-value="dark"
      @change="changeThemeType"
    ></el-switch>
  </div>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'

const theme = ref('light')
const changeThemeType = (type:string) => {
    if (theme.value !== type) {
        theme.value = type
    }
    localStorage.setItem('easy-viaualize-theme', type)
    document.documentElement.className = theme.value
}
onMounted(() => {
    changeThemeType(localStorage.getItem('easy-viaualize-theme') || theme.value)
})

</script>
<style scoped lang='scss'>

</style>
