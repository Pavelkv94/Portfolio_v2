import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '../../common/elements/button/Button';
import s from './ContactForm.module.scss'

export function ContactForm() {
    const [state, handleSubmit] = useForm("xzbyvjwk");
    if (state.succeeded) {
        return <div className={s.message}>Thank you for your message! Wait for an answer soon.</div>;
    }
    return (
        <form onSubmit={handleSubmit} className={s.contacts}>

            <input
                id="name"
                type="text"
                name="name"
                className={s.input}
                placeholder="Your name"
            />
            <input
                id="email"
                type="email"
                name="email"
                className={s.input}
                placeholder="Your email"
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
                placeholder="Your messaage"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            {/* <button type="submit" disabled={state.submitting}>
                Submit
            </button> */}
            <Button
                title="Send"
                type="submit"
                //linker="#"
                disabled={state.submitting} />

        </form>
    );
}