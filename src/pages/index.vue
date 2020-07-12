<template>
  <v-layout column justify-center align-center>
    <div>
      <h1>Form</h1>
      <main-form @submitted="save" />
    </div>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import MainForm from '@/components/main-form.vue';
import Component from 'vue-class-component';

import IValues from '@/interfaces/values.interface';

@Component({
  name: 'Index',
  components: {
    MainForm,
  },
})
export default class extends Vue {
  save(values: IValues): void {
    console.log('sumbitted', values);
    return;
  }
}
</script>
