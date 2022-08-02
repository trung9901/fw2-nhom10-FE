import React from 'react'
import useCategories from '../../hook/use-categories'

import useProducts from '../../hook/use-products'
import { CategoryType } from '../../models/Category'
import  useSWR  from 'swr';

type Props = {}

const CategoryHead = (props: Props) => {
    const [data, setData] = React.useState(null)
    React.useEffect(() => {
        fetch('http://localhost:8000/api/categories')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
   
          })
      }, [])
    


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
                {data?.map((item: CategoryType, index: any) => (
                    <ul className="ul_menu site-nav-vetical" key={index + 1}>
                        <li className="nav_item lev-1 lv1 li_check">
                            <a href="/do-gia-dung" title="Đồ gia dụng">
                                {item.name}
                            </a>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default CategoryHead