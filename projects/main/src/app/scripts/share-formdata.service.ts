import { computed, Injectable, signal } from "@angular/core";
import { Supplier } from "../interfaces/supplier.model";
import { combineLatest } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) export class ShareDataService {
    readonly formDataClear = {
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
    formData = signal<Supplier>(this.formDataClear);

    suppliersData = signal<Supplier[]>([]);

    constructor() { }

    setFormData(data: Supplier) {
        this.formData.update(() => data);
    }

    getFormData(): Supplier {
        return this.formData();
    }

    clearFormData(){
        this.formData.update(() => this.formDataClear);
    }

    getSuppliers() {
        return this.suppliersData();
    }

    createUpdate(data: Supplier) {
        const supplierArray = this.suppliersData();
        const duplicate = supplierArray.findIndex(sup => sup.codigo == data.codigo);
        if (duplicate != -1)
            this.editSupplier(duplicate, data);
        else
            this.pushSupplier(data);

    }

    pushSupplier(data: Supplier) {
        let supplierArray = [...this.suppliersData(), data];
        this.suppliersData.update(() => supplierArray);
    }

    removeSupplier(index: number, count = 1) {
        let supplierArray = [...this.suppliersData()];
        supplierArray.splice(index, count);
        this.suppliersData.update(() => supplierArray);
    }

    editSupplier(index: number, data: Supplier) {
        let supplierArray = [...this.suppliersData()];
        supplierArray[index] = data;
        this.suppliersData.update(() => supplierArray);
    }
}