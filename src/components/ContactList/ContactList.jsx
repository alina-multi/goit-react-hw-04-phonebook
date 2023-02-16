import React from 'react';

const ContactList = ({ visibleContacts, onDeleteButton }) => {
  const dataUser = visibleContacts();
  return (<div>
    <h4 className="m-auto text-lg font-semibold">Contacts</h4>
    <ul className='space-y-1 mt-6' >
      {dataUser.map(user => (
        <li key={user.id}
        className="flex justify-between items-center">
          {user.name}: {user.number}{' '}
          <button
            type="button"
            onClick={() => onDeleteButton(user.id)}
            className="inline-flex items-center px-2 py-1 border border-black  text-sm rounded-full  text-black  hover:text-red-600  hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  </div> 
  );
};

export default ContactList;
