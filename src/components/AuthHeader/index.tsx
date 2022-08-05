import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../hook/use-auth';
import { isAuthenticate } from '../../utils/localStorage';
type Props = {};

const AuthComponnet = (props: Props) => {
  const [color, setColor] = useState('blue');
  useEffect(() => setColor('red'), []);

  const { login, logout } = useAuth();

  return (
    <div className="group_ac">
      {isAuthenticate() ? (
        <div className="">
          {isAuthenticate().user.role === 1 ? (
            <Link href="/admin">
              <a className="btnx">Admin</a>
            </Link>
          ) : (
            ''
          )}

          <a onClick={() => logout()}>Đăng xuất</a>
        </div>
      ) : (
        <div className="">
          <Link href="/signin">
            <a className="btnx">Đăng nhập</a>
          </Link>
          <Link href="/signup">
            <a>Đăng ký</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthComponnet;
