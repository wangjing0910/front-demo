import { HttpService } from '../Http';

export const apiPostHome = (p: object) => new HttpService().post('/api/v1/combine', p);
