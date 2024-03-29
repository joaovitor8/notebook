const user = {nome: "Joao", idade: 63}


// ---------------------------------------------------------------------------------------------------

// Comandos
//   JSON
//     stringify  -  transforma o objeto tudo para texto  string
//     parce  -  tranforma em objeto

//   in
//     'nome' in user  -  existe a chave NOME no objeto USER?
  
//   Object.keys(user)  -  Retorna todas as CHAVES do meu objeto
//   Object.values(user)  -  Retorna todos os VALORES do meu objeto
//   Object.entries(user)

// ---------------------------------------------------------------------------------------------------

// rest operator  -  ...variavel

//   O rest operator é um recurso em JavaScript que permite que uma função receba um número indefinido de argumentos como um array. Ele é representado por três pontos consecutivos (...), colocados antes do último parâmetro da função.
//   Quando o rest operator é utilizado, todos os argumentos adicionais passados para a função após o último parâmetro são coletados em um array

// ---------------------------------------------------------------------------------------------------

// Desestruturação
//   Objeto  -  const user = {nome: 'João', idade: 21, sexo: 'M', oculos: True}
//   Array   -  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

//   const { nome, idade, ...rest } = user
//   const [ primeiro, segundo, ...rest ] = numeros

//   console.log(nome, idade, rest)
//   console.log(primeiro, segundo, rest)

// ---------------------------------------------------------------------------------------------------
