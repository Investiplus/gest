import { useState } from 'react'

export default function App() {
  const [clients, setClients] = useState([])
  const [form, setForm] = useState({ name: '', email: '', note: '' })

  const addClient = () => {
    if (!form.name || !form.email) return
    setClients([...clients, { ...form }])
    setForm({ name: '', email: '', note: '' })
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>CRM Artemisia</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          placeholder='Nome'
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          style={{ marginRight: '1rem' }}
        />
        <input
          placeholder='Email'
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          style={{ marginRight: '1rem' }}
        />
        <input
          placeholder='Nota'
          value={form.note}
          onChange={e => setForm({ ...form, note: e.target.value })}
        />
        <button onClick={addClient} style={{ marginLeft: '1rem' }}>Aggiungi</button>
      </div>
      <ul>
        {clients.map((client, idx) => (
          <li key={idx}>
            <strong>{client.name}</strong> - {client.email}<br />
            <small>{client.note}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
