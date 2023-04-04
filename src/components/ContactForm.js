import PropTypes from 'prop-types'
import css from './App.module.css'
import { useState } from "react";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { addContactToStore } from './redux/api';
import { useSelector, useDispatch } from 'react-redux'
import { selectContacts } from './redux/selectors';

export const ContactForm = () => {
    const [Name, setName] = useState('');
    const [Number, setNumber] = useState('');

    const contacts = useSelector(selectContacts)

    const dispatch = useDispatch();

    const handleNameChange = evt => {
        setName(evt.target.value);
    };
    const handleNumChange = evt => {
        setNumber(evt.target.value);
    }

    const addContact = (evt) => {
        evt.preventDefault();

        const newContact = {
            name: evt.target.elements.name.value,
            number: evt.target.elements.number.value,
        }

        const findSame = contacts.find(contact => contact.name === evt.target.elements.name.value)

        if (findSame) {
            return Report.failure('You have already added this contact')
        };

        dispatch(addContactToStore(newContact))
        setName('')
        setNumber('')
    }

    return (
        <form onSubmit={addContact} >
            <fieldset className={(css.formEl)}>
                <label htmlFor="contactName" className={(css.formLabel)}>Name</label>
                <input
                    className={(css.formInput)}
                    type="text"
                    name="name"
                    id="contactName"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={Name}
                    onChange={handleNameChange}
                />
                <label htmlFor="contactNumber" className={(css.formLabel)}>Number</label>
                <input
                    className={(css.formInput)}
                    type="tel"
                    name="number"
                    id="contactNumber"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={Number}
                    onChange={handleNumChange}
                />
                <button type="submit" className={(css.formSubmit)}>Add Contact</button>
            </fieldset>
        </ form >

    )
}


ContactForm.propTypes = {
    Name: PropTypes.string,
    Number: PropTypes.string
};
