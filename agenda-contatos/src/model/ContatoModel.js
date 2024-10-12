export default class ContatoModel {
    constructor() {
      this.contatos = [];
    }
  
    obterContatos() {
      return this.contatos;
    }
  
    adicionarContato(nome, telefone) {
      const novoContato = { id: Date.now(), nome, telefone };
      this.contatos.push(novoContato);
      return this.contatos;
    }
  
    editarContato(id, novoNome, novoTelefone) {
      const contatoIndex = this.contatos.findIndex(contato => contato.id === id);
      if (contatoIndex !== -1) {
        this.contatos[contatoIndex].nome = novoNome;
        this.contatos[contatoIndex].telefone = novoTelefone;
      }
      return this.contatos;
    }
  
    removerContato(id) {
      this.contatos = this.contatos.filter(contato => contato.id !== id);
      return this.contatos;
    }
  }
  