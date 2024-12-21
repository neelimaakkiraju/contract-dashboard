import React, { useState } from 'react';

const ContractModal = ({ contract, onClose, setContracts }) => {
  const [form, setForm] = useState(
    contract || { id: '', clientName: '', status: '' }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/contracts/${form.id || ''}`, {
      method: form.id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((newContract) => {
        setContracts((prev) =>
          form.id ? prev.map((c) => (c.id === form.id ? newContract : c)) : [...prev, newContract]
        );
        onClose();
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded">
        <h2 className="text-lg font-bold">{form.id ? 'Edit' : 'New'} Contract</h2>
        <div className="mt-2">
          <label className="block">Client Name:</label>
          <input
            type="text"
            value={form.clientName}
            onChange={(e) => setForm({ ...form, clientName: e.target.value })}
            className="border rounded w-full px-2 py-1"
            required
          />
        </div>
        <div className="mt-2">
          <label className="block">Status:</label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="border rounded w-full px-2 py-1"
            required
          >
            <option value="Draft">Draft</option>
            <option value="Finalized">Finalized</option>
          </select>
        </div>
        <div className="mt-4 flex justify-between">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContractModal;
