/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import {} from '@fortawesome/free-solid-svg-icons';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      {' '}
      <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
          <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="index.html">
                  <i className="menu-icon fa fa-laptop" />
                  Dashboard{' '}
                </a>
              </li>
              <li className="menu-title">Menu</li>
              {/* /.menu-title */}
              <li className="menu-item-has-children dropdown">
                <Link href="admin/products">
                  <a>
                    <i className="menu-icon fa fa-cogs" />
                    Products
                  </a>
                </Link>
              </li>
              <li className="menu-item-has-children dropdown">
                <Link href="admin/categories">
                  <a>
                    <i className="menu-icon fa fa-cogs" />
                    Categories
                  </a>
                </Link>
              </li>
              <li className="menu-item-has-children dropdown">
                <Link href="admin/users">
                  <a>
                    <i className="menu-icon fa fa-cogs" />
                    Users
                  </a>
                </Link>
              </li>
              <li className="menu-item-has-children dropdown">
                <Link href="admin/news">
                  <a>
                    <i className="menu-icon fa fa-cogs" />
                    News
                  </a>
                </Link>
              </li>
            
              {/* -------------------------------------------------------------------------------------------- */}
              {/* <li className="menu-title">Icons</li>

              <li className="menu-item-has-children dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {' '}
                  <i className="menu-icon fa fa-tasks" />
                  Icons
                </a>
                <ul className="sub-menu children dropdown-menu">
                  <li>
                    <i className="menu-icon fa fa-fort-awesome" />
                    <a href="font-fontawesome.html">Font Awesome</a>
                  </li>
                  <li>
                    <i className="menu-icon ti-themify-logo" />
                    <a href="font-themify.html">Themefy Icons</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="widgets.html">
                  {' '}
                  <i className="menu-icon ti-email" />
                  Widgets{' '}
                </a>
              </li>
              <li className="menu-item-has-children dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {' '}
                  <i className="menu-icon fa fa-bar-chart" />
                  Charts
                </a>
                <ul className="sub-menu children dropdown-menu">
                  <li>
                    <i className="menu-icon fa fa-line-chart" />
                    <a href="charts-chartjs.html">Chart JS</a>
                  </li>
                  <li>
                    <i className="menu-icon fa fa-area-chart" />
                    <a href="charts-flot.html">Flot Chart</a>
                  </li>
                  <li>
                    <i className="menu-icon fa fa-pie-chart" />
                    <a href="charts-peity.html">Peity Chart</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {' '}
                  <i className="menu-icon fa fa-area-chart" />
                  Maps
                </a>
                <ul className="sub-menu children dropdown-menu">
                  <li>
                    <i className="menu-icon fa fa-map-o" />
                    <a href="maps-gmap.html">Google Maps</a>
                  </li>
                  <li>
                    <i className="menu-icon fa fa-street-view" />
                    <a href="maps-vector.html">Vector Maps</a>
                  </li>
                </ul>
              </li>

              <li className="menu-title">Extras</li>

              <li className="menu-item-has-children dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {' '}
                  <i className="menu-icon fa fa-glass" />
                  Pages
                </a>
                <ul className="sub-menu children dropdown-menu">
                  <li>
                    <i className="menu-icon fa fa-sign-in" />
                    <a href="page-login.html">Login</a>
                  </li>
                  <li>
                    <i className="menu-icon fa fa-sign-in" />
                    <a href="page-register.html">Register</a>
                  </li>
                  <li>
                    <i className="menu-icon fa fa-paper-plane" />
                    <a href="pages-forget.html">Forget Pass</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
