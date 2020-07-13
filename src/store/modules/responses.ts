import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import IValues from '@/interfaces/values.interface';
@Module({ namespaced: true })
export default class ResponsesModule extends VuexModule {
  responses: IValues[] = [];

  get data() {
    return this.responses;
  }

  @Mutation
  setResponses(responses: IValues[]) {
    if (!responses) return;
    this.responses = responses;
  }

  @Mutation
  addResponse(values: IValues): void {
    this.responses.push(values);
  }

  @Action({ rawError: true, commit: 'addResponse' })
  saveResponse(response: IValues) {
    const responses: IValues[] = this.responses.concat(response);
    localStorage.setItem('responses', JSON.stringify(responses));
    return response;
  }

  @Action({ rawError: true, commit: 'setReponses' })
  fetchResponses() {
    const responses: IValues[] = localStorage.getItem('responses')?.length
      ? JSON.parse(localStorage.getItem('responses')!)
      : null;
    return responses;
  }
}
