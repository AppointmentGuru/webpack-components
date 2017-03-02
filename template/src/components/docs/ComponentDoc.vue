<template>
<div>
  <h2>{{ componentName }}</h2>
  <slot></slot>
  <slot name='controls' >
  </slot>

  <h3>Examples</h3><hr/>

  <h4>Desktop</h4>
  <slot name='example-desktop' >No desktop version available</slot>

  <h4>Mobile</h4>
  <div class='phone-viewport' >
  <slot name='example-mobile' >No mobile version available</slot>
  </div>

  <h3>API</h3><hr/>
  <h4>Properties</h4>
  <doc-table :table-data='props' ></doc-table>
  <h4>Slots</h4>
  <doc-table :table-data='slots' ></doc-table>
  <h4>Events</h4>
  <doc-table :table-data='events' ></doc-table>

</div>
</template>
<script type="text/javascript">
import DocTable from './DocTable'

export default {
  name: 'ComponentDoc',
  components: {
    DocTable
  },
  props: {
    componentName: { type: String, required: true },
    props: { type: Array, default: () => { return [] } },
    slots: { type: Array, default: () => { return [] } },
    events: { type: Array, default: () => { return [] } }
  },
  computed: {
    showPropsSlotsEvents () {
      return this.props.length + this.slots.length + this.events.length > 0
    }
  }
}
</script>
<style>
.phone-viewport{
  width: 375px;
  height: 667px;
  border: solid 1px;
}
</style>
