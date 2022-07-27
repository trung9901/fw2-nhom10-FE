/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../components/Layout/admin';
import { ProductType } from '../../../models/Products';
import useProducts from './../../../hook/use-products';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faFileAlt,
  faAdd,
} from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';
//
type Props = {
  products: ProductType[];
};
type FormData = {
  name: String;
  price: Number;
  image: String;
  quantity: Number;
  status: Number;
  description: String;
  category: String;
};

const ProductList = (props: Props) => {
  const { data, error, create, remove, update } = useProducts();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalOpen2, setModalOpen2] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => create(data));
  console.log(data);
  return (
    <div>
      <div className="content ">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">Product List</strong>
              </div>
              <div className="table-stats order-table ov-h">
                <table className="table ">
                  <thead>
                    <tr>
                      <th className="serial">#</th>
                      <th className="avatar">Image</th>

                      <th>Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th className="">Action</th>
                      <th>
                        <div className="">
                          <button
                            className="btn btn-success rounded"
                            onClick={() => setModalOpen(!modalOpen)}
                          >
                            <span className="mx-1">
                              <FontAwesomeIcon icon={faAdd} />
                            </span>
                            <span>New</span>
                          </button>{' '}
                        </div>

                        <Modal
                          toggle={() => setModalOpen(!modalOpen)}
                          isOpen={modalOpen}
                        >
                          <div className=" modal-header d-flex">
                            <h5 className=" modal-title" id="exampleModalLabel">
                              Thêm sản phẩm
                            </h5>
                            <button
                              aria-label="Close"
                              className=" close"
                              type="button"
                              onClick={() => setModalOpen(!modalOpen)}
                            >
                              <span aria-hidden={true}>×</span>
                            </button>
                          </div>
                          <form action="" onSubmit={onSubmit}>
                            <ModalBody>
                              {' '}
                              <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name"
                                  placeholder="Tên sản phẩm"
                                  {...register('name')}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">
                                  image
                                </label>
                                <input
                                  type="text"
                                  className="form-control-file"
                                  id="img"
                                  {...register('image')}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Price</label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="price"
                                  placeholder="Giá"
                                  {...register('price')}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Quantity</label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id="quantity"
                                  placeholder="Số lượng"
                                  {...register('quantity')}
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Status</label>

                                <select {...register('status')}>
                                  <option selected>
                                    --Please choose an option--
                                  </option>
                                  <option value={1}>Còn hàng</option>
                                  <option value={0}>Hết hàng</option>
                                </select>
                              </div>
                              {/* <div className="from-group">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  {...register('category')}
                                >
                                  <option selected>Danh Muc</option>
                                  {props.categories?.map((item, index) => (
                                    <option value={item._id}>
                                      {item.name}
                                    </option>
                                  ))}
                                </select>
                              </div> */}
                              <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">
                                  Description
                                </label>
                                <textarea
                                  className="form-control"
                                  id="description"
                                  {...register('description')}
                                />
                              </div>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="secondary"
                                type="button"
                                onClick={() => setModalOpen(!modalOpen)}
                              >
                                Đóng
                              </Button>
                              <Button
                                color="primary"
                                type="submit"
                                onClick={() => setModalOpen(!modalOpen)}
                              >
                                Thêm sản phẩm
                              </Button>
                            </ModalFooter>
                          </form>
                        </Modal>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item: any, index: number) => (
                      <tr key={index}>
                        <td className="serial">{index + 1}</td>
                        <td className="avatar">
                          <div className="">
                            <a href="#">
                              <Image
                                className=""
                                src={item.image}
                                width={80}
                                height={80}
                                priority
                              />
                            </a>
                          </div>
                        </td>

                        <td>
                          {' '}
                          <span className="name">{item.name}</span>{' '}
                        </td>
                        <td>
                          {' '}
                          <span className="product">iMax</span>{' '}
                        </td>
                        <td>
                          <span className="">{item.price} $</span>
                        </td>
                        <td>
                          <span className="count">{item.quantity}</span>
                        </td>
                        <td>
                          <span className="">{item.description}</span>
                        </td>
                        <td>
                          <span className="badge badge-complete">Complete</span>
                        </td>
                        <td>
                          <div className="d-flex">
                            <div className="col">
                              <button
                                type="button"
                                className="btn btn-primary btn-sm  rounded "
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      'Are you sure you want to delete'
                                    )
                                  ) {
                                    remove(item._id);
                                  }
                                }}
                              >
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </button>
                            </div>
                            {/* -------------------------------------------- */}
                            <div className="col">
                              <button
                                type="button"
                                className="btn btn-success btn-sm  rounded"
                                onClick={() => setModalOpen2(!modalOpen2)}
                              >
                                <FontAwesomeIcon icon={faFileAlt} />
                              </button>
                              <Modal
                                toggle={() => setModalOpen2(!modalOpen2)}
                                isOpen={modalOpen2}
                              >
                                <div className=" modal-header">
                                  <h5
                                    className=" modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Modal title
                                  </h5>
                                  <button
                                    aria-label="Close"
                                    className=" close"
                                    type="button"
                                    onClick={() => setModalOpen2(!modalOpen2)}
                                  >
                                    <span aria-hidden={true}>×</span>
                                  </button>
                                </div>
                                <ModalBody>...</ModalBody>
                                <ModalFooter>
                                  <Button
                                    color="secondary"
                                    type="button"
                                    onClick={() => setModalOpen2(!modalOpen2)}
                                  >
                                    Close
                                  </Button>
                                  <Button color="primary" type="button">
                                    Save changes
                                  </Button>
                                </ModalFooter>
                              </Modal>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
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
