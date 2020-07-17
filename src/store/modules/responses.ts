import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import Response from '@/interfaces/response.interface';
@Module({ namespaced: true })
export default class ResponsesModule extends VuexModule {
  responses: Response[] = [];

  get data() {
    return this.responses;
  }

  @Mutation
  setResponses(responses: Response[]) {
    if (!responses) return;
    this.responses = responses;
  }

  @Mutation
  addResponse(values: Response) {
    this.responses.push(values);
  }

  @Action({ rawError: true, commit: 'addResponse' })
  saveResponse(response: Response): Response {
    const responses: Response[] = this.responses.concat(response);
    localStorage.setItem('responses', JSON.stringify(responses));
    return response;
  }

  @Action({ rawError: true, commit: 'setResponses' })
  fetchResponses(): Response[] | null {
    if (this.responses.length) return null;
    return localStorage.getItem('responses')
      ? JSON.parse(localStorage.getItem('responses')!)
      : null;
  }
}
