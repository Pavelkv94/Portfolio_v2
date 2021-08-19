import React from 'react';
import s from './Button.module.scss'



export function Button(props) {
    if (!props.linker) {
        return (
            <button className={s.button} type={props.type} >
                {props.title}
            </button >

        )
    } else {
        return (
            <form action={props.linker} style={{ width: "150px" }} target="blank">
                <button className={s.button} type={props.type}>
                    {props.title}
                </button>
            </form>

        )
    }

}