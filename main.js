const lowerCase = ['a','b','c','d','e','f','g',
    'h','i','j','k','l','m','n','o','p',
    'q','r','s','t','u','v','w','x','y','z'];

const upperCase = ['A','B','C','D','E','F','G',
    'H','I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X','Y','Z']; 

const MAX = 26;

function coding(condition){
    var input = document.getElementById('cipher_msg').value;
    var num = parseInt(document.getElementById('cipher_num').value);
    if(condition==1){
        num = num - num - num;
    }
    var output = "";
    for(i=0;i<input.length;i++){
       
        var character = input.charCodeAt(i);

        if(character >= 65 && character <= 90){ //upper case: A-Z
            var pos = (character - 65 + num);
            if(pos < 0 || pos >= 26){
                pos %= MAX;
                if(pos < 0){
                    pos = MAX - (pos - (pos*2));
                }
                output+=upperCase[pos];
            }
            else {
                output+=upperCase[pos%MAX];
            }
        }

        else if(character >= 97 && character <= 122){ //lower case: a-z
            var pos = (character - 97 + num);
           
            if(pos < 0  || pos > 25){
                pos %= MAX;
                if(pos<0){
                    pos = MAX - (pos-(pos*2));
                }
                output+=lowerCase[pos];
            }
            else {
                output+=lowerCase[pos%MAX];
            }
        }

       

        else {
            output+=input[i];
        }
    }
    document.getElementById("cipher_msg_output").innerHTML = output;

}

