import React from 'react';
import { MdArrowBack, MdSearch, MdMoreVert } from "react-icons/md";


export default function Header(){
    return(
        <header className = 'mds-top-bar'>
            <section className = 'mds-top-bar__left'>
                <a href = '#' className = 'mds-top-bar__left__icon'><MdArrowBack size= {30} /></a>
                <span className = 'mds-top-bar__left__title'>Description</span>
            </section>
            <section className = 'mds-top-bar__right'>
                <a href = '#' className = 'mds-top-bar__middle__icon'><MdSearch size= {30} /></a>
                <a href = '#' className = 'mds-top-bar__right__icon'><MdMoreVert size= {30} /></a>
            </section>
        </header>
    );
}