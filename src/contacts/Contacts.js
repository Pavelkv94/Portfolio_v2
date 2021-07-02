import React from 'react';
import s from './Contacts.module.scss'
import styleContainer from '../common/styles/styleContainer.module.css'
import { Button } from '../common/elements/button/Button';
import { Title } from '../common/elements/Title/Title';
import Fade from 'react-reveal/Fade';
import { ContactForm } from './ContactForm/ContactForm';

export function Contacts() {
    return (
        <div className={s.contactsBlock} id="contacts">
            <Fade bottom>
                <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                    <Title title="Contacts" />
                    <ContactForm />
                </div>
            </Fade>
        </div>
    )
}