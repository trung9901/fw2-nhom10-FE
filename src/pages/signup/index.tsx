import React from 'react';
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from "react-toastify"
import { signup } from "../../api/user"
import Link from 'next/link';


type Props = {
  name: string,
  email: string
  password: string
}

const Signup = (props: Props) => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Props>()

  const onSubmit: SubmitHandler<Props> = async (value: Props) => {


    try {
      await signup(value)


      reset();
      setTimeout(() => {
        toast.success("Đăng ký thành công, vui lòng đăng nhập");
        router.push("/signin")
      }
        , 3000)
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại!")

    }
  }

  return (
    <div className="container ">
      <div className="wrap_background_aside  page_login">
        <div className="wrap_background_aside">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12 col-xl-4 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3">
              <div className="row">
                <div className="page-login pagecustome clearfix">
                  <div className="wpx">
                    <h1 className="title_heads a-center"><span>ĐĂNG KÝ</span></h1>
                    <span className="block a-center dkm margin-top-10 mb-3">Đã có tài khoản, đăng nhập <Link href="/signin"><a className="btn-link-style btn-register">tại đây</a></Link> </span>
                    <div id="login" className="section">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="FormType" type="hidden" defaultValue="customer_register" />
                        <input name="utf8" type="hidden" /><input type="hidden" id="Token-df457a7c98664373806fcffaf26ffdbf" name="Token" defaultValue="03ANYolqt6yuG2X8qglV1zRlMgH68EJyVOHfy_c7JiYEbHPm2-2s1MtcNBVv1bpAtjVtDaK4m5DrorGzVb-22BCHV0Si_GLI8-5l9YhCcJPr1JN0VWmUJ977Vu6XL0inJYoeHNEFuMU8SxTsZqON18qYE_E6BKIaoB8nvtn7nzWTmgZV9Xc1mgcwljnOzNXU3Ol3TWDHykve0ahD3YXqc_8rscFrcVU-MRrZzBqll8_CTNBNsLv0JAPM1s3wNBdYcgM1KP8FROvTbh3FbHtY83s-ERTkc52KoVjB7XdqhCFFW9txRkhp8UFZeOBxqKFAXnj7h55zxYwdUrmHIw5HavBMUi5hAM-W_rg1jL2uLLYatmnf0gLs09xe89Mw7nne7FWst1jRHnG2ThrrGVQNLESmHAADv7qGlLU8yjYb8gV_fTWSW16pJU1plIGH7EEhDI1wXctisg6JEW4wG2EtUEbXwpIgntl6GZt0U1I6rsgSKuDxOKRvq6UfYl1ydTx7zeAU5YERV439Tyxf4ZUxqZixD_5RNeN5qB3A" />
                        <div className="form-signup " style={{ color: 'red' }}>
                        </div>
                        <div className="form-signup clearfix">
                          <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                              <fieldset className="form-group">
                                <input type="text" className="form-control form-control-lg" id="name" placeholder="Tên" {...register("name", { required: "Vui lòng nhập họ tên" })} />
                                <p>{errors.name?.message}</p>
                              </fieldset>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12" >
                              <fieldset className="form-group">
                                <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control form-control-lg" id="email" placeholder="Email" {...register("email", { required: "Vui lòng nhập email" })} />
                                <div>{errors.email?.message}</div>
                              </fieldset>
                            </div>

                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                              <fieldset className="form-group">
                                <input type="password" className="form-control form-control-lg" id="password" placeholder="Mật khẩu" {...register("password", { required: "Vui lòng nhập mật khẩu" })} />
                                <div>{errors.password?.message}</div>
                              </fieldset>
                            </div>
                          </div>
                          <div className="d-flex flex-column-reverse">
                            <button type="submit" value="Đăng ký" className="btn btn-danger ">Đăng ký</button>
                          </div>
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

export default Signup