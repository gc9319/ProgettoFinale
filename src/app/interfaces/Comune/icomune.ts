import { Provincia } from "src/app/classes/Provincia/provincia";

export interface IComune {
    id: number;
    nome: string;
    provincia: Provincia;
}
