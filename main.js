const lowerCase = ['a','b','c','d','e','f','g',
    'h','i','j','k','l','m','n','o','p',
    'q','r','s','t','u','v','w','x','y','z'];

const upperCase = ['A','B','C','D','E','F','G',
    'H','I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X','Y','Z']; 

const MAX = 26;

function encode(){
    var input = document.getElementById('cipher_msg').value;
    var num = parseInt(document.getElementById('cipher_num').value);
    
    var output = "";
    for(i=0;i<input.length;i++){
       
        var character = input.charCodeAt(i);
        if(character > 96 && character < 123){ //lower case: a-z
            var pos = character - 97 + num;
            if(pos > MAX){
                pos = pos % MAX;
                output += lowerCase[pos];
            }
            else{
                output+=lowerCase[pos];
            }
        }

        else if(character > 64 && character < 91){ //upper case: A-Z
            var pos = character - 65 + num;
            if(pos > MAX){
                pos = pos % MAX;
                output += upperCase[pos];
            }
            else{
                output += upperCase[pos];
            }
        }

        else {
            output+=input[i];
        }
    }

    document.getElementById("cipher_msg_output").innerHTML = output;
}

function decode(){
    var input = document.getElementById('cipher_msg').value;
    var num = parseInt(document.getElementById('cipher_num').value);
    
    var output = "";
    for(i=0;i<input.length;i++){
       
        var character = input.charCodeAt(i);

        if(character > 64 && character < 91){ //upper case: A-Z
            var pos = (character - 65 - num);
            if(pos < 0){
                pos = 26 - (pos * -1);
                pos = pos % MAX;
                console.log(pos);
                output += upperCase[pos];
            }
            else{
                output += upperCase[pos];
            }
        }

        else if(character > 96 && character < 123){ //lower case: a-z
            var pos = (character - 97 - num);
            if(pos < 0){
                pos = 26 - (pos * -1);
                pos = pos % MAX;
                output += lowerCase[pos];
            }
            else{
                output+=lowerCase[pos];
            }
        }

       

        else {
            output+=input[i];
        }
    }

    document.getElementById("cipher_msg_output").innerHTML = output;
}

