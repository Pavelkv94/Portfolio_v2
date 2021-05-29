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
                    <NavForPages title="Home"/>
                    <NavForPages title="About me" />
                    <NavForPages title="Resume" />
                    <NavForPages title="Portfolio" />
                    <NavForPages title="Contact" />
                    {/* <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Resume</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul> */}
                </nav>
            </div>
            <div className={s.navFooter}>
                <NavItem />
                <NavItem />
                <NavItem />
                <NavItem />
            </div>
        </div>
    );
}