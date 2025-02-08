






function clearInputs(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("error-message").innerHTML = "";
    document.getElementById("result").style.visibility = "hidden";

}
function calculator(op){

    // initialize variables
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let errorMessage= "";
    let result =0
    input1 = Number(input1);
    input2 = Number(input2);


    if (isNaN(input1) || isNaN(input2)){
        errorMessage = "Please enter a valid number";
    }
    else{
            if (op === '+' ){
                 result = input1 + input2;
            }
            else if (op === '-' ){
                 result = input1 - input2;
            }
            else if (op === '*' ){
                 result = input1 * input2;
            }
            else if (op === '/' ){
                if (input2 === 0){
                    errorMessage = "Cannot divide by zero";
                }
                else {
                    result = input1 / input2;
                    }
            }

            else if(op === '**') {

                    if(input2 ===0){
                        result = 1;
                    }
                    else if (input1 === 0){
                        if (input2 < 0){
                            errorMessage = "Cannot divide by zero";
                        }
                        else {result = 0;}
                    }

                    else if(input2 > 0){                            //regular numbers
                        result = 1;
                        for (let i =0; i<input2; i++){
                            result = result * input1;
                        }
                    }
                    else{                                           //negative exponents
                        result = 1;
                        input2 = input2 * (-1);
                        for (let x =0; x<input2; x++){
                            result = result * input1;
                        }
                        result = (1 / result);
                    }

                }

        }

    //set color of result based on positive or negative
    if(result >=  0){
        document.getElementById("result").style.color = "black";}
    else{
        document.getElementById("result").style.color = "red";
    }

    // display the correct result
    document.getElementById("result").innerHTML = result.toString();
    document.getElementById("error-message").innerHTML = errorMessage;
}

