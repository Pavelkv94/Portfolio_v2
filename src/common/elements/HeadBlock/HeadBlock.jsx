import s from "./HeadBlock.module.scss"

export function HeadBlock(props) {
    return (
        <section className={s.styleHeading}>
            <div>icon</div>
            <h2>{props.title}</h2>
        </section>
    )
}