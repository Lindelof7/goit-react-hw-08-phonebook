import { AppTittle } from "./AppTittle"
import { ContactForm } from "./ContactForm"
import { ContactList } from "./ContactList"
import { ErrorMessage } from "./ErrorMessage"
import { Filter } from "./Filter"


// const ContactList = lazy(() => import('./ContactList'));
// const AppTittle = lazy(() => import('./AppTittle'));
// const Filter = lazy(() => import('./Filter'));
// const ContactForm = lazy(() => import('./ContactForm'));
// const ErrorMessage = lazy(() => import('./ErrorMessage'))




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