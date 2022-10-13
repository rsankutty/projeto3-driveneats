let option1;
function selectoption1(){
  document.getElementById('prato1').style.borderColor = "green";
  document.getElementById('prato2').style.borderColor = "white";
  document.getElementById('prato3').style.borderColor = "white";
  document.getElementById('prato4').style.borderColor = "white";
  option1=1;
}

function selectoption2(){
  document.getElementById('prato1').style.borderColor = "white";
  document.getElementById('prato2').style.borderColor = "green";
  document.getElementById('prato3').style.borderColor = "white";
  document.getElementById('prato4').style.borderColor = "white";
  option1=1;
}

function selectoption3(){
  document.getElementById('prato1').style.borderColor = "white";
  document.getElementById('prato2').style.borderColor = "white";
  document.getElementById('prato3').style.borderColor = "green";
  document.getElementById('prato4').style.borderColor = "white";
  option1=1;
}

function selectoption4(){
  document.getElementById('prato1').style.borderColor = "white";
  document.getElementById('prato2').style.borderColor = "white";
  document.getElementById('prato3').style.borderColor = "white";
  document.getElementById('prato4').style.borderColor = "green";
  option1=1;
}

let option2;
function selectbebida1(){
  document.getElementById('bebida1').style.borderColor = "green";
  document.getElementById('bebida2').style.borderColor = "white";
  document.getElementById('bebida3').style.borderColor = "white";
  document.getElementById('bebida4').style.borderColor = "white";
  option2=1;
}

function selectbebida2(){
  document.getElementById('bebida1').style.borderColor = "white";
  document.getElementById('bebida2').style.borderColor = "green";
  document.getElementById('bebida3').style.borderColor = "white";
  document.getElementById('bebida4').style.borderColor = "white";
  option2=1;
}

function selectbebida3(){
  document.getElementById('bebida1').style.borderColor = "white";
  document.getElementById('bebida2').style.borderColor = "white";
  document.getElementById('bebida3').style.borderColor = "green";
  document.getElementById('bebida4').style.borderColor = "white";
  option2=1;
}

function selectbebida4(){
  document.getElementById('bebida1').style.borderColor = "white";
  document.getElementById('bebida2').style.borderColor = "white";
  document.getElementById('bebida3').style.borderColor = "white";
  document.getElementById('bebida4').style.borderColor = "green";
  option2=1;
}

let option3;
function selectsobremesa1(){
  document.getElementById('sobremesa1').style.borderColor = "green";
  document.getElementById('sobremesa2').style.borderColor = "white";
  document.getElementById('sobremesa3').style.borderColor = "white";
  document.getElementById('sobremesa4').style.borderColor = "white";
  option3=1;
}

function selectsobremesa2(){
  document.getElementById('sobremesa1').style.borderColor = "white";
  document.getElementById('sobremesa2').style.borderColor = "green";
  document.getElementById('sobremesa3').style.borderColor = "white";
  document.getElementById('sobremesa4').style.borderColor = "white";
  option3=1;
}

function selecsobremesa3(){
  document.getElementById('sobremesa1').style.borderColor = "white";
  document.getElementById('sobremesa2').style.borderColor = "white";
  document.getElementById('sobremesa3').style.borderColor = "green";
  document.getElementById('sobremesa4').style.borderColor = "white";
  option3=1;
}

function selectsobremesa4(){
  document.getElementById('sobremesa1').style.borderColor = "white";
  document.getElementById('sobremesa2').style.borderColor = "white";
  document.getElementById('sobremesa3').style.borderColor = "white";
  document.getElementById('sobremesa4').style.borderColor = "green";
  option3=1;
}

let soma = option1+option2+option3;
if (soma==3){
  document.getElementById("fecharPedido").style.backgroundColor='red';
  alert(soma)
} 