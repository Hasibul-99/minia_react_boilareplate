import React, {useEffect} from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import $ from "jquery";
import "metismenu";

import userImg from "../../assets/images/users/avatar-1.jpg";
import chart from "../../assets/images/chart.svg"
import callCalling from "../../assets/images/call-calling.svg"
import callCallingWhite from "../../assets/images/call-calling-white.svg"
import note from "../../assets/images/note.svg"
import noteWhite from "../../assets/images/note-white.svg"
import note2 from "../../assets/images/note-2.svg"
import note2White from "../../assets/images/note-2-white.svg"
import user from "../../assets/images/user.svg"
import userWhite from "../../assets/images/user-white.svg"

export default function Sidebar() {

  useEffect(() => {
    $("#side-menu").metisMenu();
  }, [])
  
  return (
    <div className="vertical-menu">
      <SimpleBar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="dropdown d-inline-block m-auto text-center overflow-hidden">
              <button type="button" className="btn header-item bg-soft-custom-primary text-start" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="rounded-circle header-profile-user" 
                  src={userImg} alt="Header Avatar" />
                <span className="d-none d-xl-inline-block ms-1 fw-medium text-truncate w-130">
                  Abdullah Al Mahmud
                </span>
                <p className="position-relative super-admin font-size-12">
                  Super Admin
                </p>
                <i className="fa fa-circle position-relative user-online"> </i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                {/* item*/}
                <a className="dropdown-item" href="#."><i className="mdi mdi-face-profile font-size-16 align-middle me-1" /> Profile</a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#."><i className="mdi mdi-logout font-size-16 align-middle me-1" /> Logout</a>
              </div>
            </li>

            <li className="menu-title or or--x" data-key="t-menu">
              Management Panel
            </li>
            <li className="ivr-panel">
              <a href="#." className="has-arrow" aria-expanded="true">
                <img src={chart} className="me-2" alt="IVR" />
                <span> IVR Panel </span>
              </a>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <a href="index.html">
                    <span data-key="t-calendar"> Current Day </span>
                  </a>
                </li>
                <li>
                  <a href="node-performance.html">
                    <span data-key="t-chat"> Node Performance </span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="call-center.html">
                <img src={callCalling} className="me-2 call-calling" alt="call" />
                <img src={callCallingWhite} className="me-2 call-calling-white d-none" alt="call" />
                <span data-key="t-horizontal"> Call Center </span>
              </a>
            </li>
            <li>
              <a href="ivr-statistics.html">
                <img src={note} className="me-2 note" alt="note"/>
                <img src={noteWhite} className="me-2 note-white d-none" alt="note" />
                <span data-key="t-horizontal"> IVR Statistics </span>
              </a>
            </li>
            <li>
              <a href="#.">
                <img src={note2} className="me-2 note-2" alt="note" />
                <img src={note2White} className="me-2 note-2-white d-none" alt="note" />
                <span data-key="t-horizontal"> Ticket Configure </span>
              </a>
            </li>
            <li>
              <a href="user-control.html">
                <img src={user} className="me-2 user" alt="user" />
                <img src={userWhite} className="me-2 user-white d-none" alt="user"/>
                <span data-key="t-horizontal"> User Control </span>
              </a>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </div>
  )
}
