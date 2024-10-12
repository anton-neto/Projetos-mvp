import React from 'react';
import '../App.css';

const ContatoList = ({ contatos, editarContato, excluirContato }) => {
  return (
    <div>
      {contatos.map((contato) => (
        <div key={contato.id} className="contato-item">
          <span>{contato.nome} - {contato.telefone}</span>
          <button onClick={() => editarContato(contato)}>Editar</button>
          <button onClick={() => excluirContato(contato.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

export default ContatoList;
