		function converter(){
			//Recuperar o objeto do id POL
			var pol = document.getElementById("pol");

			//Recuperar objeto da div CM
			var cm = document.getElementById("cm");

			//Verifica se o valor é diferente de um número
			if(isNaN(pol.value)){ //Se Sim
				cm.innerHTML = "Digite um valor válido";
			}else{ // Se não
				var resultado = pol.value * 2.54;
				cm.innerHTML = resultado + " cm";
			}


			// alert(resultado);
		}