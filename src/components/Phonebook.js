
import { AppTittle } from "./AppTittle"
import { ContactForm } from "./ContactForm"
import { ContactList } from "./ContactList"
import { ErrorMessage } from "./ErrorMessage"
import { Filter } from "./Filter"

export const Phonebook = () => {

    return (
        <div >
            <AppTittle />
            <ContactForm />
            <Filter />
            <ContactList />
            <ErrorMessage />
        </div>
    )
}