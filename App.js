import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ContractList from './components/ContractList';
import ContractModal from './components/ContractModal';
import LightDarkToggle from './components/LightDarkToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [contracts, setContracts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/contracts')
      .then((res) => res.json())
      .then((data) => setContracts(data));
  }, []);

  const openModal = (contract) => {
    setSelectedContract(contract);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedContract(null);
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <LightDarkToggle />
        <main className="p-4">
          <button
            onClick={() => openModal(null)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Generate New Contract
          </button>
          <ContractList contracts={contracts} onEdit={openModal} />
        </main>
        {isModalOpen && (
          <ContractModal
            contract={selectedContract}
            onClose={closeModal}
            setContracts={setContracts}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
