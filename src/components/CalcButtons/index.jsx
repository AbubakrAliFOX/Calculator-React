export default function CalcButtons ({logic}) {
    return (
        <form>
          <input value={logic.input} onChange={logic.handleChange} type="number" />
          <button className="button" onClick={logic.add}>+</button>
          <button className="button" onClick={logic.subtract}>−</button>
          <button className="button" onClick={logic.multiply}>X</button>
          <button className="button" onClick={logic.divide}>/</button>
          {/* <button className="button" onClick={resetInput}>RI</button> */}
          <button className="button" onClick={logic.resetSum}>AC</button>
        </form>
    )
}