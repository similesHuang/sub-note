import React, { useState } from "react";
import routes from "../routes";
import { useNavigate } from "react-router-dom";

const NoteMenu = ()=>{
    
    const [selectedMenu,setSelectedMenu] = useState('form');
    const navigate = useNavigate();

    const renderMenu =(routes)=>{
      return routes.map((menu)=>{
         return <div key={menu.key} 
                className={`micro-menu-item ${selectedMenu===menu.key? 'micro-menu-item-selected':'' }`}
                onClick={()=>{
                setSelectedMenu(menu.key);
                navigate(menu.path)
         }}>
            <span className="micro-menu-item-icon">
            {menu.icon}
            </span>
            <span>
            {menu.title}
            </span>
         </div>
      })
    }


    return <div className="micro-menu">
            <header className="micro-menu-title"><b>云笔记</b></header>
            {renderMenu(routes)}
           </div>
}
export default NoteMenu;