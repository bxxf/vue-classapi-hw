<template>
  <v-layout id="index" column justify-center align-center>
    <div>
      <h1>Form</h1>
      <main-form @submitted="save" />
    </div>
    <v-snackbar v-model="snackbar" :timeout="10000" top color="success">
      {{ email }} has already sent {{ count }}
      {{ count === 1 ? 'code' : 'codes' }}.
    </v-snackbar>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';

import MainForm from '@/components/main-form.vue';

import Response from '@/interfaces/response.interface';
import { countResponses } from '@/services/response.service';

const responseStore = namespace('responses');

@Component({
  name: 'Index',
  components: {
    MainForm,
  },
})
export default class extends Vue {
  @responseStore.Action saveResponse!: (response: Response) => void;
  @responseStore.Getter
  data!: Response[];

  email = '';
  snackbar = false;

  get count() {
    return countResponses(this.email, this.data);
  }

  save(values: Response) {
    this.saveResponse(values);
    this.email = values.email;
    this.snackbar = true;
  }
}
</script>

<style scoped>
#index {
  padding: 0 10%;
}
</style>
