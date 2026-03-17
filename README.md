# Atividade - Aula 02 - Typescript

Projeto criado para a Aula 02 do Programa TIC-HUB 12 Full Stack.

## Rodando o projeto

### Instalação

```
npm install
```

### Execução

```
npm run start
```

## Requisitos

### Classes/Interfaces

As classes/interfaces devem ter
 - [x] Category: id, name.
 - [x] Product: id, name, price, category (do tipo Category).
 - [x] User: id, username, email.
 - [x] Role: Deve ser estritamente "ADMIN" ou "CUSTOMER".

 #### 🛒 Carrinho

 O carrinho deve implementar funções equivalentes a:
 - [x] getTotalItems(): Retorna a quantidade total de unidades (soma das quantidades) no carrinho.
 - [x] getFinalPrice(): Retorna o valor monetário total da compra.

### 🔥 Desafio

Seção Desafio. Refatoração com High-Order Functions.

 - [x] Método addItem(product, quantity): Utilize .some() para verificar se o produto já existe no carrinho. Se existir, apenas aumente a quantidade; se não, adicione o novo item.
 - [x] Método getTotalItems(): Substitua o laço for ou forEach pelo método .reduce().
 - [x] Método getFinalPrice(): Refatore o cálculo do valor total utilizando também o método .reduce().

### ✅ Critérios para considerar a atividade como feita
 - [x] **Tipagem Completa**: O código não deve conter o uso de any.
 - [x] **Integridade da Role**: O sistema deve impedir (em tempo de compilação) a atribuição de papéis diferentes de ADMIN ou CUSTOMER.
 - [x] **Lógica de Acúmulo**: O carrinho deve ser capaz de somar quantidades de produtos repetidos sem duplicar as entradas no array.
 - [x] **Uso de HOF**: (Para quem optar pelo desafio) O uso de .reduce() e .some() deve estar implementado corretamente.