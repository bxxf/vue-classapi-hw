<template>
  <div id="data">
    <h1>Data</h1>
    <div class="table-wrapper">
      <table class="mt-8" v-if="data.length">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Code</th>
          <th>Agreement</th>
        </tr>
        <tr v-for="(response, index) in data" :key="index">
          <td>{{ response.name || 'unspecified' }}</td>
          <td>{{ response.email || 'unspecified' }}</td>
          <td>{{ response.code || 'unspecified' }}</td>
          <td>{{ response.agreement || 'unspecified' }}</td>
        </tr>
      </table>

      <p class="mt-8" v-else>There is not any data yet.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { namespace } from 'vuex-class';

import IValues from '@/interfaces/response.interface';
const responseStore = namespace('responses');

@Component({
  name: 'Data',
})
export default class Data extends Vue {
  @responseStore.Getter
  data!: IValues[];
}
</script>

<style lang="scss" scoped>
#data {
  padding: 0 10%;
  table {
    width: 100%;
    white-space: nowrap;
  }
  .table-wrapper {
    overflow-x: auto;
  }
  th,
  td {
    padding-right: 10px;
    text-align: left;
    &:last-child {
      padding-right: 0;
    }
  }
}
</style>
