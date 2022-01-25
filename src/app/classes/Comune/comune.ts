import { IComune } from "src/app/interfaces/Comune/icomune";
import { Provincia } from "../Provincia/provincia";

export class Comune implements IComune {
  id!: number;
  nome!: string;
  provincia: Provincia = new Provincia();
}
