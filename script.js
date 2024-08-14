function criptografar() {
    let valor = document.getElementById("caixa_de_texto").value
    if(valor === ""){
        alert('Nenhuma mensagem encontrada')
        
    }
    let result = valor.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
    document.getElementById("resultado").value = result
    document.getElementById("caixa_de_texto").value = ''
}



function decriptografar() {
    let valor = document.getElementById("caixa_de_texto").value
    if(valor === ""){
        alert('Nenhuma mensagem encontrada')
    }
    let result = valor.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    document.getElementById("resultado").value = result
    document.getElementById("caixa_de_texto").value = ''

}

function copiar() {
    var copyText = document.getElementById("resultado");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("resultado").value = ''
    document.getElementById("caixa_de_texto").value = ''
}