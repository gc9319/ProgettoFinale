import { IUser } from "src/app/interfaces/user/i-user";

export class User implements IUser {
    id!: number;
    ragioneSociale!: string;
    partitaIva!: number;
    tipoCliente!: string;
    email!: string;
    pec!: string;
    telefono!: string;
    nomeContatto!: string;
    cognomeContatto!: string;
    telefonoContatto!: string;
    emailContatto!: string;
}
