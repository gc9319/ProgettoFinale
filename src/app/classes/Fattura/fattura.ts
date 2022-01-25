import { IFattura } from "src/app/interfaces/Fattura/ifattura";
import { Clients } from "../clients/clients";
import { StatoFattura } from "../StatoFattura/stato-fattura";

export class Fattura implements IFattura {
  id!: number;
  data!: string;
  numero!: number;
  anno!: number;
  importo!: number;
  stato: StatoFattura = new StatoFattura();
  cliente: Clients = new Clients();
}
