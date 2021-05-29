import React from 'react';
import s from './NavItem.module.scss'

export function NavItem() {
    return (
        <div className={s.navItem}>
            <a href="#">
                Link
            </a>
        </div>
    )
}