function converte(){
    var temp = document.getElementById('temp').value  
    var escala = document.getElementById('temp_select').value

    if(temp == 0){
        alert('Digite um valor')
    }if(escala == 'Fahrenheit'){
        var res = (temp - 32) * 5/9;
        alert(`A temperatura de Fahrenheit em Celsius é de ${res.toFixed(2)} graus `)
    }else{
        res = (temp - 273,15);
        alert(`A temperatura de Kelvin em Celsius é de ${res.toFixed(2)} graus `)
    }    
}


