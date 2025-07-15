import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditContact() {
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/contacts/${id}`)
      .then(response => setContact(response.data))
      .catch(error => console.error('Error fetching contact:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/contacts/${id}`, contact)
      .then(() => navigate('/'))
      .catch(error => console.error('Error updating contact:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone</label>
          <input
            type="tel"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Update Contact
        </button>
      </form>
    </div>
  );
}

export default EditContact;