/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';

import { LayoutProps } from '../../models/Layout';
import Sidebar from '../SidebarAdmin';
type Props = {};

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Sidebar />

      {children}
    </div>
  );
};

export default AdminLayout;
