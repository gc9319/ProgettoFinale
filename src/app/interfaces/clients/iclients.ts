import { Comune } from "src/app/classes/Comune/comune";

export interface IClients {
    id: number;
    ragioneSociale:string;
    partitaIva:number;
    tipoCliente:string;
    email:string;
    pec:string;
    telefono:string;
    nomeContatto:string;
    cognomeContatto:string;
    telefonoContatto:string;
    emailContatto:string;
    indirizzoSedeOperativa: {
        id: number;
        via: string;
        civico: string;
        cap: string;
        localita: string;
        comune: Comune
      };
      indirizzoSedeLegale: {
        id: number;
        via: string;
        civico: string;
        cap: string;
        localita: string;
        comune: Comune
      }
}
