<template>
<el-table
  :data="tableData"
  empty-text="No data"
  style="width: 100%">
   <el-table-column
      v-for="field in keys"
      :key='field'
      :label="field"
      width="180">
      <template scope="scope">
        <span v-html="scope.row[field]" ></span>
      </template>
    </el-table-column>
</el-table>
</template>
<script>
export default {
  name: 'DocTable',
  props: {
    tableData: { type: Array, default: () => { return [] } }
  },
  computed: {
    keys () {
      try {
        return Object.keys(this.tableData[0])
      } catch (err) {
        return []
      }
    }
  }
}
</script>
