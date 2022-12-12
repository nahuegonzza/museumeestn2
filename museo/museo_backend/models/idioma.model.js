const sql = require('../config/db.js')
//ENT
const tableName = 'idioma';

class datos_personaModel {
    constructor(_idioma){
        this.idioma = _idioma;
    }

    
    obtenerRegistros = (callback) => {
         sql.query("SELECT * FROM idioma", (err, data) => {
                if(data.length){ console.log(`Registro Encontrado > ${JSON.stringify(data)}`) 
                }else{   console.log(`No se encontraron registros en la tabla ${tableName}`)};
                callback(err, data)
         })
    
    }

    crear = (newData, callback) => {
        sql.query("INSERT INTO idioma SET ?", newData, (err, data) => {
            if(newData) console.log(`Registro Cargado > ${JSON.stringify(newData)}`);
            callback(err, data)
        })
    }

    Bid = (id, callback) => {
        sql.query("SELECT * FROM idioma WHERE id_idioma = ?", id, (err, data) => {
            if(data.length){ console.log(`Registro Encontrado > ${JSON.stringify(data)}`) 
            }else{   console.log(`No se encontró el registro por ID ${id} en la tabla ${tableName}`)};

            callback(err, data)
     })
    }

    actualizarRegistro = (id, newData, callback) => {
        sql.query("UPDATE idioma SET idioma = ?", 
        [newData.idioma, id], (err, data) => {
            if(data) console.log(`Registro Actualizado > ${JSON.stringify(newData)}`) 


             callback(err, data)
        });
    }

    borrarRegistro = (id, callback) =>{
        sql.query("DELETE FROM idioma WHERE id_idioma = ?", id, (err, data) => {
            if(data){console.log(`Registro Eliminado > ${JSON.stringify(data)}`)}
            else{console.log(`No se encontró el registro por ID ${id} en la tabla ${tableName}`)}
            callback(err, data)
        })
    }
    
}

module.exports = new datos_personaModel()