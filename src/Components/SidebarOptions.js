import React from 'react'
import '../Assets/SidebarOptions.css';
function SidebarOptions({title, Icon}) {
    return (
        <div className="sidebarOption">
            <p>{title}</p>
        </div>
    )
}

export default SidebarOptions
