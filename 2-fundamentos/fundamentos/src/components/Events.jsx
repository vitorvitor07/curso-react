const Events = () => {
  const handleMyEvent = (event) => window.alert(event.type);

  const renderSomething = (x) => {
    if (x) {
      return (
        <>
          <div>X = true</div>
        </>
      );
    } else {
      return (
        <>
          <div>X = false</div>
        </>
      );
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>clique aqui!</button>
      </div>
      <div>
        <button onClick={() => window.alert("Exemplo de Arrow function")}>
          Exemplo de Arrow function
        </button>
      </div>
      {renderSomething(3)}
      {renderSomething(0)}
    </div>
  );
};

export default Events;
