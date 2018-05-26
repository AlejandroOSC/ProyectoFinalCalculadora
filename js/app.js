var numero=0,numero2=0,display='',Op =' ' ;
var Resultado=0;
var condicion;

function pantalla(elemento){
	var cad=String(elemento);
	condicion =document.getElementById("display").innerHTML;
	if(condicion.length<8){
		if(cad.indexOf('.')==-1){
			document.getElementById("display").innerHTML=cad.substring(0,8);
		}else{
			document.getElementById("display").innerHTML=cad.substring(0,9);
		}
	}
}
//eventos
document.getElementById("1").addEventListener('click',function(){
	display+='1';
	pantalla(display);
});
document.getElementById("2").addEventListener('click',function(){
	display+='2';
    pantalla(display);
});
document.getElementById("3").addEventListener('click',function(){
	display+='3';
	pantalla(display);
});
document.getElementById("4").addEventListener('click',function(){
	display+='4';
	pantalla(display);
});
document.getElementById("5").addEventListener('click',function(){
	display+='5';
	pantalla(display);
});
document.getElementById("6").addEventListener('click',function(){
	display+='6';
	pantalla(display);
});
document.getElementById("7").addEventListener('click',function(){
	display+='7';
	pantalla(display);
});
document.getElementById("8").addEventListener('click',function(){
	display+='8';
	pantalla(display);
});
document.getElementById("9").addEventListener('click',function(){
	display+='9';
	pantalla(display);
});
document.getElementById("0").addEventListener('click',function(){
	if(document.getElementById("display").innerHTML!="0"){
		display+='0';
		pantalla(display);
	}
});

document.getElementById("on").addEventListener('click',function(){
	limpiarTodo();
});
	
document.getElementById("sign").addEventListener('click',function(){
	var variable ;
	var condicion =document.getElementById("display").innerHTML;
	if(condicion>0){
		variable = document.getElementById("display").innerHTML;
		pantalla("-"+variable);
	}else if(condicion<0){
		variable = document.getElementById("display").innerHTML;
		pantalla(variable.substring(1));
	}
});
document.getElementById("mas").addEventListener('click',function(){	
	operaciones(1);
});
document.getElementById("por").addEventListener('click',function(){	
	operaciones(3);
});
document.getElementById("menos").addEventListener('click',function(){	
	operaciones(2);
});
document.getElementById("dividido").addEventListener('click',function(){	
	operaciones(4);
});
document.getElementById("raiz").addEventListener('click',function(){	
	var num1 = parseFloat(document.getElementById("display").innerHTML);
	display="";
	pantalla("");
	var n=Math.sqrt(num1);
	var cad=String(n);
	pantalla(cad.substring(0,8));
	
});
document.getElementById("igual").addEventListener('click',function(){
	restualdo();
	pantalla(Resultado);
});

document.getElementById("punto").addEventListener('click',function(){
	if(document.getElementById("display").innerHTML=="0" ){
		display += "0.";
		pantalla(display);
	}else if(document.getElementById("display").innerHTML!="0" 
		&& document.getElementById("display").innerHTML.indexOf('.')==-1){
		display += ".";
		pantalla(display);
	}
});

function limpiarPantalla(){
	document.getElementById("display").innerHTML=0;
}

function limpiarTodo(){
	numero=0;
	Resultado=0;
	display='';
	document.getElementById("display").innerHTML=0;
}

function operaciones(variable){
	numero = parseFloat( document.getElementById("display").innerHTML);
	switch (variable) {
		case 1:
			// Suma

			Op='suma';
			display='';
			if(document.getElementById("display").innerHTML.length>7)
			document.getElementById("display").innerHTML="";
			break;
		case 2:
			// Resta
			Op='resta';
			display='';
			break;
		case 3:
			// Mult
			Op='multi';
			display='';
			if(document.getElementById("display").innerHTML.length>7)
			document.getElementById("display").innerHTML="";
			break;
		case 4:
			// Divicion
			Op='divicion';
			display='';
			if(document.getElementById("display").innerHTML.length>7)
			document.getElementById("display").innerHTML="";
			break;
		case 4:
			// Raiz
			Op='raiz';
			display='';
			if(document.getElementById("display").innerHTML.length>7)
			document.getElementById("display").innerHTML="";
			break;
	
	}

}
function restualdo(){
	numero2 = parseFloat(document.getElementById("display").innerHTML);
	if(Op=='suma'){
		Resultado = operacionArimetica.suma(numero,numero2);
	}else if(Op=='resta'){
		Resultado = operacionArimetica.resta(numero,numero2);
	}else if(Op=='multi'){
		Resultado = operacionArimetica.multiplicacion(numero,numero2);
	}else if(Op=='divicion'){
		Resultado = operacionArimetica.divicion(numero,numero2);
	}else if(Op=='raiz'){
		Resultado = operacionArimetica.raiz(numero);
	}
	return Resultado;	

}
var operacionArimetica = {
	suma : function suma(num1,num2){
		return num1+num2 ;
	},	
	resta : function resta(num1,num2){
		return num1-num2 ;	
	},	
 	divicion : function divicion(num1,num2){
		return num1/num2 ;
	},
    multiplicacion : function multiplicacion(num1,num2){
		return num1*num2 ;
	},
 	raiz : function raiz(num1){
		return Math.sqrt(num1);
	}
}





