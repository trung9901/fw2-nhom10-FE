
import instance from './instance';

export const add = (products: any) => {
  return instance.post('/products', products);
};
export const removeItem = (id: any) => {
  return instance.delete(`/products/${id}`);
};
export const updateItem = (id: any, products: any) => {
  return instance.put(`/products/${id}`, products);
};
export const search = (query: any) => {
  return instance.post(`search?q=${query}`)
}