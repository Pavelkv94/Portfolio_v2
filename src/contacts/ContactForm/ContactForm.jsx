import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '../../common/elements/button/Button';
import s from './ContactForm.module.scss'

export function ContactForm() {
    const [state, handleSubmit] = useForm("xzbyvjwk");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="name"
                type="text"
                name="name"
                className={s.input}
            />
            <input
                id="email"
                type="email"
                name="email"
                className={s.input}
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                className={s.textarea}
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
            {/* <Button
                title="Send"
                type="submit"
                //linker="#"
                disabled={state.submitting} /> */}

        </form>
    );
}