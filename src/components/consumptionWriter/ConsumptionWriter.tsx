import { Button } from "../button/Button";
import { Input } from "../input/Input";
import "./ConsumptionWriter.scss";

export const ConsumptionWriter: React.FC = () => {
  return (
    <ul className="list w-400 h-center">
      <li className="list-item">
        <Input>How much</Input>
      </li>
      <li className="list-item">
        <Input>For what</Input>
      </li>
      <li className="list-item">
        <Button>Submit</Button>
      </li>
    </ul>
  );
};
