/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import useCategories from '../../hook/use-categories';

type Props = {};

const Feature = (props: Props) => {
  const color = typeof window !== 'undefined' ? 'red' : 'blue';
  const { data: category, error } = useCategories();
  if (!category) return <div>Loading...</div>;
  if (error) return <div>Failed to loading</div>;
  return (
    <div className="owlnav_cate clearfix">
      <div className="owl_col_section owl_category slickcategory slick_margin slick-initialized slick-slider">
        <div aria-live="polite" className="slick-list draggable ">
          <div
            className="slick-track"
            style={{
              opacity: 1,
              width: 1140,
              transform: 'translate3d(0px, 0px, 0px)',
            }}
            role={color}
          >
            {category.map((cate: any) => (
              <div
                className="slick-slide slick-current slick-active"
                aria-hidden="false"
                style={{ width: 160 }}
                key={cate._id}
              >
                <div>
                  <div
                    className="item_category"
                    style={{ width: '100%', display: 'inline-block' }}
                  >
                    <div className="item">
                      <div className="thumb_s">
                        <Link href={`/cateproduct/${cate._id}`}>
                          <a className="image" title={cate.name} tabIndex={0}>
                            <img
                              className="image_cate_thumb lazyload loaded"
                              src={cate.image}
                              data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct1.png?v=1577470247840"
                              alt="Điện tử và công nghệ"
                              data-was-processed="true"
                            />
                          </a>
                        </Link>
                        <div className="info">
                          <h4 className="title_cate_">
                            <a
                              href="/dien-tu-va-cong-nghe"
                              title={cate.name}
                              tabIndex={0}
                            >
                              {cate.name}
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
