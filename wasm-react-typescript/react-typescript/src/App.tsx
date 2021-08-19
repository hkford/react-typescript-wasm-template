import React from "react";
import { sums, fib } from "../../pkg/wasm_react_typescript_bg.wasm"
import { useState } from "react";

function fibonacciByJS(x: number): number {
    if (x === 0 || x === 1) {
        return x
    } else {
        return fibonacciByJS(x - 2) + fibonacciByJS(x - 1)
    }
}

const App = () => {
    const [sum, setSum] = useState(0);
    const [fiboNumberJS, setFiboNumberJS] = useState(0);
    const [fiboNumberJSTime, setfiboNumberJSTime] = useState(0);
    const [fiboNumberWASM, setFiboNumberWASM] = useState(0);
    const [fiboNumberWASMTime, setfiboNumberWASMTime] = useState(0);
    return (
        <div>
            <h2>Calculate sum</h2>
            <input
                onChange={(e) => {
                    const v = Number(e.target.value);
                    !isNaN(v) && setSum(sums(v));
                }}
            />
            <div>{sum}</div>
            <h2>Calculate Fibonacci number by JavaScript</h2>
            <input
                onChange={(e) => {
                    const startTime = performance.now();
                    const v = Number(e.target.value);
                    !isNaN(v) && setFiboNumberJS(fibonacciByJS(v));
                    const endTime = performance.now();
                    setfiboNumberJSTime(endTime - startTime);
                }}
            />
            <div>{fiboNumberJS}</div>
            <div>{fiboNumberJSTime}</div>
            <h2>Calculate Fibonacci number by WASM</h2>
            <input
                onChange={(e) => {
                    const startTime = performance.now();
                    const v = Number(e.target.value);
                    !isNaN(v) && setFiboNumberWASM(fib(v));
                    const endTime = performance.now();
                    setfiboNumberWASMTime(endTime - startTime);
                }}
            />
            <div>{fiboNumberWASM}</div>
            <div>{fiboNumberWASMTime}</div>
        </div>
    );
};

export default App;