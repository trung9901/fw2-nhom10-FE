import React from 'react'

type Props = {}

const Signup = (props: Props) => {
  return (
  <div className="container ">
    <div className="wrap_background_aside  page_login">
      <div className="wrap_background_aside">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 col-xl-4 offset-xl-4 offset-lg-4 offset-md-3 offset-xl-3">
            <div className="row">
              <div className="page-login pagecustome clearfix">
                <div className="wpx">
                  <h1 className="title_heads a-center"><span>Đăng ký</span></h1>
                  <span className="block a-center dkm margin-top-10">Đã có tài khoản, đăng nhập <a href="/account/login" className="btn-link-style btn-register">tại đây</a></span>
                  <div id="login" className="section">
                    <form acceptCharset="utf-8" action="/account/register" id="customer_register" method="post">
                      <input name="FormType" type="hidden" defaultValue="customer_register" />
                      <input name="utf8" type="hidden" defaultValue="true" /><input type="hidden" id="Token-df457a7c98664373806fcffaf26ffdbf" name="Token" defaultValue="03ANYolqt6yuG2X8qglV1zRlMgH68EJyVOHfy_c7JiYEbHPm2-2s1MtcNBVv1bpAtjVtDaK4m5DrorGzVb-22BCHV0Si_GLI8-5l9YhCcJPr1JN0VWmUJ977Vu6XL0inJYoeHNEFuMU8SxTsZqON18qYE_E6BKIaoB8nvtn7nzWTmgZV9Xc1mgcwljnOzNXU3Ol3TWDHykve0ahD3YXqc_8rscFrcVU-MRrZzBqll8_CTNBNsLv0JAPM1s3wNBdYcgM1KP8FROvTbh3FbHtY83s-ERTkc52KoVjB7XdqhCFFW9txRkhp8UFZeOBxqKFAXnj7h55zxYwdUrmHIw5HavBMUi5hAM-W_rg1jL2uLLYatmnf0gLs09xe89Mw7nne7FWst1jRHnG2ThrrGVQNLESmHAADv7qGlLU8yjYb8gV_fTWSW16pJU1plIGH7EEhDI1wXctisg6JEW4wG2EtUEbXwpIgntl6GZt0U1I6rsgSKuDxOKRvq6UfYl1ydTx7zeAU5YERV439Tyxf4ZUxqZixD_5RNeN5qB3A" />
                      <div className="form-signup " style={{color: 'red'}}>
                      </div>
                      <div className="form-signup clearfix">
                        <div className="row">
                          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <fieldset className="form-group">
                              <input type="text" className="form-control form-control-lg" defaultValue name="lastName" id="lastName" placeholder="Họ" required />
                            </fieldset>
                          </div>
                          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <fieldset className="form-group">
                              <input type="text" className="form-control form-control-lg" defaultValue name="firstName" id="firstName" placeholder="Tên" required />
                            </fieldset>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <fieldset className="form-group">
                              <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" className="form-control form-control-lg" defaultValue name="email" id="email" placeholder="Email" required />
                            </fieldset>
                          </div>
                          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <fieldset className="form-group">	
                              <input placeholder="Số điện thoại" type="text" pattern="\d+" className="form-control form-control-comment form-control-lg" name="PhoneNumber" required />
                            </fieldset>
                          </div>
                          <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                            <fieldset className="form-group">
                              <input type="password" className="form-control form-control-lg" defaultValue name="password" id="password" placeholder="Mật khẩu" required />
                            </fieldset>
                          </div>
                        </div>
                        <div className="section">
                          <button type="submit" value="Đăng ký" className="btn  btn-style btn_50">Đăng ký</button>
                        </div>
                      </div>
                    </form>
                    <div className="block social-login--facebooks" style={{marginBottom: 50}}>
                      <p className="a-center">
                        Hoặc đăng nhập bằng
                      </p>
                      <a href="javascript:void(0)" className="social-login--facebook" onClick="loginFacebook()"><img width="129px" height="37px" alt="facebook-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" /></a>
                      <a href="javascript:void(0)" className="social-login--google" onClick="loginGoogle()"><img width="129px" height="37px" alt="google-login-button" src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" /></a>
                    </div>
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