/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../components/Layout/admin';

type Props = {};

const ProductList = (props: Props) => {
  return (
    <div>
      <div className="content ">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">Custom Table</strong>
              </div>
              <div className="table-stats order-table ov-h">
                <table className="table ">
                  <thead>
                    <tr>
                      <th className="serial">#</th>
                      <th className="avatar">Avatar</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="serial">1.</td>
                      <td className="avatar">
                        <div className="">
                          <a href="#">
                            <Image
                              className=""
                              src="https://picsum.photos/200"
                              width={80}
                              height={80}
                              priority
                            />
                          </a>
                        </div>
                      </td>
                      <td> #5469 </td>
                      <td>
                        {' '}
                        <span className="name">Louis Stanley</span>{' '}
                      </td>
                      <td>
                        {' '}
                        <span className="product">iMax</span>{' '}
                      </td>
                      <td>
                        <span className="count">231</span>
                      </td>
                      <td>
                        <span className="badge badge-complete">Complete</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial">2.</td>
                      <td className="avatar">
                        <div className="">
                          <a href="#">
                            <Image
                              className=""
                              src="https://picsum.photos/id/1/200"
                              width={80}
                              height={80}
                            />
                          </a>
                        </div>
                      </td>
                      <td> #5468 </td>
                      <td>
                        {' '}
                        <span className="name">Gregory Dixon</span>{' '}
                      </td>
                      <td>
                        {' '}
                        <span className="product">iPad</span>{' '}
                      </td>
                      <td>
                        <span className="count">250</span>
                      </td>
                      <td>
                        <span className="badge badge-complete">Complete</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial">3.</td>
                      <td className="avatar">
                        <div className="round-img">
                          <a href="#">
                            <img
                              className="rounded-circle"
                              src="images/avatar/3.jpg"
                              alt
                            />
                          </a>
                        </div>
                      </td>
                      <td> #5467 </td>
                      <td>
                        {' '}
                        <span className="name">Catherine Dixon</span>{' '}
                      </td>
                      <td>
                        {' '}
                        <span className="product">SSD</span>{' '}
                      </td>
                      <td>
                        <span className="count">250</span>
                      </td>
                      <td>
                        <span className="badge badge-complete">Complete</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="serial">4.</td>
                      <td className="avatar">
                        <div className="round-img">
                          <a href="#">
                            <img
                              className="rounded-circle"
                              src="images/avatar/4.jpg"
                              alt
                            />
                          </a>
                        </div>
                      </td>
                      <td> #5466 </td>
                      <td>
                        {' '}
                        <span className="name">Mary Silva</span>{' '}
                      </td>
                      <td>
                        {' '}
                        <span className="product">Magic Mouse</span>{' '}
                      </td>
                      <td>
                        <span className="count">250</span>
                      </td>
                      <td>
                        <span className="badge badge-pending">Pending</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>{' '}
              {/* /.table-stats */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ProductList.Layout = AdminLayout;
export default ProductList;
