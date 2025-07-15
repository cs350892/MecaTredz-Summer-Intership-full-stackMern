const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Allow CORS from frontend
app.use(express.json()); // Enable parsing JSON body

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - Body:`, req.body);
  next();
});

// In-memory contacts array
let contacts = [
  { id: 1, name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
];

// GET all contacts
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

// POST a new contact
app.post('/api/contacts', (req, res) => {
  const { name, phone, email } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ message: 'Name, phone, and email are required' });
  }

  const newContact = {
    id: contacts.length + 1,
    name,
    phone,
    email,
  };

  contacts.push(newContact);
  res.status(201).json(newContact);
});

// PUT to update a contact
app.put('/api/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, phone, email } = req.body;

  const contact = contacts.find((c) => c.id === id);
  if (!contact) return res.status(404).json({ message: 'Contact not found' });

  contact.name = name;
  contact.phone = phone;
  contact.email = email;

  res.json(contact);
});

// DELETE a contact
app.delete('/api/contacts/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = contacts.findIndex((c) => c.id === id);
  if (index === -1) return res.status(404).json({ message: 'Contact not found' });

  contacts.splice(index, 1);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
