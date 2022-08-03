import React from 'react'
import Link from 'next/link'
import {useForm, SubmitHandler} from 'react-hook-form'
import {toast} from 'react-toastify'
import {useRouter} from 'next/router'
import { signin } from '../../api/auth'
import {authenticated} from '../../utils/localStorage'

type Props = {
  name: string,
  email: string
  password: string
}

const Signin = (props: Props) => {
  const router = useRouter()

  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<Props>()

  const onSubmit: SubmitHandler<Props> = async (value: Props) => {
    try {
      await signin(value)
      toast.success("Đăng nhập thành công, vui lòng chờ giây lát");
      authenticated(value,
        ()=> router.push("/"))
      reset();
  
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại!")

    }
  }

  return (
    <div className="container">
  <div className="wrap_background_aside page_login" style={{paddingBottom: 30}}>
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-12 col-xl-4 offset-0 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3 col-12">
        <div className="row">
          <div className="page-login pagecustome clearfix">
            <div className="wpx">
              <h1 className="title_heads a-center"><span>Đăng nhập</span></h1>
              <span className="block a-center dkm margin-top-10">Nếu bạn chưa có tài khoản, đăng ký<Link href="/signin"><a  className="btn-link-style btn-register"> tại đây</a></Link> </span>
              <div id="login" className="section">
              <form onSubmit={handleSubmit(onSubmit)}>
                  <input name="FormType" type="hidden" defaultValue="customer_login" />
                  <input name="utf8" type="hidden" defaultValue="true" />
                  <span className="form-signup" style={{color: 'red'}}>
                  </span>
                  <div className="form-signup clearfix">
                    <fieldset className="form-group">
                      <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control form-control-lg"  name="email" id="customer_email" placeholder="Email" {...register("email", { required: "Vui lòng nhập email" })} />
                    </fieldset>
                    <fieldset className="form-group">
                      <input type="password" className="form-control form-control-lg"  name="password" id="customer_password" placeholder="Mật khẩu" {...register("password", { required: "Vui lòng nhập mật khẩu" })} />
                    </fieldset>
                    <div className="d-flex flex-column-reverse">
                      <input className="btn btn-danger" type="submit" defaultValue="Đăng nhập" />
                      <span className="flex-column-reverse">Quên mật khẩu</span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="h_recover" style={{display: 'none'}}>
                <div id="recover-password" className="form-signup page-login">
                  <form acceptCharset="utf-8" action="/account/recover" id="recover_customer_password" method="post">
                    <input name="FormType" type="hidden" defaultValue="recover_customer_password" />
                    <input name="utf8" type="hidden" defaultValue="true" />
                    <div className="form-signup" style={{color: 'red'}}>
                    </div>
                    <div className="form-signup clearfix">
                      <fieldset className="form-group">
                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control form-control-lg"  name="Email" id="recover-email" placeholder="Email" required />
                      </fieldset>
                    </div>
                    <div className="action_bottom">
                      <input className="btn btn-style btn_50" style={{marginTop: 0}} type="submit" defaultValue="Lấy lại mật khẩu" />
                    </div>
                  </form>
                </div>
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