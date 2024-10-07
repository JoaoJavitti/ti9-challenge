import { Interface } from "readline";

export interface Supplier{
    [key:string]:any;
    id: number;
    codigo: string;
    nome: string;
    cnpjCpf:string;
    natureza: string;
    endereco: string;
    estado: string;
    ativo: boolean;
    aceitaPix: boolean;
    tipoChavePix: string;
    chavePix: string;
    observacao: string;
}