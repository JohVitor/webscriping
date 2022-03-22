const fs = require('fs').promises;

async function listarArquivosDoDiretorio(diretorio, arquivos) {

    if(!arquivos)
        arquivos = [];

    let listaDeArquivos = await fs.readdir(diretorio);
    for(let k in listaDeArquivos) {
        let stat = await fs.stat(diretorio + '/' + listaDeArquivos[k]);
        if(stat.isDirectory())
            await listarArquivosDoDiretorio('C:/Users/HOME/Desktop/webscraping-vmz/print-vmz-disney/' + listaDeArquivos[k], arquivos);
        else
            arquivos.push('C:/Users/HOME/Desktop/webscraping-vmz/print-vmz-disney/' + listaDeArquivos[k]);
    }

    return arquivos;

}

async function diretoriosImg() {

    let arquivos = await listarArquivosDoDiretorio('./print-vmz-disney')
    const attachmentsFiles = await arquivos.map((diretorio, index) => {
        return {
            filename: 'print' + index + '.png',
            path: diretorio
        }
    })
    return await attachmentsFiles;
}
module.exports = diretoriosImg
