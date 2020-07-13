import Vue from 'vue';
import { namespace } from 'vuex-class';
import { Mixin } from 'vue-mixin-decorator';

import IValues from '@/interfaces/response.interface';
const responseStore = namespace('responses');
@Mixin
export default class ValidationMixin extends Vue {
  @responseStore.Getter
  data!: IValues[];

  valid = true;
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
    code: undefined as string | undefined,
  };

  validateCode(code: string): boolean {
    const exists = this.data.some((response) => response.code === code);
    if (exists) this.errors.code = 'This code is already used';
    return !exists;
  }
}
