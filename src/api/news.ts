
import instance from './instance';

export const add = (products: any) => {
  return instance.post('/news', products);
};
export const removeItem = (id: any) => {
  return instance.delete(`/news/${id}`);
};
export const updateItem = (id: any, products: any) => {
  return instance.put(`/news/${id}`, products);
};