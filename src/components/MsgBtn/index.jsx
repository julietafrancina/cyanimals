import React from 'react';
import './MsgBtn.scss';
import * as BiIcons from "react-icons/bi";

const MsgBtn = () => {
    return(
        <div className='msgBtn'>
            <BiIcons.BiMessageAltDetail className='icon' />
        </div>
    );
}

export default MsgBtn;