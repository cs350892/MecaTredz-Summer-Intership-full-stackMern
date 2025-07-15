import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('/api/contacts')
      .then(response => setContacts(response.data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/contacts/${id}`)
      .then(() => setContacts(contacts.filter(contact => contact.id !== id)))
      .catch(error => console.error('Error deleting contact:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map(contact => (
            <li key={contact.id} className="bg-white p-4 rounded shadow flex justify-between">
              <div>
                <h3 className="text-lg font-semibold">{contact.name}</h3>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
              </div>
              <div className="space-x-2">
                <Link to={`/edit/${contact.id}`} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;