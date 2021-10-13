import './App.scss';
import React, { useState, useEffect } from 'react';
import { ConsumptionWriter } from './components/consumptionWriter/ConsumptionWriter';
import { Header } from './components/header/Header';
import { Details } from './components/details/Details';
import spendingsService, { ISpending } from './services/spendings.service';
import sumsService from './services/sum.service';

const App: React.FC = () => {
  const [spendings, setSpendings] = useState<ISpending[]>([]);
  const [spentMoney, setSpentMoney] = useState(0);
  const [restMoney, setRestMoney] = useState(0);

  const updateData = (): void => {
    const newSpendings = spendingsService.getAllSpendings();
    const { rest, spent } = sumsService.getSums();
    setSpendings(newSpendings);
    setSpentMoney(spent);
    setRestMoney(rest);
  };
  
  useEffect(() => {
    updateData();
  }, []);

  return (
    <div className="page-wrapper">
      <Header spent={spentMoney} restSum={restMoney}/>
      <Details spendings={spendings}/>
      <main className="main">
        <ConsumptionWriter updateData={updateData} />
      </main>
    </div>
  );
};

export default App;
