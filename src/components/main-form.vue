<template>
  <div id="main-form">
    <v-form ref="form">
      <v-text-field
        v-model="values.name"
        :rules="rules.name"
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="values.email"
        :rules="rules.email"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="values.code"
        :rules="rules.code"
        label="Code"
      ></v-text-field>
      <v-checkbox
        v-model="values.agreement"
        color="success"
        :ripple="false"
        :rules="rules.agreement"
        label="Do you agree?"
      ></v-checkbox>
      <v-btn color="success" @click="submit" class="mt-4">
        Submit
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Mixins } from 'vue-mixin-decorator';

import ValidationMixin from '@/mixins/validation.mixin';
import IValues from '@/interfaces/values.interface.ts';
type VForm = Vue & { validate: () => boolean };

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
    if (!this.validateCode()) return;
    this.$emit('submitted', this.values);
  }
}
</script>

<style>
#main-form {
  width: 300px;
}
</style>
