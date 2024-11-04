# cypress-pageObjects-fcx

# Projeto de Testes Automatizados com Cypress usando Page Objects

Repositório contendo testes automatizados, que foram implementados com uso do Cypress e seguindo o padrão Page Objects.

## Estrutura do Projeto

A estrutura do projeto está organizada de acordo com as melhores práticas do Cypress e Page Objects:

<img width="259" alt="Screenshot 2024-11-04 at 12 21 39" src="https://github.com/user-attachments/assets/f5125eec-758c-4cf4-8feb-4827954ca1a4">

- e2e - Pasta com os cenários de testes.
- fixtures - Contém dados utilizados no teste (Por exemplo: dados de login do usuário).
- pages - Pasta com os arquivos do padrão Page Objects, com os dados e funções de cada página web.
- reports - Pasta contendo os reports gerados após execução dos testes.
- support - Contém os arquivos com funções de uso global como "Login" e "Before Each".


## Pré-requisitos

- [Node.js](https://nodejs.org/) versão 14 ou superior
- [Cypress](https://www.cypress.io/) versão [versão desejada]

## Execução dos testes - Local

1. Modo Interativo
   * `npx cypress open`

2. Modo Headless (linha de comando)
  * `npx cypress run`


## Execução dos testes e Reports - Github Actions

- Acessar a aba actions

- Escolher a opção Cypress-tests e clicar em Run workflow - Run workflow

<img width="1419" alt="Screenshot 2024-11-04 at 12 39 20" src="https://github.com/user-attachments/assets/4482f3bf-7dc3-4b39-809a-6b44afeaf298">

### Relatórios

- Clicar na última execução

- Rolar a página até a seção Artifacts e baixar os relatórios.

  <img width="1420" alt="Screenshot 2024-11-04 at 12 47 19" src="https://github.com/user-attachments/assets/0b3caf94-5eee-428e-be94-25044634c307">

- Abrir o arquivo index.html em um navegador.
