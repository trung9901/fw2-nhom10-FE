import React from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from "react-toastify"
import { signin } from '../../api/user'
import Link from 'next/link'
import { authenticated } from "../../utils/localStorage"

import { useAuth } from './../../hook/use-auth';
type Props = {
  name: string,
  email: string
  password: string
  phone: string
}

const Signin = (props: Props) => {
  const {data,login,logout } = useAuth()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Props>()

  const onSubmit: SubmitHandler<Props> = async (value: Props) => {
    try {
      login(value)
      reset();
      toast.success("Đăng nhập thành công, vui lòng chờ giây lát");
      setTimeout(() => {
        router.push("/")
      }, 3000)

    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại!")

    }
  }


  return (
    <div className="container">
      <div className="wrap_background_aside page_login" style={{ paddingBottom: 30 }}>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-xl-4 offset-0 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3 col-12">
            <div className="row">
              <div className="page-login pagecustome clearfix">
                <div className="wpx ">
                  <h1 className="title_heads a-center"><span>ĐĂNG NHẬP</span></h1>
                  <span className="block a-center dkm margin-top-10 mb-2">Nếu bạn chưa có tài khoản,
                    <Link href="/signup">
                      <a className="btn-link-style btn-register">đăng ký tại đây</a>
                    </Link>
                  </span>
                  <div id="login" className="section">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input name="FormType" type="hidden" defaultValue="customer_login" />
                      <input name="utf8" type="hidden" />
                      <span className="form-signup" style={{ color: 'red' }}>
                      </span>
                      <div className="form-signup clearfix">
                        <fieldset className="form-group">
                          <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control form-control-lg" id="customer_email" placeholder="Email" {...register("email", { required: "Vui lòng nhập email" })} />
                        </fieldset>
                        <fieldset className="form-group">
                          <input type="password" className="form-control form-control-lg"  id="customer_password" placeholder="Mật khẩu" {...register("password", { required: "Vui lòng nhập mật khẩu" })} />
                        </fieldset>
                        <div className="d-flex flex-column-reverse">
                          <button type="submit" value="Đăng nhập" className="btn btn-success ">Đăng Nhập</button>
                        </div>
                        <span className="block a-center mt-2">Quên mật khẩu</span>
                      </div>
                    </form>
                  </div>
                  <div className="h_recover" style={{ display: 'none' }}>
                    <div id="recover-password" className="form-signup page-login">
                      <form >
                        <input name="FormType" type="hidden" defaultValue="recover_customer_password" />
                        <input name="utf8" type="hidden" defaultValue="true" />
                        <div className="form-signup" style={{ color: 'red' }}>
                        </div>
                        <div className="form-signup clearfix">
                          <fieldset className="form-group">
                            <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control form-control-lg" name="Email" id="recover-email" placeholder="Email" required />
                          </fieldset>
                        </div>
                        <div className="action_bottom">
                          <input className="btn btn-style btn_50" style={{ marginTop: 0 }} type="submit" defaultValue="Lấy lại mật khẩu" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="block social-login--facebooks">
                    <p className="a-center">
                      Hoặc đăng nhập bằng
                    </p>
                    <a href="javascript:void(0)" className="social-login--facebook" ><img className='m-2' width="129px" height="37px" alt="facebook-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" /></a>
                    <a href="javascript:void(0)" className="social-login--google" ><img width="129px" height="37px" alt="google-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Signin