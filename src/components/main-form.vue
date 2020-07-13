<template>
  <div id="main-form">
    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="values.name"
        color="success"
        :rules="rules.name"
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="values.email"
        color="success"
        :rules="rules.email"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="values.code"
        color="success"
        :rules="rules.code"
        @keydown="errors.code = ''"
        :error-messages="errors.code"
        label="Code"
      ></v-text-field>
      <v-checkbox
        v-model="values.agreement"
        color="success"
        :ripple="false"
        :rules="rules.agreement"
        ><span slot="label"
          >I agree with the <a>processing of personal data</a>.</span
        ></v-checkbox
      >
      <v-btn color="success" @click="submit" class="mt-4" :disabled="!valid">
        Submit
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Mixins } from 'vue-mixin-decorator';

import ValidationMixin from '@/mixins/validation.mixin';
import IValues from '@/interfaces/response.interface';
type VForm = Vue & { validate: () => boolean } & { reset: () => void };

@Component({
  name: 'MainForm',
})
export default class MainForm extends Mixins<ValidationMixin>(ValidationMixin) {
  values: IValues = {
    name: '',
    email: '',
    code: '',
    agreement: false,
  };
  submit() {
    if (!(this.$refs.form as VForm).validate()) return;
    if (!this.validateCode(this.values.code)) return;
    this.$emit('submitted', { ...this.values });
    (this.$refs.form as VForm).reset();
  }
}
</script>

<style scoped>
#main-form {
  width: 350px;
}
@media only screen and (max-width: 400px) {
  #main-form {
    width: 100%;
  }
}
</style>
