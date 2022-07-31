
import instance from './instance';
export const add = (categories: any) => {
  return instance.post('/categories', categories);
};
export const removeItem = (id: any) => {
  return instance.delete(`/categories/${id}`);
};
export const updateItem = (id: any, categories: any) => {
  return instance.put(`/categories/${id}`, categories);
};