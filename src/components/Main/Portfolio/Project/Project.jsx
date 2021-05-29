import s from "./Project.module.scss"


export function Project() {
    return (
        <div className={s.project}>
            <div className={s.image}>
                <button>look</button>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>title</h3>
                <span className={s.description}>
                    description Project
                </span>
            </div>
        </div>
    )
}