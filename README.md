# Fetch API e Métodos HTTP

## Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar o consumo e a manipulação de APIs REST utilizando JavaScript e a **Fetch API**.

A aplicação permite cadastrar, consultar e excluir clientes através de requisições HTTP, atualizando a interface dinamicamente conforme as operações são realizadas.

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Fetch API
* API REST
* JSON

## Conceitos Praticados

* Requisições HTTP
* `fetch()`
* `async/await`
* Promises
* `JSON.stringify()`
* `response.json()`
* Manipulação do DOM
* Eventos `click`
* `data-*` attributes
* Métodos HTTP:

  * `GET` — consulta clietes
  * `POST` — cadastra clientes
  * `DELETE` — remove clientes

## Funcionamento

A aplicação utiliza a Fetch API para realizar a comunicação entre o front-end e uma API REST.

O método `GET` é utilizado para buscar clientes e exibi-los na página. O `POST` envia um novo cliente para a API utilizando JSON. O `DELETE` utiliza o identificador (`_id`) do cliente selecionada para removê-la.

Após as operações de cadastro ou exclusão, a aplicação realiza uma nova consulta à API para manter a lista de cliente atualizada.

## Objetivo

O objetivo principal deste projeto é consolidar os fundamentos de comunicação entre uma aplicação front-end e uma API REST, compreendendo na prática o funcionamento das requisições HTTP, tratamento das respostas e atualização dinâmica da interface.

