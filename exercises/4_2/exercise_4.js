//Com o mesmo código do exercício anterior, caso valor final seja maior que 20,
//imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: 
//“valor menor ou igual a 20”;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], soma = 0, media;

for (let c = 0; c < numbers.length; c++) {
    soma += numbers[c];
    media = soma/(numbers.length);
}

if (media > 20) {
    console.log("Valor maior que 20.");
} else {
    console.log("valor menor ou igual a 20");
}