import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { cpfCnpjValidator, PgcFrameworkModule } from 'pgc-framework';
import { ShareDataService } from '../../scripts/share-formdata.service';
import { Supplier } from '../../interfaces/supplier.model';
import * as $ from 'jquery';
import { Console } from 'console';
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
export class FormComponent<T> implements OnInit {
  formConfig: any;
  elementForm: FormGroup = new FormGroup({});
  formData!: Supplier;
  shareFormDataService = inject(ShareDataService);
  formError = false;
  formSuccess = false;
  suppliers: Supplier[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    effect(() => {
      this.formData = this.shareFormDataService.getFormData();
      this.suppliers = this.shareFormDataService.getSuppliers();
      if (Object.keys(this.elementForm.controls).length > 0) {
        this.elementForm.setValue(this.shareFormDataService.getFormData(), { emitEvent: false });
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

  // Função para construir o formulário dinamicamente
  buildForm(fields: any[]): FormGroup {
    const group: any = {};

    fields.forEach(field => {
      const validators = this.getValidators(field);
      group[field.name] = this.fb.control('', validators);
      //console.log(group);
    });
    return this.fb.group(group);
  }

  // Função para obter as validações do campo
  getValidators(field: any): any[] {
    const validators = [];
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

  //Retorna os controles do Formulário para serem utilizados no HTML
  getControl(controlName: string): FormControl {
    let control = this.elementForm.get(controlName) as FormControl;
    if (control != null) {
      return control;
    } else return new FormControl("");
  }

  // Verifica se o campo deve ser exibido, considerando condições
  showField(field: any): boolean {
    let show = true;
    field?.condition?.forEach((condition: any) => {
      const conditionField = this.elementForm.get(condition.field);
      show = show && conditionField?.value === condition.value;
    });

    return show;
  }

  onSubmit = (): void => {
    if (this.elementForm.valid) {
      this.formSuccess = true;
      this.shareFormDataService.createUpdate(this.elementForm.value as Supplier);
      this.shareFormDataService.clearFormData();
    }
    else
      this.formError = true;
  }

  onAlertClose = (): void => {
    this.formError = false;
  }

  message(): string {
    return getErrorMessagesForFormGroup(this.elementForm);
  }

  onReset = (): void => {
    this.shareFormDataService.clearFormData();
  }

  onDialogClose = (): void => {
    this.formSuccess = false;
  }
}
