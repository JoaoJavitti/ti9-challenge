# Desafio Frontend Angular - Ti9 Sistemas

## Introdução
Este projeto foi desenvolvido como resposta ao desafio para a vaga de desenvolvedor frontend Angular na Ti9 Sistemas. A aplicação é um sistema de gerenciamento de fornecedores, permitindo a realização de operações de CRUD (Criar, Ler, Atualizar, Excluir) de maneira dinâmica, utilizando Angular 18 e Angular Material.

## Tecnologias Utilizadas
- **Angular 18**
- **Angular Material 18**
- **TypeScript**
- **HTML/CSS**
- **JSON para configuração dinâmica**
- **Framework de design PGC-Framework (desenvolvido por mim)**

## Funcionalidades

### Montagem Dinâmica de Telas
- A aplicação utiliza um arquivo externo `.json` para definir e renderizar dinamicamente os campos dos formulários e as colunas da tabela de listagem de fornecedores.

### Listagem de Fornecedores
- Exibição de uma lista de fornecedores em um datatable do Angular Material com as seguintes colunas:
  - **Código:** Alfanumérico.
  - **Nome:** Nome do fornecedor ou nome fantasia (para pessoa jurídica).
  - **CPF/CNPJ:** Exibe o CPF se for pessoa física ou o CNPJ se for pessoa jurídica.
  - **Botões de Ação:** Inclui os botões de ações Novo, Editar e Excluir.

### Formulário de Cadastro/Atualização de Fornecedores
- Formulário dinâmico para criar ou editar fornecedores, com os seguintes campos:
  - **Código:** Input (text), Requerido, tamanho máximo de 6 caracteres.
  - **Nome:** Input (text), Requerido.
  - **Natureza:** Select (Pessoa Física ou Jurídica), Requerido.
  - **Endereço:** Input (text), Requerido.
  - **Estado (UF):** Select (Selecionar o Estado), Requerido.
  - **Ativo:** Boolean (slide-toggle), indica se o fornecedor está ativo.
  - **Aceita Pix:** Boolean (checkbox), indica se o fornecedor aceita pagamentos via Pix.
  - **Tipo de Chave Pix:** Select (CNPJ/CPF, E-mail, Celular, Chave Aleatória), exibido se "Aceita Pix" for verdadeiro.
  - **Chave Pix:** Input (text), exibido se "Aceita Pix" for verdadeiro.
  - **Observações:** Textarea, campo opcional para adicionar observações adicionais.

### Ações no Formulário
- Após as operações de Incluir, Alterar ou Excluir um fornecedor, a listagem é automaticamente atualizada.
- Mensagens de sucesso ou erro são exibidas conforme o resultado das operações.

### Persistência dos Dados
- Os dados são armazenados em memória durante a execução da aplicação sendo possível utilizar `localStorage` para preservá-los após o fechamento do navegador.

## Demo Online

Você pode visualizar o projeto em execução no StackBlitz:

[Visualizar no StackBlitz]([https://stackblitz.com/edit/seu-projeto](https://stackblitz.com/edit/stackblitz-starters-4mklpu?embed=1&file=projects%2Fmain%2Fsrc%2Fapp%2Fcomponents%2Ftable%2Ftable.component.html))

## Como Rodar o Projeto
Para executar a aplicação, utilize o seguinte comando:
```bash
ng serve main
```

#Considerações Finais
Este projeto foi uma excelente oportunidade para aplicar as novas funcionalidades do Angular 18 e demonstrar habilidades em componentização e criação de interfaces dinâmicas. Além disso, foi utilizado um framework desenvolvido por mim para facilitar a reutilização de componentes.

#Contribuições
Agradeço pela oportunidade de participar deste desafio e estou aberto a sugestões e feedbacks.
