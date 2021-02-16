import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Perdidos',
        path: '/perdidos',
        icon: <FaIcons.FaQuestion />,
        cName: 'nav-text'
    },
    {
        title: 'Visto en la calle',
        path: '/visto-calle',
        icon: <FaIcons.FaBinoculars />,
        cName: 'nav-text'
    },
    {
        title: 'Adopción',
        path: '/adopcion',
        icon: <FaIcons.FaHeart />,
        cName: 'nav-text'
    },
    {
        title: 'Sobre nosotros',
        path: '/about',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
]