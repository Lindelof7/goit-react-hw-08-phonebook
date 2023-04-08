import PropTypes from 'prop-types'
import css from './App.module.css'
import { useState } from "react";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { addContactToStore } from 'redux/api';
import { useSelector, useDispatch } from 'react-redux'
import { selectContacts } from 'redux/selectors';
import { Button, Heading, Input } from '@chakra-ui/react'


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
        <>
            <form onSubmit={addContact} className={(css.phonebookWrap)} >
                <fieldset className={(css.formEl)}>
                    <Heading as='h2' size='md'>Name</Heading>
                    <Input
                        name='name'
                        width={450}
                        type="text"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder='Name'
                        id="contactName"
                        size='sm'
                        value={Name}
                        onChange={handleNameChange}
                    />
                    <Heading as='h2' size='md'>Number</Heading>
                    <Input
                        name='number'
                        width={450}
                        type="tel"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder='Phone number'
                        id="contactNumber"
                        size='sm'
                        value={Number}
                        onChange={handleNumChange}
                    />
                    <Button colorScheme='blue' type="submit" width={250} height={35} className={(css.formSubmit)}>Add Contact</Button>
                </fieldset>
            </ form >
        </>
    )
}

ContactForm.propTypes = {
    Name: PropTypes.string,
    Number: PropTypes.string
};

