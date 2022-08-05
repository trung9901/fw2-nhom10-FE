import React from 'react'
import useCategories from '../../hook/use-categories';
import Link from 'next/link';
type Props = {}

const CateProducts = (props: Props) => {
    const { data: category, error } = useCategories();
    if (!category) return <div>Loading...</div>;
    if (error) return <div>Failed to loading</div>;
    return (
        <div
            aria-live="polite"
            className="slick-list draggable"
        >
            <div
                className="slick-track"
                role="listbox"
                style={{
                    opacity: 1,
                    width: 2076,
                    transform: 'translate3d(0px, 0px, 0px)',
                }}

            >
                {category.map((cate: any) => (

                    <div
                        className="item_category slick-slide slick-current slick-active"

                        style={{ width: 143 }}
                        key={cate._id}
                    >
                        <div className="item">
                            <div className="thumb_s">
                                <Link href={`/cateproduct/${cate._id}`} >
                                    <a
                                        className="image"

                                        title={cate.name}
                                        tabIndex={0}
                                    >
                                        <img
                                            className="lazyload loaded"
                                            src={cate.image}
                                            data-src="//bizweb.dktcdn.net/thumb/compact/100/374/880/collections/ct1.png?v=1577470247840"
                                            alt="Điện tử và công nghệ"
                                            data-was-processed="true"
                                        />
                                    </a>
                                </Link>
                                <div className="info">
                                    <h4 className="title_cate_">
                                        <Link href={`/cateproduct/${cate._id}`}>
                                            <a
                                            >
                                                {cate.name}
                                            </a>
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default CateProducts