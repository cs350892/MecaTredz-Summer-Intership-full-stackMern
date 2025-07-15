import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddContact() {
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    console.log('Submitting contact:', contact);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/contacts', // ✅ Full backend URL
        contact,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      console.log('Success:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error adding contact:', error.response?.data || error.message);
      setError(
        error.response?.data?.message ||
          'Failed to add contact. Please check your input and try again.'
      );
    }
    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add Contact</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Contact'}
        </button>
      </form>
    </div>
  );
}

export default AddContact;
