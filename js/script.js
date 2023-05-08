console.log("Olá mundo");

 //comentario de linha
        /*
        comentario de bloco
        */
       //declarar uma variavel com a palavra reservada "var".
       //var nr1= "10";
       //var nr2= "5";
       //var resultado;

       //resultado= !(parseInt(nr1)%parseInt(nr2)) ? "PAR": "IMPAR";
       //console.log(`O Número é: ${resultado}`);

       //Diferença entre var/let/const
       //var nome1= "Leonardo";
       //let nome2= "Enzo";
       //var nome= "Leonardo";

       //if(nome !== ""){
        //let nome= "Edson"
      // }

       //console.log(nome);

      //ARRAY e seu métodos
      let frutas= ["banana", "maçã", "morango", "carambola", "acerola", "laranja"];
      console.log(frutas);
      console.table(frutas);
      console.log(frutas[2]);

      //Adicionar um item ao final do array com o método push(iten);
      frutas.push("melão");
      console.log(frutas);
      //Adicionar um iten no início do array com o método unshift(iten);
       frutas.unshift("caju");
       console.log(frutas);
       //Remover um iten do final do array com o método pop();
       //frutas.pop();
       //console.log(frutas);
       //Remover um iten do início do array com o método shift();
        frutas.shift();
        console.log(frutas);
       //Para localizar um iten dentro do array, utilizando o método indexOf(itenNome);
       let indice= frutas.indexOf ("morango");
       console.log("antes da remoção: "+ frutas[indice]);
       frutas.splice(indice, 2);
       console.log("depois da remoção: " + frutas[indice]);

       frutas.forEach( (fruta)=>{console.log("olha ele aí: "+ fruta)} );
       

       //Regras do const: 
       //1ª regra: Inicializar na declaração
       //const nome3= "Violante";
       //2ª regra: Não pode ser alterado durante o fluxo do programa.
       //nome3= "Jonathan";

       const PI= 3.14;

       //imprimir as variaveis com o objeto console.
       //console.log(nr1);
       //console.log(nr2);

       //realizando operações básicas com estes valores:
       //+, -, * e /

       //realizar a concatenação com o texto resultado:
       //Adição:
       //console.log("Resultado: "+(nr1+nr2));
       //console.log("Resultado: " + (parseInt(nr1)+parseInt(nr2)));
       //console.log(`Resultado adição: ${parseInt(nr1) + parseInt(nr2)}`);
       //subtração:
       //console.log(nr1-nr2);
       //console.log(`Resultado subtração: ${parseInt(nr1) - parseInt(nr2)}`);
       //multiplicação:
       //console.log(`Resultado multiplicação: ${parseInt(nr1) * parseInt(nr2)}`);
       //divisão:
       //console.log(`Resultado divisão: ${parseInt(nr1) / parseInt(nr2)}`);
       //O resto da divisão:
       //console.log(`Resto da divisão: ${parseInt(nr1) % parseInt(nr2)}`);
       //Descobrindo se um numero é par ou ímpar
       //Utilizando operador ternário (?).

       const inputUser = document.getElementById("idNm");
       console.log(inputUser.value);
