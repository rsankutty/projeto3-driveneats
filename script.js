let prato;
let bebida;
let sobremesa;
let preco1;
let preco2;
let preco3;

function itemSelecionado(item){
  let id = item.id;
  let elemSelecionado;
  if (id=="prato"){
    elemSelecionado = document.getElementsByClassName("container_prato")[0].querySelector(".selecionado");
    if (elemSelecionado != null){
      elemSelecionado.classList.remove("selecionado");
      elemSelecionado.children[0].style.display = "none";
    }
  } else if (id=="bebida") {
    elemSelecionado = document.getElementsByClassName("container_prato")[1].querySelector(".selecionado");
    if (elemSelecionado != null){
      elemSelecionado.classList.remove("selecionado");
      elemSelecionado.children[0].style.display = "none";
    }
  } else if (id=="sobremesa"){
    elemSelecionado = document.getElementsByClassName("container_prato")[2].querySelector(".selecionado");
    if (elemSelecionado != null){
      elemSelecionado.classList.remove("selecionado");
      elemSelecionado.children[0].style.display = "none";
    }
  }

  item.classList.toggle("selecionado")
  if (id=="prato"){
    prato = (item.children[3].children[0].innerHTML);
    preco1=(item.children[3].children[1].innerHTML);
  } else if (id=="bebida") {
    bebida = (item.children[3].children[0].innerHTML);
    preco2=(item.children[3].children[1].innerHTML);
  } else if (id=="sobremesa"){
    sobremesa = (item.children[3].children[0].innerHTML);
    preco3=(item.children[3].children[1].innerHTML);
  }

  let simbolo = item.children[0]
  if (item.classList.contains("selecionado")){
    simbolo.style.display = "flex";
  } else {
    simbolo.style.display = "none";
  }
  
  if (prato!=undefined && bebida!=undefined && sobremesa!=undefined){
    document.getElementById("fecharPedido").style.backgroundColor="#32B72F";
    document.getElementById('button_text').textContent = 'Fechar pedido';
    document.getElementById("button_text").style.fontWeight = "700";
  }
}
let mensagem;
function ChangeToNumber(string){
  let variable;
  variable=string.replace("R$","");
  variable=variable.replace(",",".");
  variable = parseFloat(variable);
  return variable;
}

function fecharPedido(){
  if (prato!=undefined && bebida!=undefined && sobremesa!=undefined){
    preco1_num=ChangeToNumber(preco1);
    preco2_num=ChangeToNumber(preco2);
    preco3_num=ChangeToNumber(preco3);
    mensagem = `Olá, gostaria de fazer o pedido:
      - Prato: `+prato+`
      - Bebida: `+bebida+`
      - Sobremesa: `+sobremesa+`
      Total: R$ `+(preco1_num+preco2_num+preco3_num).toFixed(2);
    mensagem = window.encodeURIComponent(mensagem);
    window.open("https://wa.me/?text="+mensagem);
  }
}