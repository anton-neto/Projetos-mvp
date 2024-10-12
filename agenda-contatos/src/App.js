import React, { useState } from 'react';
import ContatoForm from './view/ContatoForm';
import ContatoList from './view/ContatoList';
import './App.css';

const App = () => {
  const [contatos, setContatos] = useState([]);
  const [contatoParaEditar, setContatoParaEditar] = useState(null);

  const adicionarContato = (novoContato) => {
    setContatos([...contatos, { ...novoContato, id: Date.now() }]);
  };

  const editarContato = (contatoEditado) => {
    setContatos(contatos.map(contato => (contato.id === contatoEditado.id ? contatoEditado : contato)));
    setContatoParaEditar(null); 
  };

  const excluirContato = (id) => {
    setContatos(contatos.filter(contato => contato.id !== id));
  };

  const iniciarEdicao = (contato) => {
    setContatoParaEditar(contato);
  };

  return (
    <div className="home-container">
      <h1>Agenda de Contatos</h1>
      <ContatoForm 
        adicionarContato={adicionarContato} 
        editarContato={editarContato} 
        contatoParaEditar={contatoParaEditar} 
      />
      <ContatoList 
        contatos={contatos} 
        editarContato={iniciarEdicao} 
        excluirContato={excluirContato} 
      />
    </div>
  );
};

export default App;
