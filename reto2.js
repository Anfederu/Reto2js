const fs = require('fs');
const http = require('http');
const axios = require('axios');

async function getDataProovedores() {
    const resp = await axios.get('https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json');
    console.log(resp.data);
    return resp.data;
}

async function getDataClientes() {
    const resp = await axios.get('https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json');
    console.log(resp.data);
    return resp.data;
}

http.createServer(async function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' })
    getDataProovedores()
    //getDataClientes()
    res.end('Hello World"')

}).listen(8081)