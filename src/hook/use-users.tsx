import { useRouter } from 'next/router';
import useSWR, { useSWRConfig } from 'swr';
import instance from '../api/instance';
import {updateItem,removeItem} from "../api/user"
// import { ProductType } from '../models/Products';
const useUsers = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, mutate } = useSWR(`/users`);

  const update = async (id: any, products: any) => {
    const updateData = await updateItem(id, products);
    const users = data.map((item: any) =>
      item.id == id ? updateData : item
    );
    mutate(users);
  };
  const remove = async (id: any) => {
    await removeItem(id);
    const users = data.filter((item: any) => item.id != id);
    mutate(users);
  };

  return {
    data,
    error,
    remove,
    update,
  };
};

export default useUsers;
