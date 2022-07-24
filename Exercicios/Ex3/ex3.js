function Calcular() {
    var ninicio = document.querySelector('div#inicio');
    var nfim = document.querySelector('div#fim');
    var npasso = document.querySelector('div#passo');

    if(ninicio==null || nfim==null){
        res.innerHTML = (`Impossível calcular! Verifique os dados`);
    }else if(nfim >= ninicio){
        res.innerHTML = (`Impossível calcular! Verifique os dados`);
    }else if(npasso<=0 || npasso == null || fim<=ninicio){
        window.alert('PASSO INVÁLIDO! Será considerador passo = 1!');
        npasso = 1;
    }else {
        var i = ninicio;
        while(i<=nfim){


        }





    }

}