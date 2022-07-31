/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */


import React from 'react';
import { useForm } from 'react-hook-form';
import AdminLayout from '../../../components/Layout/admin';
import useCategories from './../../../hook/use-categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faFileAlt,
  faAdd,
  faFileUpload,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import useSWR from 'swr';
type Props = {};
type FormData = {
  name: String;
  image: String;
};
const CategoryList = (props: Props) => {
  const { data, error, create, remove, update } = useCategories();

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalOpen2, setModalOpen2] = React.useState(false);

  const onSubmit = handleSubmit((data) => {
    if (data) {
      toast.success('Thêm danh mục thành công !')
      create(data)
      reset()
      setModalOpen(!modalOpen)
    }
  });
  return (
    <div>
      <div className="content">
        <div className="animated fadeIn">
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
                        <th className="avatar">Image</th>

                        <th>Name</th>

                        <th>Actions</th>
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
                          >
                            <div className=" modal-header d-flex">
                              <h5
                                className=" modal-title"
                                id="exampleModalLabel"
                              >
                                Thêm danh mục
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
                            <form onSubmit={onSubmit}>
                              <ModalBody>
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
                                  <label htmlFor="exampleFormControlInput1">
                                    Name
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Tên danh mục"
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
                              </ModalBody>
                              <ModalFooter>
                                <Button
                                  color="secondary"
                                  type="button"
                                  onClick={() => setModalOpen(!modalOpen)}
                                  className="rounded"
                                >
                                  Đóng
                                </Button>
                                <Button color="primary" type="submit" className="rounded">
                                  Thêm mới
                                </Button>
                              </ModalFooter>
                            </form>
                          </Modal>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((item: any, index: any) => (
                        <tr key={index}>
                          <td className="serial">{index + 1}</td>
                          <td className="avatar">
                            <div className="round-img">
                              <a >
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
                            <span className=""></span>
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
        {/* .animated */}
      </div>
    </div>
  );
};
CategoryList.Layout = AdminLayout;
export default CategoryList;
