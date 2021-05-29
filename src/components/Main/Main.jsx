import { AboutMe } from "./AboutMe/AboutMe"
import { Contact } from "./Contact/Contact"
import { Home } from "./Home/Home"
import s from "./Main.module.scss"
import { Portfolio } from "./Portfolio/Portfolio"
import { Skills } from "./Skills/Skills"

export function Main() {
    return (
        <div className={s.main}>
            <Home />
            <AboutMe />
            <Skills/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}