
import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  const [counter ] = useCounterContext();

  return (
    <div>
      {/* Consumindo context */}
      {/* Mudar de página não reseta o contexto */}
      <h1>Home counter: {counter}</h1>
      {/* Alterando context */}
      <ChangeCounter></ChangeCounter>
    </div>
  );
};

export default Home;
