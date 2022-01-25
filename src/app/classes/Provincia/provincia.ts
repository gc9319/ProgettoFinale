import { IProvincia } from "src/app/interfaces/Provincia/iprovincia";

export class Provincia implements IProvincia {
    id!: number;
    nome!: string;
    sigla!: string;
}
