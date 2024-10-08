import { computed, Injectable, signal } from "@angular/core";
import { Supplier } from "../interfaces/supplier.model";
import { combineLatest } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) export class ShareDataService {
    readonly formDataClear = { //   Data para o formulário vazio
        id: 0,
        codigo: "",
        nome: "",
        cnpjCpf: "",
        natureza: "",
        endereco: "",
        estado: "",
        ativo: false,
        aceitaPix: false,
        tipoChavePix: "",
        chavePix: "",
        observacao: ""
    };
    formData = signal<Supplier>(this.formDataClear); // Cria o signal do formulário

    suppliersData = signal<Supplier[]>([]); //  Cria o signal de lista de fornecedores

    constructor() { }

    setFormData(data: Supplier) {
        this.formData.update(() => data);   //  Atualiza o signal do formulário
    }

    getFormData(): Supplier {
        return this.formData(); //  Retorna o novo valor do formulário
    }

    clearFormData() {
        this.formData.update(() => this.formDataClear); //  Limpa o valor dos dados
    }

    getSuppliers() {
        return this.suppliersData();    // Retorna a lista de fornecedores
    }

    setSuppliers(data: Supplier[]) {
        this.suppliersData.update(() => data);  //  Atualiza a lista de fornecedores
    }

    createUpdate(data: Supplier) {
        const supplierArray = this.suppliersData(); //  Passa o valor para um array
        const duplicate = supplierArray.findIndex(sup => sup.id == data.id);    //  Checa se há algum fornecedor com o mesmo ID
        if (duplicate != -1)    //Se houver, atualiza esse fornecedor
            this.editSupplier(duplicate, data);
        else    //  Se não, adiciona um fornecedor
            this.pushSupplier(data);

    }

    pushSupplier(data: Supplier) {  //  Adiciona um novo fornecedor na lista
        if (this.getSuppliers().length > 0)
            data.id = this.suppliersData().reduce((a, b) => b.id > a.id ? b : a).id + 1;    //  Define o ID como superior ao maior ID na lista
        else data.id = 1;   //  Se não houver nenhum fornecedor, o ID é 1
        let supplierArray = [...this.suppliersData(), data];    //  Adicona o fornecedor na lsita
        this.suppliersData.update(() => supplierArray); //  Atualiza o valor no signal
    }

    removeSupplier(index: number, count = 1) {
        let supplierArray = [...this.suppliersData()];  //  Cria um novo array com os valores já inseridos
        supplierArray.splice(index, count); //  Remove um ou mais valores do fornecedor
        this.suppliersData.update(() => supplierArray); //  Atualiza o valor no signal
    }

    editSupplier(index: number, data: Supplier) {
        let supplierArray = [...this.suppliersData()];  //  Cria um novo array com os valores já inseridos
        supplierArray[index] = data;    //  Altera o valor anterior com o novo valor
        this.suppliersData.update(() => supplierArray); //  Atualiza o valor no signal
    }
}