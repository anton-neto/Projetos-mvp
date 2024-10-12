import CalculadoraModel from '../model/CalculadoraModel';

class CalculadoraPresenter {
    constructor(visao) {
        this.visao = visao;
        this.modelo = new CalculadoraModel();
    }

    inputNum(value) {
        this.modelo.setValor(value);
        this.visao.setResultado(this.modelo.getExpressao()); 
    }

    setOperacao(operacao) {
        this.modelo.setOperacao(operacao);
        this.visao.setResultado(this.modelo.getExpressao()); 
    }

    calcular() {
        try {
            const resultado = this.modelo.calcular();
            this.visao.setResultado(resultado);
        } catch (error) {
            alert(error.message);
        }
    }

    limpar() {
        const resultado = this.modelo.limpar();
        this.visao.setResultado(resultado);
    }
}

export default CalculadoraPresenter;
