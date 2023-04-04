import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css'
import { setFilter } from './redux/contactFilter';
import { selectFilter } from './redux/selectors';

export const Filter = ({ value }) => {
    const Filter = useSelector(selectFilter)
    const dispatch = useDispatch();

    const onFiltChange = (evt) => {
        dispatch(setFilter(evt.target.value))
    }

    return (<div className={(css.filterWrap)}><label htmlFor="contactFilter" className={(css.formLabel)}>Find contacts by name</label>
        <input
            className={(css.filterInput)}
            onChange={onFiltChange}
            type="text"
            name="number"
            id="contactFilter"
            value={Filter}
        /></div>)
}

