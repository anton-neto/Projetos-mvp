import React, { useState, useEffect } from 'react';
import '../App.css';

const ContatoForm = ({ adicionarContato, editarContato, contatoParaEditar }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');


  useEffect(() => {
    if (contatoParaEditar) {
      setNome(contatoParaEditar.nome);
      setTelefone(contatoParaEditar.telefone);
    } else {
      setNome('');
      setTelefone('');
    }
  }, [contatoParaEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contatoParaEditar) {
      
      editarContato({ ...contatoParaEditar, nome, telefone });
    } else {
      
      adicionarContato({ nome, telefone });
    }
    
    setNome('');
    setTelefone('');
  };

  const handleNomeChange = (e) => {
    
    const value = e.target.value;
    if (/^[a-zA-ZÀ-ÿ\s]*$/.test(value)) {
      setNome(value);
    }
  };

  const handleTelefoneChange = (e) => {
    
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setTelefone(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={handleNomeChange} 
        required
        pattern="[A-Za-zÀ-ÿ\s]+" 
        title="Somente letras são permitidas"
      />
      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={handleTelefoneChange} 
        required
        pattern="\d*" 
        title="Somente números são permitidos"
      />
      <button type="submit">
        {contatoParaEditar ? 'Editar Contato' : 'Adicionar Contato'}
      </button>
    </form>
  );
};

export default ContatoForm;
