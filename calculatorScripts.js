
	//Determines if patient is on drug, then adjusts maximum value
		function setCalculation(){
			var result = document.getElementById("stiripChoice").value;
			var dosage = document.getElementById("dosage");

		//adjusts maximum allowed dosage based on drug consumption
			if(result == "Y"){
				dosage.setAttribute("max", 0.5);
			} else {
				dosage.setAttribute("max", 0.8);
			}

		}

	//Calculates output based on inputs.
		function calculateOutput(){

			//calculation variables
			var result = document.getElementById("stiripChoice").value;
			var limit;
			var dosage = document.getElementById("dosage").value;
			var weight = document.getElementById("patientWeight").value;
			var maxDosage = dosage * weight;
			var twiceDailyDose;

			//output variables
			var bottleSize = bottleSize;
			var bottleQuant = bottleQuant;
			var daysSupply = daysSupply;

			//sets dosage maximum based on drug consumption
			if(result == "Y"){
				limit = 20;
			} else {
				limit = 30;
			}


			//Rounding function
			function round(value, dp) {
				dp || (step = 1.0);
				var inv = 1.0 / dp;
				return Math.round(value * inv) / inv;
			}	


			//if maxDosage exceeds limit, limit replaces dosage
			if(maxDosage>=limit){
				maxDosage = limit;
			}

			
			twiceDailyDose = maxDosage/5;

			//rounding based on if greater/less than 1.5
			if(twiceDailyDose<=1.5){
				twiceDailyDose = round(twiceDailyDose, 0.1);
			}else{
				twiceDailyDose = round(twiceDailyDose, 0.5);
			}


			document.getElementById("twiceDaily").innerHTML = twiceDailyDose;


			var x = twiceDailyDose;

			//fills out output variables based on twice daily dosage
			switch(x){
			case 0:
				bottleSize = 0;
				bottleQuant = 0;
				daysSupply = 0;
				break;
			case 0.2:
				bottleSize = 30;
				bottleQuant = 1;
				daysSupply = 75;
				break;
			case 0.3:
				bottleSize = 30;
				bottleQuant = 2;
				daysSupply = 10;
				break;
			case 0.4:
				bottleSize = 30;
				bottleQuant = 2;
				daysSupply = 75;
				break;
			case 0.5:
				bottleSize = 30;
				bottleQuant = 3;
				daysSupply = 90;
				break;
			case 0.6:
				bottleSize = 60;
				bottleQuant = 2;
				daysSupply = 100;
				break;
			case 0.7:
				bottleSize = 60;
				bottleQuant = 2;
				daysSupply = 86;
				break;
			case 0.8:
				bottleSize = 60;
				bottleQuant = 2;
				daysSupply = 75;
				break;
			case 0.9:
				bottleSize = 60;
				bottleQuant =2;
				daysSupply = 100;
				break;
			case 1:
				bottleSize = 60;
				bottleQuant = 3;
				daysSupply = 90;
				break;
			case 1.1:
				bottleSize = 120;
				bottleQuant = 2;
				daysSupply = 109;
				break;
			case 1.2:
				bottleSize = 120;
				bottleQuant = 2;
				daysSupply = 100;
				break;
			case 1.3:
				bottleSize = 120;
				bottleQuant = 2;
				daysSupply = 92;
				break;
			case 1.4:
				bottleSize = 120;
				bottleQuant = 2;
				daysSupply = 86;
				break;
			case 1.5:
				bottleSize = 120;
				bottleQuant = 2;
				daysSupply = 80;
				break;
			case 2:
				bottleSize = 120;
				bottleQuant = 3;
				daysSupply = 90;
				break;
			case 2.5:
				bottleSize = 250;
				bottleQuant = 2;
				daysSupply = 100;
				break;
			case 3:
				bottleSize = 250;
				bottleQuant = 2;
				daysSupply = 83;
				break;
			case 3.5:
				bottleSize = 250;
				bottleQuant = 3;
				daysSupply = 107;
				break;
			case 4:
				bottleSize = 360;
				bottleQuant = 2;
				daysSupply = 90;
				break;
			case 4.5:
				bottleSize = 360;
				bottleQuant = 2;
				daysSupply = 80;
				break;
			case 5:
				bottleSize = 360;
				bottleQuant = 3;
				daysSupply = 108;
				break;
			case 5.5:
				bottleSize = 360;
				bottleQuant = 3;
				daysSupply = 98;
				break;
			case 6:
				bottleSize = 360;
				bottleQuant = 3;
				daysSupply = 90;
			}


			//updates Outputs
			document.getElementById("bottleS").innerHTML = bottleSize;
			document.getElementById("bottleQ").innerHTML = bottleQuant;
			document.getElementById("daySupply").innerHTML = daysSupply;
		}