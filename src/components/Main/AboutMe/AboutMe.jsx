import { HeadBlock } from "../../../common/elements/HeadBlock/HeadBlock"
import s from "./AboutMe.module.scss"

export function AboutMe() {
    return (
        <div className={s.aboutContainer}>
            <div className={s.aboutBlock}>
                <HeadBlock title="About Me"/>
                <div className={s.detailInfo}>
                    <section className={s.textInfo}>
                        <h3>Frontend dev</h3>
                        <div>
                            <p> Dolor reprehenderit aut repudiandae maiores recusandae.
                            Consequatur dolor nisi labore commodi ipsa? Excepturi
                            velit laboriosam at voluptatibus cupiditate est vel.
                            Dolorem praesentium itaque fugiat placeat quas consequatur?
                            Obcaecati natus rerum
                            Consectetur consectetur nesciunt nesciunt
                            blanditiis amet? Quod quis unde aliquid excepturi
                            laudantium? Illo architecto aliquam velit illo magnam neque
                            perferendis sint Incidunt eius ipsa inventore labore eos velit.
                            Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti
                          accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur?</p>
                        </div>
                    </section>
                    <section className={s.personalInfo}>
                        <h3>Personal info</h3>
                        <ul>
                            <li><span>name</span><span>Pavel</span></li>
                            <li><span>name</span><span>Pavel</span></li>
                            <li><span>name</span><span>Pavel</span></li>
                            <li><span>name</span><span>Pavel</span></li>
                            <li><span>name</span><span>Pavel</span></li>
                        </ul>
                        <button><a href="">Download resume</a></button>
                    </section>
                </div>
                <section className={s.education}>Experiense/education</section>
            </div>
        </div>
    )
}