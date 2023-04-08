import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css'
import { setFilter } from 'redux/contactFilter';
import { selectFilter } from 'redux/selectors';
import { Heading, Input } from '@chakra-ui/react'

export const Filter = ({ value }) => {
    const Filter = useSelector(selectFilter)
    const dispatch = useDispatch();

    const onFiltChange = (evt) => {
        dispatch(setFilter(evt.target.value))
    }

    return (<>
        <Heading  as='h2' size='md' className={(css.phonebookWrap)} >Contacts</Heading>
        <div className={(css.filterWrap)}><label htmlFor="contactFilter" className={(css.formLabel)}>Find contacts by name</label>
            <Input
                width={300}
                height={8}
                className={(css.filterInputWrap)}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                type="text"
                name="number"
                id="contactFilter"
                value={Filter}
                onChange={onFiltChange}
            /></div>
    </>)
}

