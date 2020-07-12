<template>
  <v-layout id="index" column justify-center align-center>
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

import { namespace } from 'vuex-class';
import IValues from '@/interfaces/values.interface';

const responseStore = namespace('responses');

@Component({
  name: 'Index',
  components: {
    MainForm,
  },
})
export default class extends Vue {
  @responseStore.Action saveResponse!: (response: IValues) => void;

  save(values: IValues): void {
    this.saveResponse(values);
    return;
  }
}
</script>

<style scoped>
#index {
  padding: 0 10%;
}
</style>
