<template>
<div>
  <top></top>
  <app-main></app-main>
  <!-- <bottom></bottom> -->
</div>
</template>

<script>
import Top from './components/Top'
import Bottom from './components/Bottom'
import AppMain from './components/AppMain'
export default {
  components: {Top, AppMain, Bottom}
}
</script>

<style>

</style>
