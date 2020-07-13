import Response from '@/interfaces/response.interface';
export const countResponses = (email: string, responses: Response[] = []) => {
  return responses.filter((response) => response.email === email).length;
};
