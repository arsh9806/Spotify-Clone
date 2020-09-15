import React from 'react'
import SidebarOptions from "./SidebarOptions";
import "../Assets/Sidebar.css";
function Sidebar() {
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOptions title="Home"/>
            <SidebarOptions title="Search"/>
            <SidebarOptions title="Your library"/>
        </div>
    )
}

export default Sidebar
