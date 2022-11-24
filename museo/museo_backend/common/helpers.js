module.exports.validationError = (res, error = 'Los datos provistos no son validos') => {


    res.statusCode = 422;

    res.end(JSON.stringify({
        status: 'Fallida - Dato Invalido',
            error
    }, null, 3));
};

module.exports.error = (res, error = 'Ha ocurrido un error desconocido') => {
    res.statusCode = 500;

    res.end(JSON.stringify({
        status: 'Fallida - Error Desconocido',
        error
    }, null, 3));
};

module.exports.success = (res, data = null) => {


    res.statusCode = 200;

    res.end(JSON.stringify({
        status: 'Exitosa',
        data
    }, null, 3));
};

const addHeaders = (res) => {
    return res.setHeader('Content-Type', 'application/json');
}