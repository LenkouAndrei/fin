import { ChangeEvent, useState } from 'react';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import spendingsService from '../../services/spendings.service';
import sumsService from '../../services/sum.service';
import './ConsumptionWriter.scss';

const DEFAULT_CATEGORY = '';
const DEFAULT_COST = '';

interface IConsumptionWriter {
  updateData(): void;
}

export const ConsumptionWriter: React.FC<IConsumptionWriter> = ({
  updateData,
}: IConsumptionWriter) => {
  const [category, setCategory] = useState(DEFAULT_CATEGORY);
  const [cost, setCost] = useState<number | string>(DEFAULT_COST);

  const categoryChanged = (event: ChangeEvent): void => {
    const test = (event.target as HTMLInputElement).value;
    setCategory(test);
  };

  const costChanged = (event: ChangeEvent): void => {
    const test = (event.target as HTMLInputElement).value;
    setCost(+test);
  };

  const submit = () => {
    const id = `${Date.now()}-${category}`;
    spendingsService.addSpending({ spendingName: category, amount: +cost, id });
    sumsService.addSum('rest', -cost);
    sumsService.addSum('spent', +cost);
    updateData();
    setCategory(DEFAULT_CATEGORY);
    setCost(DEFAULT_COST);
  };

  return (
    <ul className="list w-400 h-center">
      <li className="list-item">
        <Input onChange={costChanged} placeholder="How much">
          {cost}
        </Input>
      </li>
      <li className="list-item">
        <Input onChange={categoryChanged} placeholder="What for">
          {category}
        </Input>
      </li>
      <li className="list-item">
        <Button onClick={submit}>Submit</Button>
      </li>
    </ul>
  );
};
