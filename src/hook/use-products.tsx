import { useRouter } from 'next/router';
import useSWR, { useSWRConfig } from 'swr';
import instance from '../api/instance';
import { add, removeItem, updateItem } from '../api/products';


const useProducts = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, mutate } = useSWR(`/products`);
  const create = async (item: any) => {
    const product = await add(item);
    mutate([...data, product]);
  };

  const update = async (id: any, products: any) => {
    const updateData = await updateItem(id, products);
    const product = data.map((item: any) =>
      item.id == id ? updateData : item
    );
    mutate(product);
  };

  const remove = async (id: any) => {
    await removeItem(id);
    const newProducts = data.filter((item: any) => item.id != id);
    mutate(newProducts);
  };
  return {
    data,
    error,
    create,
    remove,
    update,
  };
};

export default useProducts;
