import { apiPostHome } from './Api';

//测试get接口
export function postHome(data: object) {
  return new Promise(function(resolve, reject) {
    apiPostHome(data)
      .then(res => {
        resolve(res);
      })
      .catch(res => {
        reject(res);
      });
  });
}
