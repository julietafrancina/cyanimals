import React from 'react';
import MsgBtn from '../MsgBtn';
import AddBtn from '../AddBtn';
import SearchBtn from '../SearchBtn';
import './ActionBtns.scss'

const ActionBtns = () => {
    return(
        <section className='actionBtns'>
            <MsgBtn />
            <AddBtn />
            <SearchBtn />
        </section>
    );
}

export default ActionBtns;