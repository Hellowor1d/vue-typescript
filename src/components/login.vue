<template>
<el-container>
  <el-main>
<el-input v-model="input" placeholder="请输入内容"></el-input>
<el-input v-model="count" placeholder="vuex计数"></el-input>
<el-button  @click="increatement">点击计数</el-button>
  </el-main>
  </el-container>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {
  input: string = ''
  count : number = 0
  increatement() : void {
    this.count += 1
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  $highlight-color: #f90,

  .demonstration {
    color: $highlight-color
  }
</style>
