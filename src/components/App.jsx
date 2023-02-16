import { useState } from "react";
import "../index.css"
import ContactList from './ContactList/ContactList';
import FormField from './Form/FormField';
import Filter from "./Filter/Filter";
import { useLocalStorage } from "./hooks/useLocalStorage";

const user = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', user);
  const [filter, setFilter] = useState("");

  const setNewContact = (newContact)=>{
    const isMatch = contacts.find(contact => contact.name === newContact.name || contact.number === newContact.number)
        
         if (isMatch) { 
           alert(`${newContact.name} is alredy in contacts`);
           return;
         }
         setContacts([newContact, ...contacts]);
}

    const handleFilter = (e) => { 
  
    setFilter(e.currentTarget.value);
    contactsFilter();
  
   }

   const contactsFilter = () => {
         const filterNirmilized = filter.toLocaleLowerCase();
         const visibleArray = contacts.filter(contact=> contact.name.toLowerCase().includes(filterNirmilized))
         return visibleArray;
       
       }
     const onDeleteButton = (contactID) => {
            setContacts(contacts.filter(contact => contact.id !== contactID)) }

        return <div className="my-3">
          <div className="flex flex-col gap-6 max-w-md m-auto">
        <h1 className="text-3xl font-semibold text-center">Phonebook</h1>
        <FormField setNewContact={setNewContact}/>
        <Filter contacts={contacts} filter={filter} onChange={handleFilter}/>
        <ContactList visibleContacts={contactsFilter} onDeleteButton={onDeleteButton}/>
        </div>
      </div> 
           
           


}
