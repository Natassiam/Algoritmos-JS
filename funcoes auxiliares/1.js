const soma = (num1, num2, num3) => {
return num1 + num2 + num3;
}
/* console.log(soma(3,6,9)); */


const media = (num1, num2, num3) => {
/*   let somaTudo = num1 + num2 + num3; */
  return soma(num1, num2, num3)/3;
}
console.log(media(3,6,9));