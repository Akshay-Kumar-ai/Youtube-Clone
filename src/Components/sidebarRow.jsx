import React from 'react'
import "./SidebarRow.css";

function sidebarRow({Icon,title}) {
  return (
    <div className='sidebarRow'>
        <Icon className="sidebarRow__icon" />
        <h2 className="sidebarRow_title">{title}</h2>

    </div>
  ) 
}

export default sidebarRow
// const sidebar={
//   name:"hpme",icon:<HomeIcon/>
// }