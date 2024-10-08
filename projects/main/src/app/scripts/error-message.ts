import { FormControl, FormGroup } from "@angular/forms";

export const errorMessages: { [key: string]: { [key: string]: string } } = {
  required: {
    default: 'Este campo é obrigatório.',
  },
  email: {
    default: 'Insira um endereço de e-mail válido.',
  },
  minlength: {
    default: 'A entrada é muito curta. Mínimo: {{requiredLength}} caracteres.',
  },
  maxlength: {
    default: 'A entrada é muito longa. Máximo: {{requiredLength}} caracteres.',
  },
  pattern: {
    default: 'A entrada não corresponde ao padrão requerido.',
  },
  min: {
    default: 'O valor deve ser maior ou igual a {{min}}.',
  },
  max: {
    default: 'O valor deve ser menor ou igual a {{max}}.',
  },
  cpfCnpjInvalidLength: {
    default: 'O valor não corresponde a um CPF ou CNPJ',
  }
};

export function getErrorMessagesForFormGroup(formGroup: FormGroup): string {
    let messages: string[] = [];
  
    Object.keys(formGroup.controls).forEach(controlName => { // Para cada controle do formulário
      const control = formGroup.get(controlName) as FormControl;
  
      if (control && control.errors) {
        const controlErrors = control.errors; // Se o controle possui erros
  
        Object.keys(controlErrors).forEach(errorKey => {  //  Para cada erro no controle
          const errorValue = controlErrors[errorKey];
          let message = errorMessages[errorKey]?.['default']; //  Troca a mensagem pela do dictonary acima
  
          if (message && typeof message === 'string' && errorValue) { //  Se possui uma mensagem de erro
            Object.keys(errorValue).forEach(key => {
              message = message.replace(`{{${key}}}`, errorValue[key]); //  Substitui os erros padrão pelos do dictionary
            });
          }
  
          if (message) {
            // Adicionando o nome do controle na mensagem para referência
            messages.push(`\n${controlName.charAt(0).toUpperCase() + controlName.slice(1)}: ${message}`);
          }
        });
      }
    });
  
    return messages.join(''); // Concatena todas as mensagens em uma string
  }

