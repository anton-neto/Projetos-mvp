export default class ContatoPresenter {
    constructor(atualizarContatos) {
      this.atualizarContatos = atualizarContatos;
    }
  
    carregarContatos() {
      // Aqui você pode carregar os contatos de uma fonte externa se necessário
    }
  
    adicionarContato = (contato) => {
      this.atualizarContatos(prev => [...prev, { ...contato, id: Date.now() }]);
    };
  
    editarContato = (id, novoNome, novoTelefone) => {
      this.atualizarContatos(prev =>
        prev.map(contato => (contato.id === id ? { ...contato, nome: novoNome, telefone: novoTelefone } : contato))
      );
    };
  
    removerContato = (id) => {
      this.atualizarContatos(prev => prev.filter(contato => contato.id !== id));
    };
  }
  