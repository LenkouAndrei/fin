import "./App.scss";
import { ConsumptionWriter } from "./components/consumptionWriter/ConsumptionWriter";
import { Header } from "./components/header/Header";
import { Details } from "./components/details/Details";

const App: React.FC = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <Details />
      <main className="main">
        <ConsumptionWriter />
      </main>
    </div>
  );
};

export default App;
