document.getElementById('sqlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let sqlCode = document.getElementById('sqlCode').value;

    sqlCode = sqlCode.replace(/--.*$/gm, '');  //en linea

    sqlCode = sqlCode.replace(/->/g,'');

    sqlCode = sqlCode.replace(/\/\*[\s\S]*?\*\/\s*;/g, '');  //en bloque

    document.getElementById('result').textContent = sqlCode;
});



document.getElementById('copyButton').addEventListener('click', function() {
    const resultTextarea = document.getElementById('result');
    resultTextarea.select();                //clipboard   o   copy
    document.execCommand('copy');
});
