<template>
  <div>Hello {{ name }}!</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
  @Prop({ default: 'unknown' })
  name!: string;
}
</script>
