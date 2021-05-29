import { HeadBlock } from "../../../common/elements/HeadBlock/HeadBlock"
import s from "./Portfolio.module.scss"
import { Project } from "./Project/Project"

export function Portfolio() {
    return (
        <div className={s.portfolioContainer}>
            <HeadBlock title="Portfolio" />
            <div className={s.projects}>
                <Project />
                <Project />
                <Project />
                <Project />
            </div>



        </div>
    )
}