import { SingleSkill } from "./SingleSkill/SingleSkill"
import s from "./Skills.module.scss"


export function Skills() {
    return (
        <div className={s.skillsContainer}>
            <div >
                <h2>My Skills</h2>
                <div>
                    <SingleSkill />
                </div>
            </div>
        </div>
    )
}