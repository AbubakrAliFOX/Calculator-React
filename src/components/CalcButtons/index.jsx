import './style.css';

export default function CalcButtons ({logic}) {
    return (
        <form className="button-body">
          <section className="">
            <div className="row justify-content-center">
                <button className="col-11 reset-button px-1" onClick={logic.resetSum}>AC</button>
            </div>
            <div className="row justify-content-between mx-1">
                <button className="button number-button" onClick={logic.resetSum}>7</button>
                <button className="button number-button" onClick={logic.resetSum}>8</button>
                <button className="button number-button" onClick={logic.resetSum}>9</button>
                <button className="button" onClick={logic.divide}>/</button>
            </div>
            <div className="row justify-content-between mx-1 my-2">
                <button className="button number-button" onClick={logic.resetSum}>4</button>
                <button className="button number-button" onClick={logic.resetSum}>5</button>
                <button className="button number-button" onClick={logic.resetSum}>6</button>
                <button className="button" onClick={logic.multiply}>X</button>
            </div>
            <div className="row justify-content-between mx-1 my-2">
                <button className="button number-button" onClick={logic.resetSum}>1</button>
                <button className="button number-button" onClick={logic.resetSum}>2</button>
                <button className="button number-button" onClick={logic.resetSum}>3</button>
                <button className="button" onClick={logic.add}>+</button>
            </div>
            <div className="row justify-content-between mx-1 my-2">
                <button className="zero-button" onClick={logic.resetSum}>0</button>
                <button className="button number-button" onClick={logic.resetSum}>.</button>
                <button className="button" onClick={logic.add}>=</button>
            </div>
            {/* <input value={logic.input} onChange={logic.handleChange} type="number" /> */}
            
            {/* <button className="button" onClick={logic.subtract}>−</button> */}
            
            {/* <button className="button" onClick={resetInput}>RI</button> */}
          </section>
        </form>
    )
}