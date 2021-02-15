import React from 'react';
import './SearchBtn.scss';
import * as BiIcons from "react-icons/bi";

const SearchBtn = () => {
    return(
        <div className='searchBtn'>
            <BiIcons.BiSearchAlt className='icon' />
        </div>
    );
}

export default SearchBtn;