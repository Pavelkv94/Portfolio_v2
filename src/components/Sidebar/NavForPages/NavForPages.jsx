import s from './NavForPages.module.scss'


export function NavForPages(props) {
    return (
        <div className={s.sidebarNav}>
            <a href="#">{props.title}</a>
        </div>
    );
}