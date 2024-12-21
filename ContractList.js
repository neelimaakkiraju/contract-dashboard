import React from 'react';

const ContractList = ({ contracts, onEdit }) => (
  <div className="mt-4">
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Client Name</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map((contract) => (
          <tr key={contract.id}>
            <td className="border px-4 py-2">{contract.id}</td>
            <td className="border px-4 py-2">{contract.clientName}</td>
            <td className="border px-4 py-2">{contract.status}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onEdit(contract)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ContractList;
