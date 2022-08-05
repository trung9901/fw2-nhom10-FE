import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import AdminLayout from '../../../components/Layout/admin';
import Layout from './../../../components/Layout/index';
import { toast } from 'react-toastify';

import { useForm } from 'react-hook-form';
import useUsers from '../../../hook/use-users';

import {
  faFileUpload,
  faTrashAlt,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import useSWR from 'swr';
type Props = {};
type FormData = {
  name: string;
  email: string;

  password: string;
  role?: number;
};
const UserList = (props: Props) => {
  const { data, error, remove, update } = useUsers();

  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalOpen2, setModalOpen2] = React.useState(false);
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [idUser, setIdUser] = React.useState();
  const { data: user } = useSWR(idUser ? `/users/${idUser}` : null);

  React.useEffect(() => {
    console.log(idUser);

    reset(user);
  }, [idUser, user, reset]);

  const onSubmit2 = handleSubmit((data2) => {
    if (data2) {
      toast.success('Cập nhật tài khoản thành công');

      update(idUser, data2);

      setModalOpen2(!modalOpen2);

      reset();
    }
  });
  const onUpdate = (id: any) => {
    setModalOpen2(!modalOpen2);
    setIdUser(id);
  };
  const onDelete = (id: any) => {
    if (confirm('Are you sure you want to delete')) {
      toast.success('Xoá tài khoản thành công');
      remove(id);
    } else {
      toast.error('Xoá tài khoản thất bại');
    }
  };
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
                  <strong className="card-title">User List</strong>
                </div>
                <div className="table-stats order-table ov-h">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th className="serial">#</th>
                        <th className="avatar">Email</th>

                        <th>Name</th>
                        <th>Role</th>
                        <th>Creat At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((item: any, index: any) => (
                        <tr key={index}>
                          <td className="serial">{index + 1}</td>
                          <td className="avatar">
                            <span className="name">{item.email}</span>
                          </td>

                          <td>
                            {' '}
                            <span className="name">{item.name}</span>{' '}
                          </td>
                          <td>
                            {' '}
                            <span className="name">
                              {item.role == 0 ? 'Member' : 'Admin'}
                            </span>{' '}
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
                                  {item.role == 0 ? (
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-sm  rounded "
                                      onClick={() => onDelete(item._id)}
                                    >
                                      <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                  ) : (
                                    ''
                                  )}
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
                      Cập nhật tài khoản
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
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Tên"
                          {...register('name', {
                            required: 'Không được để trống !',
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
                        <label htmlFor="">Status</label>

                        <select {...register('role')}>
                          <option selected value={data?.role == 1 ? 1 : 0}>
                            {data?.role == 1 ? 'Admin' : 'Member'}
                          </option>
                          {data?.role == 1 ? (
                            <option value={0}>Member</option>
                          ) : (
                            <option value={1}>Admin</option>
                          )}
                        </select>
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
UserList.Layout = AdminLayout;
export default UserList;
