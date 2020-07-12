<template>
  <div>
    <p class="greeting">Hello {{ name }}!</p>
    Count is {{ count }}.
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Component, Prop } from 'vue-property-decorator';

const store = namespace('counter');

@Component
export default class HelloWorld extends Vue {
  @Prop({ default: 'unknown' })
  name!: string;

  @store.State
  private count!: number;
}
</script>
