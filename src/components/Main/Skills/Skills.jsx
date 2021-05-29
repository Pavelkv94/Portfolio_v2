import { HeadBlock } from "../../../common/elements/HeadBlock/HeadBlock"
import { SingleSkill } from "./SingleSkill/SingleSkill"
import s from "./Skills.module.scss"


export function Skills() {
    return (
        <div className={s.skillsContainer}>
            <div className={s.skillsWrap}>
                <HeadBlock title="My Skills" />
                <div className={s.skills}>
                <SingleSkill />
                <SingleSkill />
                <SingleSkill />
                <SingleSkill />
                <SingleSkill />
                <SingleSkill />
                
                </div>
            </div>
        </div>
    )
}