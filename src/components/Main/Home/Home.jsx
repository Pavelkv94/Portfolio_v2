import s from "./Home.module.scss"

export function Home() {
    return (
        <div className={s.homeContainer}>

            <div className={s.mainTitle}>
                <span>Hi There </span>
                <h1> My name is Pavel Kozlov.</h1>
                <p>I'm frontend-developer!</p>
                <p>I'm react-developer!</p>
            </div>


        </div>
    )
}