import { useRouter } from 'next/router';
import useSWR, { useSWRConfig } from 'swr';

import instance from '../api/instance';
import { add, removeItem, updateItem } from '../api/categories';
// import { ProductType } from '../models/Products';
const useCategories = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, mutate } = useSWR(`/categories`);
  const create = async (item: any) => {
    const categories = await add(item);
    mutate([...data, categories]);

  };

  const update = async (id: any, products: any) => {
    const updateData = await updateItem(id, products);
    const categories = data.map((item: any) =>
      item.id == id ? updateData : item
    );
    mutate(categories);
  };
  const remove = async (id: any) => {
    await removeItem(id);
    const categories = data.filter((item: any) => item.id != id);
    mutate(categories);
  };


  return {
    data,
    error,
    create,
    remove,
    update,
  };
};

export default useCategories;
