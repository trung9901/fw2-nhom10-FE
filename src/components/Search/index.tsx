import { type } from 'os';
import React from 'react';

import { SubmitHandler, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
type Props = {};
type FormData = {
  query: string;
};
const SearchComponent = (props: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    router.push(`/search?q=${data.query}`);
    reset()
  };
  return (
    <div>
      {' '}
      <form onSubmit={handleSubmit(onSubmit)}
        className="input-group search-bar"
       
      >
        <div className="collection-selector hidden-xs hidden-sm">
          <div className="search_text">Chọn danh mục</div>
          <div
            id="search_info"
            className="list_search"
            style={{ display: 'none' }}
          >
            <div
              className="search_item"
              data-coll-id={2099463}
              title="Phòng tắm"
            >
              Phòng tắm
            </div>
            <div
              className="search_item"
              data-coll-id={2099462}
              title="Phòng ngủ"
            >
              Phòng ngủ
            </div>
            <div
              className="search_item"
              data-coll-id={2099461}
              title="Phòng bếp"
            >
              Phòng bếp
            </div>
            <div
              className="search_item"
              data-coll-id={2099460}
              title="Phòng khách"
            >
              Phòng khách
            </div>
            <div
              className="search_item"
              data-coll-id={2099416}
              title="Cho thú cưng"
            >
              Cho thú cưng
            </div>
            <div
              className="search_item"
              data-coll-id={2099415}
              title="Đồ gia dụng"
            >
              Đồ gia dụng
            </div>
            <div
              className="search_item"
              data-coll-id={2099414}
              title="Phụ tùng xe hơi"
            >
              Phụ tùng xe hơi
            </div>
            <div
              className="search_item"
              data-coll-id={2099413}
              title="Nội thất, kiến trúc"
            >
              Nội thất, kiến trúc
            </div>
            <div
              className="search_item"
              data-coll-id={2099412}
              title="Thể thao, du lịch"
            >
              Thể thao, du lịch
            </div>
            <div
              className="search_item"
              data-coll-id={2099411}
              title="Đồ chơi và game"
            >
              Đồ chơi và game
            </div>
            <div
              className="search_item"
              data-coll-id={2099410}
              title="Thế giới nước hoa"
            >
              Thế giới nước hoa
            </div>
            <div
              className="search_item"
              data-coll-id={2099409}
              title="Trang điểm"
            >
              Trang điểm
            </div>
            <div
              className="search_item"
              data-coll-id={2099408}
              title="Chăm sóc da"
            >
              Chăm sóc da
            </div>
            <div
              className="search_item"
              data-coll-id={2099407}
              title="Chăm sóc tóc"
            >
              Chăm sóc tóc
            </div>
            <div className="search_item" data-coll-id={2099406} title="Làm đẹp">
              Làm đẹp
            </div>
            <div
              className="search_item"
              data-coll-id={2099405}
              title="Mẹ, bé & đồ chơi"
            >
              Mẹ, bé &amp; đồ chơi
            </div>
            <div
              className="search_item"
              data-coll-id={2099404}
              title="Trang sức nữ"
            >
              Trang sức nữ
            </div>
            <div
              className="search_item"
              data-coll-id={2099403}
              title="Túi ví nữ"
            >
              Túi ví nữ
            </div>
            <div
              className="search_item"
              data-coll-id={2099402}
              title="Giày dép nữ"
            >
              Giày dép nữ
            </div>
            <div
              className="search_item"
              data-coll-id={2099401}
              title="Trang phục nữ"
            >
              Trang phục nữ
            </div>
            <div className="liner_search" />
            <div className="search_item active" data-coll-id={0}>
              Tất cả
            </div>
          </div>
        </div>
        <input
          type="search"
          {...register('query')}
          placeholder="Tìm kiếm... "
          className="input-group-field st-default-search-input search-text"
          autoComplete="off"
          required
        />
        <span className="input-group-btn">
          <button className="btn icon-fallback-text">
            <i className="fa fa-search" />
          </button>
        </span>
      </form>
    </div>
  );
};

export default SearchComponent;
