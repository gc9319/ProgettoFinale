import { IStatoFattura } from "src/app/interfaces/StatoFattura/istato-fattura";

export class StatoFattura implements IStatoFattura {
    id!: number;
    nome!: string;
}
