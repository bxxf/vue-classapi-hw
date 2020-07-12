import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import IValues from '@/interfaces/values.interface';
@Module({ namespaced: true })
export default class ResponsesModule extends VuexModule {
  responses: IValues[] = [];

  get data() {
    return this.responses;
  }

  @Mutation
  addResponse(values: IValues): void {
    this.responses.push(values);
  }

  @Action({ rawError: true, commit: 'addResponse' })
  saveResponse(response: IValues) {
    return response;
  }
}
