let option1=0;
let option2=0;
let option3=0;
let prato;
let bebida;
let sobremesa;
let preco1;
let preco2;
let preco3;

function selectoption1(){
  document.getElementById('prato1').style.borderColor = "green";
  document.getElementById('prato2').style.borderColor = "white";
  document.getElementById('prato3').style.borderColor = "white";
  document.getElementById('prato4').style.borderColor = "white";
  document.getElementById('p1').style.display = "flex";
  document.getElementById('p2').style.display = "none";
  document.getElementById('p3').style.display = "none";
  document.getElementById('p4').style.display = "none";
  option1=1;
  prato = document.querySelectorAll("h3")[0].textContent;
  preco1 = document.querySelectorAll(".preco")[0].textContent;
  let soma = (option1+option2+option3);
  if (soma==3){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  }
}

function selectoption2(){
  document.getElementById('prato1').style.borderColor = "white";
  document.getElementById('prato2').style.borderColor = "green";
  document.getElementById('prato3').style.borderColor = "white";
  document.getElementById('prato4').style.borderColor = "white";
  document.getElementById('p1').style.display = "none";
  document.getElementById('p2').style.display = "flex";
  document.getElementById('p3').style.display = "none";
  document.getElementById('p4').style.display = "none";
  option1=1;
  prato = document.querySelectorAll("h3")[1].textContent;
  preco1 = document.querySelectorAll(".preco")[1].textContent;
  let soma = (option1+option2+option3);
  if (soma==3){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  }
}

function selectoption3(){
  document.getElementById('prato1').style.borderColor = "white";
  document.getElementById('prato2').style.borderColor = "white";
  document.getElementById('prato3').style.borderColor = "green";
  document.getElementById('prato4').style.borderColor = "white";
  document.getElementById('p1').style.display = "none";
  document.getElementById('p2').style.display = "none";
  document.getElementById('p3').style.display = "flex";
  document.getElementById('p4').style.display = "none";
  option1=1;
  prato = document.querySelectorAll("h3")[2].textContent;
  preco1 = document.querySelectorAll(".preco")[2].textContent;
  let soma = (option1+option2+option3);
  if (soma==3){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  }
}

function selectoption4(){
  document.getElementById('prato1').style.borderColor = "white";
  document.getElementById('prato2').style.borderColor = "white";
  document.getElementById('prato3').style.borderColor = "white";
  document.getElementById('prato4').style.borderColor = "green";
  document.getElementById('p1').style.display = "none";
  document.getElementById('p2').style.display = "none";
  document.getElementById('p3').style.display = "none";
  document.getElementById('p4').style.display = "flex";
  option1=1;
  prato = document.querySelectorAll("h3")[3].textContent;
  preco1 = document.querySelectorAll(".preco")[3].textContent;
  let soma = (option1+option2+option3);
  if (soma==3){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  }
}


function selectbebida1(){
  document.getElementById('bebida1').style.borderColor = "green";
  document.getElementById('bebida2').style.borderColor = "white";
  document.getElementById('bebida3').style.borderColor = "white";
  document.getElementById('bebida4').style.borderColor = "white";
  document.getElementById('b1').style.display = "flex";
  document.getElementById('b2').style.display = "none";
  document.getElementById('b3').style.display = "none";
  document.getElementById('b4').style.display = "none";
  option2=1;
  bebida = document.querySelectorAll("h3")[4].textContent;
  preco2 = document.querySelectorAll(".preco")[4].textContent;
  let soma = (option1+option2+option3);
  if (soma==3){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  }
}

function selectbebida2(){
  document.getElementById('bebida1').style.borderColor = "white";
  document.getElementById('bebida2').style.borderColor = "green";
  document.getElementById('bebida3').style.borderColor = "white";
  document.getElementById('bebida4').style.borderColor = "white";
  document.getElementById('b1').style.display = "none";
  document.getElementById('b2').style.display = "flex";
  document.getElementById('b3').style.display = "none";
  document.getElementById('b4').style.display = "none";
  option2=1;
  bebida = document.querySelectorAll("h3")[5].textContent;
  preco2 = document.querySelectorAll(".preco")[5].textContent;
  let soma = (option1+option2+option3);
  if (soma==3){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  }
}

function selectbebida3(){
  document.getElementById('bebida1').style.borderColor = "white";
  document.getElementById('bebida2').style.borderColor = "white";
  document.getElementById('bebida3').style.borderColor = "green";
  document.getElementById('bebida4').style.borderColor = "white";
  document.getElementById('b1').style.display = "none";
  document.getElementById('b2').style.display = "none";
  document.getElementById('b3').style.display = "flex";
  document.getElementById('b4').style.display = "none";
  option2=1;
  bebida = document.querySelectorAll("h3")[6].textContent;
  preco2 = document.querySelectorAll(".preco")[6].textContent;
  let soma = (option1+option2+option3);
  if (soma==3){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  }
}

function selectbebida4(){
  document.getElementById('bebida1').style.borderColor = "white";
  document.getElementById('bebida2').style.borderColor = "white";
  document.getElementById('bebida3').style.borderColor = "white";
  document.getElementById('bebida4').style.borderColor = "green";
  document.getElementById('b1').style.display = "none";
  document.getElementById('b2').style.display = "none";
  document.getElementById('b3').style.display = "none";
  document.getElementById('b4').style.display = "flex";
  option2=1;
  bebida = document.querySelectorAll("h3")[7].textContent;
  preco2 = document.querySelectorAll(".preco")[7].textContent;
  let soma = (option1+option2+option3);
  if (soma==3){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  }
}


function selectsobremesa1(){
  document.getElementById('sobremesa1').style.borderColor = "green";
  document.getElementById('sobremesa2').style.borderColor = "white";
  document.getElementById('sobremesa3').style.borderColor = "white";
  document.getElementById('sobremesa4').style.borderColor = "white";
  document.getElementById('s1').style.display = "flex";
  document.getElementById('s2').style.display = "none";
  document.getElementById('s3').style.display = "none";
  document.getElementById('s4').style.display = "none";
  option3=1;
  sobremesa = document.querySelectorAll("h3")[8].textContent;
  preco3 = document.querySelectorAll(".preco")[8].textContent;
  let soma = (option1+option2+option3);
  if (soma==3){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  }
}

function selectsobremesa2(){
  document.getElementById('sobremesa1').style.borderColor = "white";
  document.getElementById('sobremesa2').style.borderColor = "green";
  document.getElementById('sobremesa3').style.borderColor = "white";
  document.getElementById('sobremesa4').style.borderColor = "white";
  document.getElementById('s1').style.display = "none";
  document.getElementById('s2').style.display = "flex";
  document.getElementById('s3').style.display = "none";
  document.getElementById('s4').style.display = "none";
  option3=1; 
  sobremesa = document.querySelectorAll("h3")[9].textContent;
  preco3 = document.querySelectorAll(".preco")[9].textContent;
  let soma = (option1+option2+option3);
  if (soma==3){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  }
}

function selectsobremesa3(){
  document.getElementById('sobremesa1').style.borderColor = "white";
  document.getElementById('sobremesa2').style.borderColor = "white";
  document.getElementById('sobremesa3').style.borderColor = "green";
  document.getElementById('sobremesa4').style.borderColor = "white";
  document.getElementById('s1').style.display = "none";
  document.getElementById('s2').style.display = "none";
  document.getElementById('s3').style.display = "flex";
  document.getElementById('s4').style.display = "none";
  option3=1;
  sobremesa = document.querySelectorAll("h3")[10].textContent;
  preco3 = document.querySelectorAll(".preco")[10].textContent;
  let soma = (option1+option2+option3);
  if (soma==3){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  }
}

function selectsobremesa4(){
  document.getElementById('sobremesa1').style.borderColor = "white";
  document.getElementById('sobremesa2').style.borderColor = "white";
  document.getElementById('sobremesa3').style.borderColor = "white";
  document.getElementById('sobremesa4').style.borderColor = "green";
  document.getElementById('s1').style.display = "none";
  document.getElementById('s2').style.display = "none";
  document.getElementById('s3').style.display = "none";
  document.getElementById('s4').style.display = "flex";
  option3=1;
  sobremesa = document.querySelectorAll("h3")[11].textContent;
  preco3 = document.querySelectorAll(".preco")[11].textContent;
  let soma = (option1+option2+option3);
  if (soma==3){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  } 
}
function ChangeToNumber(string){
  let variable;
  variable=string.replace("R$","");
  variable=variable.replace(",",".");
  variable = parseFloat(variable);
  return variable;
}

function fecharPedido(){
  let mensagem;
  preco1=ChangeToNumber(preco1);
  preco2=ChangeToNumber(preco2);
  preco3=ChangeToNumber(preco3);
  mensagem = `Olá, gostaria de fazer o pedido:
  - Prato: `+prato+`
  - Bebida: `+bebida+`
  - Sobremesa: `+sobremesa+`
  Total: R$ `+(preco1+preco2+preco3).toFixed(2);
  mensagem = window.encodeURIComponent(mensagem);
  window.open("https://wa.me/?text="+mensagem);
}