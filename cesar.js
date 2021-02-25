var letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function encryptCesar(){
    
    var mov = parseInt(document.getElementById("mov").value);
    
    var inputPalabra = document.getElementById("encriptar").value;
    inputPalabra = inputPalabra.toUpperCase();
    inputPalabra = inputPalabra.trim();
    var arrayinputPalabra = inputPalabra.split("");
    var nuevaPalabra = [];
    console.log(letras);
    for(let i=0;i<arrayinputPalabra.length;i++){
        for(let j=0;j<letras.length;j++){
            if(arrayinputPalabra[i]==letras[j]){
                var posLetra = j+mov;
                var nuevaLetra;
                if(posLetra>=27){
                    var diferencia = posLetra-27;
                    nuevaLetra = letras[diferencia];
                }else{
                    nuevaLetra = letras[posLetra];
                }
                nuevaPalabra.push(nuevaLetra);
            }
        }
    }
    document.getElementById("salidacesar").value = nuevaPalabra.join("");
}


function descryptCesar(){
    var mov = parseInt(document.getElementById("mov").value);
    var inputPalabra = document.getElementById("salidacesar").value;
    inputPalabra = inputPalabra.toUpperCase();
    var arrayinputPalabra = inputPalabra.split("");
    var nuevaPalabra = [];
    
        for(let i=0;i<arrayinputPalabra.length;i++){
        for(let j=0;j<letras.length;j++){
            if(arrayinputPalabra[i]==letras[j]){
                var posLetra = j-mov;
                var nuevaLetra;
                if(posLetra<0){
                    var diferencia = 27+(posLetra);
                    nuevaLetra = letras[diferencia];
                }else{
                    nuevaLetra = letras[posLetra];
                }
                nuevaPalabra.push(nuevaLetra);
            }
        }
    }
    document.getElementById("salidacesarDos").value = nuevaPalabra.join("");
}


function forzar(){
    var mov = parseInt(document.getElementById("mov").value);
    var inputPalabra = document.getElementById("salidacesar").value;
    inputPalabra = inputPalabra.toUpperCase();
    var arrayinputPalabra = inputPalabra.split("");
    var nuevaPalabra = [];
    document.write("<table border='1'>");
    document.write("<th colspan="+arrayinputPalabra.length+">LETRAS</th>");
    document.write("");
    document.write("<th>Nivel</th>")
    for(let i=0;i<letras.length;i++){
        document.write("<tr>");  
        var aux = i+1;
        for(let j=0;j<arrayinputPalabra.length;j++){
            document.write("<td>");  
                var nuevaLetra;
            console.log(arrayinputPalabra[j]);
                var posLetra = letras.indexOf(arrayinputPalabra[j]);
                var nuevaPosLetra = posLetra-aux;
                if(nuevaPosLetra<0){
                    var diferencia = 27+(nuevaPosLetra);
                    nuevaLetra = letras[diferencia];
                }else{
                    nuevaLetra = letras[nuevaPosLetra];
                }
                nuevaPalabra.push(nuevaLetra);
                document.write(nuevaLetra);
            document.write("</td>");
        }
        document.write("<td style='text-align: right; font-weight: bold;'");
        document.write("<p>"+aux+"</p>");
        document.write("</td>");
        document.write("</tr>");    
    }
    document.write("</table>");
}