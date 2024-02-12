const RenderCalc = () => {
  return (
    <>
      <div className="calc">
        <h1>Mini Soma</h1>
        <form>
          <div>
            <label>Primeiro número</label>
            <br />
            <input type="number" name="n1" id="n1" />
          </div>
          <div>
            <label>Segundo número</label>
            <br />
            <input type="number" name="n2" id="n2" />
          </div>
          <div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                const n1 = Number(document.querySelector("#n1").value);
                const n2 = Number(document.querySelector("#n2").value);
                window.alert(n1 + n2);
              }}
            >
              Somar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RenderCalc;
