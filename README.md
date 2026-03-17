# Sistema de E-commerce com Tipagem Avançada

Um projeto construído para demonstrar aplicação prática de programação orientada a objetos (POO) e tipagem estrita em TypeScript. Desenvolvido como atividade da Aula 02 do Programa TIC-HUB 12 Full Stack.

## 🚀 Como Executar

### Instalação de Dependências

```bash
npm install
```

### Iniciar a Aplicação

```bash
npm run start
```

## 📋 Arquitetura do Projeto

### Modelos de Dados Implementados

O sistema é composto pelas seguintes entidades:

- **Category**: Representa categorias de produtos com identificadores únicos
- **Product**: Define produtos com atributos como preço e associação a categorias
- **User**: Gerencia usuários do sistema com autenticação via roles
- **Role**: Sistema de permissões restrito a dois níveis (ADMIN e CUSTOMER)

### Componente Principal: Carrinho de Compras

O Cart implementa:
- [x] **getTotalItems()**: Calcula o total de unidades em estoque na sessão do carrinho
- [x] **getFinalPrice()**: Computa o valor bruto da compra considerando descontos aplicáveis

## 💡 Desafios Avançados Implementados

Aplicação de padrões funcionais para melhorar legibilidade e manutenibilidade:

- [x] **Validação com .some()**: Detecta produtos duplicados antes de inseri-los no carrinho, incrementando quantidade ao invés de criar entrada duplicada
- [x] **Agregação com .reduce()**: A contagem total de itens utiliza reduce para processamento declarativo
- [x] **Cálculo Monetário com .reduce()**: O processamento do preço final também aproveita reduce para somatória acumulativa

## ✨ Padrões de Qualidade

Critérios observados durante o desenvolvimento:

- [x] **Type Safety Completa**: Nenhuma utilização de tipos `any`, garantindo segurança em tempo de compilação
- [x] **Validação de Permissões**: O compilador TypeScript rejeita valores de role que não sejam os permitidos
- [x] **Integridade de Quantidades**: Produtos adicionados múltiplas vezes têm suas quantidades acumuladas corretamente
- [x] **Código Declarativo**: Implementação de high-order functions para padrões de busca e agregação