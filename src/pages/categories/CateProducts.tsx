import React from 'react'
import useCategories from '../../hook/use-categories';

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
                {category.map((cate: any, index: any) => (

                    <div
                        className="item_category slick-slide slick-current slick-active"
                        data-slick-index={0}
                        aria-hidden="false"
                        tabIndex={-1}
                        role="option"
                        aria-describedby="slick-slide00"
                        style={{ width: 143 }}
                        key={index + 1}
                    >
                        <div className="item">
                            <div className="thumb_s">
                                <a
                                    className="image"
                                    href="/dien-tu-va-cong-nghe"
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
                                <div className="info">
                                    <h4 className="title_cate_">
                                        <a
                                            href="/dien-tu-va-cong-nghe"
                                            title="Điện tử và công nghệ"
                                            tabIndex={0}
                                        >
                                            {cate.name}
                                        </a>
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