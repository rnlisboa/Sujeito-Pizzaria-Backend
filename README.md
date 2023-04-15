# Sujeito-Pizzaria-Backend
Projeto de Curso - Sujeito pizzaria é um projeto onde um usuário (garçom) pode coletar os pedidos dos clientes e enviar para cozinha, o usuário desta, por sua vez, recebe a listagem dos pedidos e confirma os que já estão prontos.

# API NodeJS com JWT para cadastro e login

Esta aplicação é uma API em NodeJS que utiliza o JWT para o sistema de autenticação. Ela permite o cadastro e login de usuários e fornece endpoints para cadastro, listagem e remoção de categorias, pedidos e itens de consumo. A sintaxe utilizada é Typescript.

# Como executar
Para executar a aplicação, siga os seguintes passos:

1. Clone este repositório em sua máquina local.
2. Abra um terminal na pasta raiz da aplicação.
3. Execute o comando `yarn install` para instalar as dependências do projeto.
4. Execute o comando `yarn dev` start para iniciar a aplicação.
5. Acesse http://localhost:3333 para utilizar a API.

# Endpoints

# Cadastro e Login

## POST /api/auth/signup - Cria um novo usuário. Deve receber o seguinte corpo:


{
	"name": "Renan",
	"email": "renan@gmail.com",
	"password": "123123"
}


## POST /api/auth/login - Faz o login do usuário. Deve receber o seguinte corpo:

<pre>
{
	"email": "renan@gmail.com",
	"password": "123123"
}
</pre>

A resposta terá um token JWT que deve ser utilizado para acessar os outros endpoints.

## GET /api/me - Consulte seu usuário. Retorna seu email, nome e ID:





# Categorias

## POST /api/category - Cria uma nova categoria. Deve receber o seguinte corpo:


{
  "name": "Categoria 1"
}

## GET /api/category - Retorna todas as categorias cadastradas.

# Itens de Consumo (PRODUTOS)

## POST /api/product - Cria um novo item de consumo. Deve receber o seguinte corpo:

- Multipart

name, price, description, categry_id, file (arquivo de imagem);

## GET /api/category/product - Retorna todos os itens de consumo cadastrados por categoria.

## DELETE /api/itens/:id - Remove o item de consumo com o ID informado.

# Pedidos

## POST /api/order - Cria um novo pedido. Deve receber o seguinte corpo:


{
	"table": 25
}

## POST /api/order/add - Adiciona ítem ao pedido. Deve receber o seguinte corpo:


{
	"order_id": "id do pedido criado.",
	"product_id": "id do produto que irá ser adicionado ao pedido",
	"amount": 5
}



## GET /api/order - Retorna todos os pedidos cadastrados.

## GET /api/order/detail?order_id=id - Retorna os itens de um pedido cadastrado.

## DELETE /api/order?order_id=id - Remove o pedido com o ID informado.

## DELETE /api/order/remove?item_id=id - Remove o item do pedido com o ID informado.

## PATCH /api/order/send - Envia o pedido à cozinha. Deve receber o seguinte corpo:

{
	"order_id": "d8ce35ff-74fa-4b78-8cfc-647b293e0cbd"
}

## PATCH /api/order/finish - A cozinha finaliza o pedido. Deve receber o seguinte corpo:

{
	"order_id": "d8ce35ff-74fa-4b78-8cfc-647b293e0cbd"
}

Licença
Este projeto está licenciado sob a licença MIT. Leia o arquivo LICENSE para mais informações.