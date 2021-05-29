import { Home } from "./Home/Home"
import s from "./Main.module.scss"

export function Main() {
    return (
        <div className={s.main}>
            <Home />
        </div>
    )
}