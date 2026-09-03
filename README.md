# Fetch API e Métodos HTTP

## Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de praticar o consumo e a manipulação de APIs REST utilizando JavaScript e a **Fetch API**.

A aplicação permite cadastrar, consultar e excluir tarefas através de requisições HTTP, atualizando a interface dinamicamente conforme as operações são realizadas.

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

  * `GET` — consulta as tarefas
  * `POST` — cadastra novas tarefas
  * `DELETE` — remove tarefas

## Funcionamento

A aplicação utiliza a Fetch API para realizar a comunicação entre o front-end e uma API REST.

O método `GET` é utilizado para buscar as tarefas e exibi-las na página. O `POST` envia uma nova tarefa para a API utilizando JSON. O `DELETE` utiliza o identificador (`_id`) da tarefa selecionada para removê-la.

Após as operações de cadastro ou exclusão, a aplicação realiza uma nova consulta à API para manter a lista de tarefas atualizada.

## Objetivo

O objetivo principal deste projeto é consolidar os fundamentos de comunicação entre uma aplicação front-end e uma API REST, compreendendo na prática o funcionamento das requisições HTTP, tratamento das respostas e atualização dinâmica da interface.

