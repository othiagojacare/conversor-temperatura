function converte(){
    var temp = document.getElementById('temp').value  

    if(temp == 0){
        alert('Digite um valor')
    }else{
    var res = (temp - 32) * 5/9;
    alert(`A temperatura em Celsius é de ${res.toFixed(2)} graus `)
    }    
}

