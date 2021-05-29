import s from './SingleSkill.module.scss'

export function SingleSkill() {
    return (
        <div className={s.mySkillBlock}>
            <div className={s.iconBlock}>
                icon
            </div>
            <h3>h3</h3>
            <span className={s.description}>
                description
            </span>
        </div>
    )
}