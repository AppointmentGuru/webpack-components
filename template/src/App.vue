<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <el-menu  mode="horizontal" >
          <el-menu-item index="1">
            {{ name }}
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <side-menu></side-menu>
      </el-col>
      <el-col :span="18">
        <div class='content' >
        <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
{{#unless router}}
import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
import SideMenu from '@/components/pages/SideMenu'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'app',
  components: {
    SideMenu{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
body {
  padding:0px;
  margin:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-left:auto;margin-right:auto;
  margin-top:0px;
}
#app .content {
  padding:20px;
}
</style>
