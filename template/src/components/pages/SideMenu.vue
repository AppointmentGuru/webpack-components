<template>
<el-menu
  :router="true"
  default-active="2"
  class="el-menu-vertical-demo"
  theme="dark">
  <!-- top level nav -->
  <el-menu-item index="/">Getting started</el-menu-item>

  <el-submenu
    v-for='(section, index) in nav'
    :key="section.name"
    :index="section.name" >
    <template slot="title">\{{section.name}}</template>
      <el-menu-item
        v-for='(link, index) in section.contents'
        :key='link.path'
        :index='link.path' >\{{ link.name }}
      </el-menu-item>
  </el-submenu>
</el-menu>
</template>
<script>
import { NavContents } from '@/router'
export default {
  NavContents,
  name: 'SideMenu',
  data () {
    return {
      'nav': NavContents
    }
  }
}
</script>
