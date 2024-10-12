import React, { useState, useEffect } from 'react';
import CalculadoraView from './view/CalculadoraView';
import CalculadoraPresenter from './presenter/CalculadoraPresenter';
import './App.css';

const App = () => {
    const [resultado, setResultado] = useState('0'); 
    const [apresentador, setApresentador] = useState(null);

    useEffect(() => {
        const novoApresentador = new CalculadoraPresenter({
            setResultado,
        });
        setApresentador(novoApresentador);
    }, []);

    const onOperacao = (operacao) => {
        if (apresentador) {
            apresentador.setOperacao(operacao);
        }
    };

    const onLimpar = () => {
        if (apresentador) {
            apresentador.limpar();
        }
    };

    const onInputNum = (valor) => {
        if (apresentador) {
            apresentador.inputNum(valor);
        }
    };

    const onCalcular = () => {
        if (apresentador) {
            apresentador.calcular();
        }
    };

    return (
        <div className="calculadora-container">
            <CalculadoraView 
                resultado={resultado} 
                onOperacao={onOperacao} 
                onLimpar={onLimpar}
                onInputNum={onInputNum}
                onCalcular={onCalcular}
            />
        </div>
    );
};

export default App;
