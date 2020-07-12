<template>
  <div><hello-world /></div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  name: 'Index',
  components: { HelloWorld },
})
export default class extends Vue {}
</script>
