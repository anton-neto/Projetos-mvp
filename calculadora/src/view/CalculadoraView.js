import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import '../App.css';

const CalculadoraView = ({ resultado, onOperacao, onLimpar, onInputNum, onCalcular }) => {
    return (
        <div className="calculadora-container"> {}
            <header className="header">
                <h1>Calculadora</h1>
            </header>
            <Container maxWidth="xs" className="wrapper">
                <h1 className="result">{resultado}</h1>
                <div>
                    <button onClick={() => onInputNum('1')}>1</button>
                    <button onClick={() => onInputNum('2')}>2</button>
                    <button onClick={() => onInputNum('3')}>3</button>
                    <button onClick={() => onOperacao('+')}>+</button>
                </div>
                <div>
                    <button onClick={() => onInputNum('4')}>4</button>
                    <button onClick={() => onInputNum('5')}>5</button>
                    <button onClick={() => onInputNum('6')}>6</button>
                    <button onClick={() => onOperacao('-')}>-</button>
                </div>
                <div>
                    <button onClick={() => onInputNum('7')}>7</button>
                    <button onClick={() => onInputNum('8')}>8</button>
                    <button onClick={() => onInputNum('9')}>9</button>
                    <button onClick={() => onOperacao('*')}>*</button>
                </div>
                <div>
                    <button onClick={() => onInputNum('0')}>0</button>
                    <button onClick={onLimpar}>AC</button>
                    <button onClick={() => onOperacao('/')}>/</button>
                    <button onClick={onCalcular}>=</button>
                </div>
            </Container>
            <footer className="footer">
                <p>Antonio Neto <br/> RGM: 8833702233</p>
            </footer>
        </div>
    );
};

export default CalculadoraView;
