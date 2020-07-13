<template>
  <v-layout id="index" column justify-center align-center>
    <div>
      <h1>Form</h1>
      <main-form @submitted="save" />
    </div>
    <v-snackbar v-model="snackbar.show" :timeout="10000">
      This user has already sent {{ snackbar.count }}
      {{ snackbar.count === 1 ? 'code' : 'codes' }}.
    </v-snackbar>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import MainForm from '@/components/main-form.vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';

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

  snackbar = {
    show: false,
    count: 0,
  };

  save(values: Response) {
    this.saveResponse(values);
    this.snackbar = {
      show: true,
      count: countResponses(values.email, this.data),
    };
  }
}
</script>

<style scoped>
#index {
  padding: 0 10%;
}
</style>
