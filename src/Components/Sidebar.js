import React from 'react'
import SidebarOptions from "./SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import "../Assets/Sidebar.css";
import { useDataLayerValue } from '../State-Management/DataLayer';

function Sidebar() {
    const[{playlists}, dispatch] = useDataLayerValue();
    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOptions Icon={HomeIcon} title="Home"/>
            <SidebarOptions Icon={SearchIcon} title="Search"/>
            <SidebarOptions Icon={LibraryMusicIcon} title="Your library"/>
            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>
            {
                playlists?.items?.map(playlist => {
                    return <SidebarOptions title={playlist.name}/>
                })
            }

        </div>
    )
}

export default Sidebar
