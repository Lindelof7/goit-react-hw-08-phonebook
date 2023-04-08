import nextId from "react-id-generator";
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from "redux/api";
import {
    Button,
    ListItem,
    OrderedList,
    Text
} from '@chakra-ui/react'
import { selectContacts, selectFilter } from "redux/selectors";


export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filterVal = useSelector(selectFilter);
    const loweredFilter = filterVal.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(loweredFilter))

    return (<OrderedList spacing={1.5} marginLeft="30px">
        {filteredContacts.map
            (contact =>
                <ListItem key={nextId()} display="flex">
                    <Text fontSize='15px'>{contact.name} : {contact.number}</Text>
                    <Button size="sm" colorScheme={"teal"} onClick={() => { dispatch(deleteContact(contact.id)) }} className={(css.contactListBtn)}>Delete</Button>
                </ListItem>)}
    </OrderedList>
    )
}