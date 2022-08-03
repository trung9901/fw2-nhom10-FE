import React from 'react';
import useCategories from '../../hook/use-categories';

import useProducts from '../../hook/use-products';
import { CategoryType } from '../../models/Category';
import useSWR from 'swr';
import Link from 'next/link';

type Props = {};

const CategoryHead = (props: Props) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:8000/api/categories')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="menu_mega">
      <div className="title_menu">
        <span className="title_">Danh mục sản phẩm</span>
        <span className="nav_button">
          <span>
            <i className="fa fa-align-left" aria-hidden="true" />
          </span>
        </span>
      </div>
      <div className="list_menu_header menu_all_site col-lg-3 col-md-3">
        {data?.map((item: CategoryType) => (
          <ul className="ul_menu site-nav-vetical" key={item._id}>
            <li className="nav_item lev-1 lv1 li_check">
              <Link href={`/cateproduct/${item._id}`}>
                <a>{item.name}</a>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CategoryHead;
