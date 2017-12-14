<template>
<el-container>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
  </el-container>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      msg: '登录模块',
    };
  },
  beforeCreate() {
  // eslint-disable-next-line
    console.log("login")
  },
};
</script>
<script>
  export default {
    data() {
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            },
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - (3600 * 1000 * 24));
              picker.$emit('pick', date);
            },
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - (3600 * 1000 * 24 * 7));
              picker.$emit('pick', date);
            },
          }],
        },
        value1: '',
        value2: '',
      };
    },
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  $highlight-color: #f90,

  .demonstration {
    color: $highlight-color
  }
</style>
