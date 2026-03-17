# Sistema de e-commerce com tipagem avançada

Um projeto construído para demonstrar aplicação prática de programação orientada a objetos (POO) e tipagem estrita em TypeScript. Desenvolvido como atividade da Aula 02 do Programa TIC-HUB 12 Full Stack.

## 🚀 Como executar

### Instalação de dependências

```bash
npm install
```

### Iniciar a aplicação

```bash
npm run start
```

## 📋 Arquitetura do projeto

### Modelos de dados implementados

O sistema é composto pelas seguintes entidades:

- **Category**: Representa categorias de produtos com identificadores únicos
- **Product**: Define produtos com atributos como preço e associação a categorias
- **User**: Gerencia usuários do sistema com autenticação via roles
- **Role**: Sistema de permissões restrito a dois níveis (ADMIN e CUSTOMER)

### Componente principal: carrinho de compras

O cart implementa:
- [x] **getTotalItems()**: Calcula o total de unidades em estoque na sessão do carrinho
- [x] **getFinalPrice()**: Computa o valor bruto da compra considerando descontos aplicáveis

## 💡 Desafios avançados implementados

Aplicação de padrões funcionais para melhorar legibilidade e manutenibilidade:

- [x] **Validação com .some()**: Detecta produtos duplicados antes de inseri-los no carrinho, incrementando quantidade ao invés de criar entrada duplicada
- [x] **Agregação com .reduce()**: A contagem total de itens utiliza reduce para processamento declarativo
- [x] **Cálculo monetário com .reduce()**: O processamento do preço final também aproveita reduce para somatória acumulativa

## ✨ Padrões de qualidade

Critérios observados durante o desenvolvimento:

- [x] **Type safety completa**: Nenhuma utilização de tipos `any`, garantindo segurança em tempo de compilação
- [x] **Validação de permissões**: O compilador TypeScript rejeita valores de role que não sejam os permitidos
- [x] **Integridade de quantidades**: Produtos adicionados múltiplas vezes têm suas quantidades acumuladas corretamente
- [x] **Código declarativo**: Implementação de high-order functions para padrões de busca e agregação