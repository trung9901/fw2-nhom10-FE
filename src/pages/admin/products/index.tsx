/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../components/Layout/admin';
import { ProductType } from '../../../models/Products';
import useProducts from './../../../hook/use-products';

//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faFileAlt,
  faAdd,
  faFileUpload,
} from '@fortawesome/free-solid-svg-icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
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
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const [modalOpen, setModalOpen] = React.useState(false);
  
  const onSubmit = handleSubmit((data) => {
    if (data) {
      toast.success('Thêm sản phẩm thành công')
      create(data);
      
      setModalOpen(!modalOpen)
      reset()
    }
  });

  const onDelete = (id: any) => {
    if (window.confirm('Are you sure you want to delete')) {
      toast.success('Xoá sản phẩm thành công !')
      remove(id);
    }else{
      toast.error('Xoá sản phẩm thất bại !')
    }
  };
  const getDays = (data: any) => {
    const datas = new Date(data);
    return datas.toLocaleDateString('pt-PT');
  };

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
                      <th>Creat At</th>
                      <th>Updated At</th>
                      <th>Action</th>
                      <th>
                        <Button
                          color="warning"
                          type="button"
                          onClick={() => setModalOpen(!modalOpen)}
                          className="border rounded text-white"
                        >
                          <FontAwesomeIcon icon={faFileUpload} />
                        </Button>

                        <Modal
                          toggle={() => setModalOpen(!modalOpen)}
                          isOpen={modalOpen}
                          animation={false}
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
                                  {...register('name', {
                                    required: 'Không được để trống !',
                                    minLength: {
                                      value: 5,
                                      message: 'Tối thiểu 5 kí tự !',
                                    },
                                    maxLength: {
                                      value: 20,
                                      message: 'Tối đa 20 kí tự !',
                                    },
                                  })}
                                />
                                <div className="text-danger">
                                  {errors.name?.message}
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleFormControlFile1">
                                  image
                                </label>
                                <input
                                  type="text"
                                  className="form-control-file"
                                  id="img"
                                  {...register('image', {
                                    required: 'Không được để trống !',
                                  })}
                                  value="https://picsum.photos/200"
                                />
                                <div className="text-danger">
                                  {errors.image?.message}
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Price</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="price"
                                  placeholder="Giá"
                                  {...register('price', {
                                    required: 'Không được để trống !',
                                    pattern: {
                                      value: /\d+/,
                                      message: 'Kí tự nhập vào phải là số !',
                                    },
                                  })}
                                />
                                <div className="text-danger">
                                  {errors.price?.message}
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Quantity</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="quantity"
                                  placeholder="Số lượng"
                                  {...register('quantity', {
                                    required: 'Không được để trống !',
                                    pattern: {
                                      value: /\d+/,
                                      message: 'Kí tự nhập vào phải là số !',
                                    },
                                  })}
                                />
                                <div className="text-danger">
                                  {errors.quantity?.message}
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="">Status</label>

                                <select {...register('status')}>
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
                                  placeholder="Mô tả"
                                  {...register('description')}
                                />
                              </div>
                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="secondary"
                                type="button"
                                className='rounded'
                                onClick={() => setModalOpen(!modalOpen)}
                              >
                                Đóng
                              </Button>
                              <Button
                                color="primary"
                                type="submit"
                                className='rounded'
                                // onClick={() => {
                                  
                                // }}
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
                                src={item?.image}
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
                          {item.status == 1 ? (
                            <span className="badge badge-complete">
                              Còn hàng
                            </span>
                          ) : (
                            <span className="badge badge-pending">
                              Hết hàng
                            </span>
                          )}

                          {/* <span className="badge badge-complete">Complete</span> */}
                        </td>
                        <td>
                          <span className="">{getDays(item.createdAt)} </span>
                        </td>
                        <td>
                          <span className="">{getDays(item.updatedAt)}</span>
                        </td>
                        <td>
                          <div className="d-flex justify-content-evenly">
                            <div className="">
                              <button
                                type="button"
                                className="btn btn-primary btn-sm  rounded "
                                onClick={() => onDelete(item._id)}
                              >
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </button>
                            </div>
                            {/* -------------------------------------------- */}
                            <div className="mx-1">
                              <button
                                type="button"
                                className="btn btn-success btn-sm  rounded"
                              >
                                <FontAwesomeIcon icon={faFileAlt} />
                              </button>
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
