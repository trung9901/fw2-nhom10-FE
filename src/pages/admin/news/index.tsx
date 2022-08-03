/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { useForm } from 'react-hook-form';
import AdminLayout from '../../../components/Layout/admin';

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
import useNews from '../../../hook/use-news';
type Props = {};
type FormData = {
  title: String;

  image: String;

  content: String;
};
const NewsList = (props: Props) => {
  const { data, error, create, remove, update } = useNews();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalOpen2, setModalOpen2] = React.useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    if (data) {
      toast.success('Thêm bài viết thành công !');
      create(data);
      reset();
      setModalOpen(!modalOpen);
    }
  });

  const onSubmit2 = handleSubmit((data2) => {
    if (data2) {
      toast.success('Cập nhật bài viết thành công');

      update(idCategory, data2);

      setModalOpen2(!modalOpen2);

      reset();
    }
  });

  const onUpdate = (id: any) => {
    setModalOpen2(!modalOpen2);
    setIdCategory(id);
  };
  const onDelete = (id: any) => {
    if (confirm('Are you sure you want to delete')) {
      toast.success('Xoá bài viết thành công');
      remove(id);
    } else {
      toast.error('Xoá bài viết thất bại');
    }
  };
  const [idCategory, setIdCategory] = React.useState();
  const { data: category } = useSWR(idCategory ? `/news/${idCategory}` : null);

  React.useEffect(() => {
    console.log(idCategory);

    reset(category);
  }, [idCategory, category, reset]);

  const getDays = (data: any) => {
    const datas = new Date(data);
    return datas.toLocaleDateString('pt-PT');
  };

  return (
    <div>
      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <strong className="card-title">News List</strong>
                </div>
                <div className="table-stats order-table ov-h">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th className="serial">#</th>
                        <th className="avatar">Image</th>

                        <th>Title</th>
                        <th>Content</th>
                        <th>Creat At</th>
                        <th>Updated At</th>
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
                                Thêm bài viết
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
                                    Title
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Tiêu đề"
                                    {...register('title', {
                                      required: 'Không được để trống !',

                                      maxLength: {
                                        value: 20,
                                        message: 'Tối đa 20 kí tự !',
                                      },
                                    })}
                                  />
                                  <div className="text-danger">
                                    {errors.title?.message}
                                  </div>
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlInput1">
                                    Content
                                  </label>
                                  <textarea
                                    className="form-control"
                                    placeholder="Nội dung"
                                    {...register('content')}
                                  ></textarea>
                                  <div className="text-danger">
                                    {errors.content?.message}
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
                                <Button
                                  color="primary"
                                  type="submit"
                                  className="rounded"
                                >
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
                              <a>
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
                            <span className="name">{item.title}</span>{' '}
                          </td>
                          <td>
                            {' '}
                            <span className="name">{item.content}</span>{' '}
                          </td>
                          <td>
                            <span className="">{getDays(item.createdAt)} </span>
                          </td>
                          <td>
                            <span className="">{getDays(item.updatedAt)}</span>
                          </td>
                          <td>
                            <span className="">
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
                                    onClick={() => onUpdate(item._id)}
                                  >
                                    <FontAwesomeIcon icon={faFileAlt} />
                                  </button>
                                </div>
                              </div>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>{' '}
                {/* /.table-stats */}
                <Modal
                  toggle={() => setModalOpen2(!modalOpen2)}
                  isOpen={modalOpen2}
                >
                  <div className=" modal-header d-flex">
                    <h5 className=" modal-title" id="exampleModalLabel">
                      Cập nhật danh mục
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
                  <form onSubmit={onSubmit2}>
                    <ModalBody>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">image</label>
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
                        <label htmlFor="exampleFormControlInput1">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Tiêu đề"
                          {...register('title', {
                            required: 'Không được để trống !',

                            maxLength: {
                              value: 20,
                              message: 'Tối đa 20 kí tự !',
                            },
                          })}
                        />
                        <div className="text-danger">
                          {errors.title?.message}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">
                          Content
                        </label>
                        <textarea
                          className="form-control"
                          placeholder="Nội dung"
                          {...register('content')}
                        ></textarea>
                        <div className="text-danger">
                          {errors.content?.message}
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="secondary"
                        type="button"
                        onClick={() => setModalOpen2(!modalOpen2)}
                        className="rounded"
                      >
                        Đóng
                      </Button>
                      <Button color="primary" type="submit" className="rounded">
                        Cập nhật
                      </Button>
                    </ModalFooter>
                  </form>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        {/* .animated */}
      </div>
    </div>
  );
};

NewsList.Layout = AdminLayout;

export default NewsList;
