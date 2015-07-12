var keys=document.querySelectorAll('.calculator button');
var operators=['-','+','x','/'];
var decimalAdded=false;
function log(x){
	return Math.log(x)/Math.log(10);
}
var pi=22/7;

function fact(x){
	if (x==1||x==0)
		return(1);
	else return (x*fact(x-1));
}


for (var i = 0; i < keys.length; i++) {
	keys[i].onclick=function(e){
		var input=document.querySelector('.display');
		var inputVal=input.innerHTML;
		var btnVal=this.innerHTML;

		//if Clear is pressed
		if(btnVal=='C'){
			//var equation=inputVal;
			//equation=equation.replace(/.$/,'');
			//input.innerHTML=equation;
			input.innerHTML='';
			decimalAdded=false;
		}

		else if(btnVal=='DEL'){
			var equation=inputVal;
			equation=equation.replace(/.$/,'');
			input.innerHTML=equation;
		}


		//else if(btnVal=='+'){
			//var equation=inputVal;
			//value=Math.log(equation);
			//input.innerHTML=value;
		//	input.innerHTML+='log(';
		//	equation=inputVal;
		//	equation=equation.replace(/log/g,'Math.log');
		//	input.innerHTML=eval(equation);
		//}

		//if = is pressed
		else if (btnVal=='=') {
			var equation=inputVal;
			lastChar=equation[equation.length-1];

			equation=equation.replace(/x/g,'*').replace(/÷/g,'/').replace(/ln/g,'Math.log').replace(/cos/g,'Math.cos').replace(/sin/g,'Math.sin').replace(/tan/g,'Math.tan').replace(/pow/g,'Math.pow').replace(/sqrt/g,'Math.sqrt');

			if(lastChar==('.','-','+','x','/'))
				equation=equation.replace(/.$/,'');

			if(equation)
				input.innerHTML=eval(equation);

			decimalAdded=false;
		}

		//if any operator is pressed
		else if (operators.indexOf(btnVal)>-1){
			var lastChar=inputVal[inputVal.length-1];

			//last char should not be an operator
			if(inputVal!='' && operators.indexOf(lastChar)==-1)
				input.innerHTML+=btnVal;

			//minus can be added at the beginning
			else if (inputVal=='' && btnVal=='-')
				input.innerHTML+=btnVal;

			//if last char in an operator, replace it with new operator
			if(operators.indexOf(lastChar)>-1)
				input.innerHTML=inputVal.replace(/.$/,btnVal);

			decimalAdded=false;
		}

		//if decimal is added
		else if(btnVal=='.'){ 
			if(decimalAdded==false){
				input.innerHTML+=btnVal;
				decimalAdded=true;
			}
		}

		else if(btnVal=='ln'){
			input.innerHTML+='ln(';
			decimalAdded==false;
		}

		else if(btnVal=='log'){
			input.innerHTML+='log(';
			decimalAdded==false;

		}

		else if(btnVal=='cos'){
			input.innerHTML+='cos(';
			decimalAdded==false;
		}

		else if(btnVal=='sin'){
			input.innerHTML+='sin(';
			decimalAdded==false;
		}		

		else if(btnVal=='tan'){
			input.innerHTML+='tan(';
			decimalAdded==false;
		}

		else if(btnVal=='^'){
			input.innerHTML+='pow(';
			decimalAdded==false;
		}

		else if(btnVal=='sqrt'){
			input.innerHTML+='sqrt(';
			decimalAdded==false;
		}

		else if(btnVal=='pi'){
			input.innerHTML+='pi'
		}

		else if(btnVal=='n!'){
			input.innerHTML+='fact('
		}		


		else input.innerHTML+=btnVal;

		e.preventDefault();


	}
};
