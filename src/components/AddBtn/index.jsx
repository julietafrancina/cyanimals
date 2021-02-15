import React from 'react';
import './AddBtn.scss';
import * as BiIcons from "react-icons/bi";

const FilterBtn = () => {
    return(
        <div className='addBtn'>
            <BiIcons.BiPlus className='icon' />
        </div>
    );
}

export default FilterBtn;