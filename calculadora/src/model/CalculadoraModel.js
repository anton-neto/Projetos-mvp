class CalculadoraModel {
    constructor() {
        this.resultado = 0;          
        this.expressao = '';         
        this.valorAtual = null;      
        this.operacao = null;        
    }

    setValor(valor) {
        this.valorAtual = parseFloat(valor); 
        this.expressao += valor;             
    }

    setOperacao(operacao) {
        if (this.valorAtual === null) return; 

        if (this.operacao) { 
            this.calcular();
        }

        this.operacao = operacao;          
        this.expressao += ` ${operacao} `;
        this.resultado = this.valorAtual;  
        this.valorAtual = null;            
    }

    calcular() {
        if (this.valorAtual === null || this.operacao === null) return this.resultado; 

        switch (this.operacao) {
            case '+':
                this.resultado += this.valorAtual;
                break;
            case '-':
                this.resultado -= this.valorAtual;
                break;
            case '*':
                this.resultado *= this.valorAtual;
                break;
            case '/':
                if (this.valorAtual === 0) {
                    throw new Error("Divisão por zero!");
                }
                this.resultado /= this.valorAtual;
                break;
            default:
                break;
        }

        this.operacao = null;  
        this.valorAtual = null; 
        return this.resultado;  
    }

    limpar() {
        this.resultado = 0;
        this.valorAtual = null;
        this.operacao = null;
        this.expressao = ''; 
        return this.resultado;
    }

    getResultado() {
        return this.resultado;
    }

    getExpressao() {
        return this.expressao || '0'; 
    }
}

export default CalculadoraModel;
