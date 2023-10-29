import './style.css';

export default function CalcButtons ({logic}) {
    return (
        <form className="button-body">
          <section className="">
            <div className="row justify-content-between mx-1">
                <button className="col-9 reset-button px-1" onClick={logic.resetSum}>AC</button>
                <button className="button" value={'-'} onClick={logic.makeOperation}>−</button>
            </div>
            <div className="row justify-content-between mx-1">
                <button className="button number-button" value={7} onClick={logic.addNumber}>7</button>
                <button className="button number-button" value={8} onClick={logic.addNumber}>8</button>
                <button className="button number-button" value={9} onClick={logic.addNumber}>9</button>
                <button className="button" value={'/'} onClick={logic.makeOperation}>/</button>
            </div>
            <div className="row justify-content-between mx-1 my-2">
                <button className="button number-button" value={4} onClick={logic.addNumber}>4</button>
                <button className="button number-button" value={5} onClick={logic.addNumber}>5</button>
                <button className="button number-button" value={6} onClick={logic.addNumber}>6</button>
                <button className="button" value={'x'} onClick={logic.makeOperation}>X</button>
            </div>
            <div className="row justify-content-between mx-1 my-2">
                <button className="button number-button" value={1} onClick={logic.addNumber}>1</button>
                <button className="button number-button" value={2} onClick={logic.addNumber}>2</button>
                <button className="button number-button" value={3} onClick={logic.addNumber}>3</button>
                <button className="button" value={'+'} onClick={logic.makeOperation}>+</button>
            </div>
            <div className="row justify-content-between mx-1 my-2">
                <button className="zero-button" value={0} onClick={logic.addNumber}>0</button>
                <button className="button number-button" onClick={logic.addNumber}>.</button>
                <button className="button" onClick={logic.equals}>=</button>
            </div>
            {/* <input value={logic.input} onChange={logic.handleChange} type="number" /> */}
            
            
            
            {/* <button className="button" onClick={resetInput}>RI</button> */}
          </section>
        </form>
    )
}