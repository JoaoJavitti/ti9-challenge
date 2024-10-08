import { Component, effect, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PgcFrameworkModule } from 'pgc-framework';
import { ShareDataService } from '../../services/share-formdata.service';
import { Supplier } from '../../interfaces/supplier.model';
import { getErrorMessagesForFormGroup } from '../../scripts/error-message';
import { CpfCnpjValidator } from '../../validators/cnpjcpf.validation';
import { DependentValidator } from '../../validators/dependent.validation';

@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule, PgcFrameworkModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  formConfig: any;
  elementForm: FormGroup = new FormGroup({});
  formData!: Supplier;
  shareFormDataService = inject(ShareDataService);
  formError = false;
  formSuccess = false;
  suppliers: Supplier[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    effect(() => {
      this.formData = this.shareFormDataService.getFormData(); //Atualiza os valores do formulário com base no Signal
      this.suppliers = this.shareFormDataService.getSuppliers(); //Recebe a lista de Fornecedores
      if (Object.keys(this.elementForm.controls).length > 0) {
        this.elementForm.setValue(this.formData, { emitEvent: false }); // Se o formulário já foi criado, inserir os valores recebidos
      }
    })
  }

  ngOnInit(): void {
    // Carregar as configurações do formulário
    this.http.get<any>('/assets/config/form-config.json').subscribe(config => {
      this.formConfig = config;
      this.elementForm = this.buildForm(config.form.fields);
    });
  }


  buildForm(fields: any[]): FormGroup {
    const group: any = {};

    fields.forEach(field => {
      const validators = this.getValidators(field); //  Retorna os validators com base no JSON
      group[field.name] = this.fb.control('', validators); // Cria o controle do formulário
      this.setUpdate(field, group); //  Define se o controle atualiza os demais controles
    });
    return this.fb.group(group); // Forma umm FormGroup com base nos controles criados
  }

  setUpdate(field: any, group: any) {
    field?.condition?.forEach((condition: any) => { //  Para cada campo no JSON
      const conditionField = group[condition.field];
      if (conditionField) {
        conditionField.valueChanges.subscribe((value: any) => { //  Se o campo é dependente de outro campo
          this.updateVisibility(field);                         //  o atualiza quando o campo do qual depende é
        });                                                     //  é alterado
      }
    });
  }

  updateVisibility(field: any) {
    if (this.showField(field))    //  Se o campo está visível
      this.elementForm.get(field.name)?.setValidators(this.getValidators(field)); //Atualiza os validators
  }

  getValidators(field: any): any[] {
    const validators = []; // Atualiza os validators a partir do arquivo JSON
    if (field.validation?.required) {
      validators.push(Validators.required);
    }
    if (field.validation?.maxLength) {
      validators.push(Validators.maxLength(field.validation.maxLength));
    }
    if (field.validation?.cnpjcpf) {
      validators.push(CpfCnpjValidator.cpfCnpjValidator)
    }
    if (field.validation?.dependent) {
      validators.push(DependentValidator.dependentValidator(field.validation?.dependent.control, field.validation?.dependent.value))
    }
    return validators;
  }

  getControl(controlName: string): FormControl { // Retorna o controle criado com base no nome, ou um controle vazio
    let control = this.elementForm.get(controlName) as FormControl;
    if (control != null) {
      return control;
    } else return new FormControl("");
  }

  showField(field: any): boolean {
    let show = true;
    field?.condition?.forEach((condition: any) => {
      const conditionField = this.elementForm.get(condition.field); //  Se a condição do campo (com base no json) for verdadeira
      show = show && conditionField?.value === condition.value;     //  o campo será renderizado na tela
    });

    return show;
  }

  onSubmit = (): void => {
    if (this.elementForm.valid) { //  Se o formulário é verdadeiro
      this.formSuccess = true;    //  Abre o dialog de sucesso
      this.shareFormDataService.createUpdate(this.elementForm.value as Supplier); //  Cria o novo fornecedor ou atualiza
      this.shareFormDataService.clearFormData(); // Limpa o formulário
    }
    else
      this.formError = true; // Abre o alert de erro
  }

  onAlertClose = (): void => {
    this.formError = false; //  Fecha o alert
  }

  message(): string {
    return getErrorMessagesForFormGroup(this.elementForm); // Retorna os erros do formulário e os imprime no alert
  }

  onReset = (): void => {
    this.shareFormDataService.clearFormData(); // Limpa o form
  }

  onDialogClose = (): void => {
    this.formSuccess = false; //  Fecha o dialog
  }
}
