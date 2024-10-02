import { FormControl } from "@angular/forms";

export const errorMessages: { [key: string]: { [key: string]: string } } = {
  required: {
    default: 'Este campo é obrigatório.',
  },
  email: {
    default: 'Por favor, insira um endereço de e-mail válido.',
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

export function getErrorMessage(control: FormControl): string {
  const errors = control.errors;
  let messages: string[] = [];
  if (errors != null) {
    Object.keys(errors).forEach((errorKey) => {
      const errorValue = errors[errorKey];
      let message = errorMessages[errorKey]?.['default']; // Acessando com colchetes

      if (message && typeof message === 'string' && errorValue) {
        Object.keys(errorValue).forEach(key => {
          message = message.replace(`{{${key}}}`, errorValue[key]);
        });
      }

      if (message) {
        messages.push(message);
      }
    });

    return messages.join(' ');
  }
  return "";
}

