const TemplateExpressions = () => {
  let { name, job } = {
    name: "Vitor",
    job: "Dev"
  };

  return (
    <>
      <div>
        <h3>Segundo Componente</h3>
        <p>Name: {name}</p>
        <p>Job: {job}</p>
      </div>
    </>
  );
};

export default TemplateExpressions;
