import { IClients } from "src/app/interfaces/clients/iclients"; 
import { Comune } from "../Comune/comune";
import { Sede } from "../sede/sede";

export class Clients implements IClients{
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
    indirizzoSedeOperativa: Sede = new Sede();
    indirizzoSedeLegale: Sede = new Sede(); 
}