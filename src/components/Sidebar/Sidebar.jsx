import { NavForPages } from './NavForPages/NavForPages';
import { NavItem } from './NavItem/NavItem';
import s from './Sidebar.module.scss'


export function Sidebar() {
    return (
        <div className={s.sidebarContainer}>
            <div className={s.topSidebar}>
                <div className={s.photo}>

                </div>
                <nav className={s.sidebarNav}>
                    <NavForPages title="Home" />
                    <NavForPages title="About me" />
                    <NavForPages title="My skills" />
                    <NavForPages title="Portfolio" />
                    <NavForPages title="Contact" />
                </nav>
            </div>
            {/* <div className={s.navFooter}>
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
            </div> */}
        </div>
    );
}