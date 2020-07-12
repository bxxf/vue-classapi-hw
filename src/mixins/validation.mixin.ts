import Vue from 'vue';
import { Mixin } from 'vue-mixin-decorator';

@Mixin
export default class ValidationMixin extends Vue {
  rules = {
    name: [(v: string) => !!v || 'Name is required'],
    email: [
      (v: string) => !!v || 'Email is required',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    code: [(v: string) => !!v || 'Code is required'],
    agreement: [(v: boolean) => v || 'You have to agree'],
  };

  errors = {
    code: undefined,
  };

  validateCode(): boolean {
    return true;
  }
}
