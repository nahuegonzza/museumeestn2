const sql = require('../config/db.js')


class datos_personaModel {
    constructor(_nombre, _apellido, _dni){
        this.nombre = _nombre;
        this.apellido = _apellido;
        this.dni = _dni;
    }

    
    obtenerRegistros = (callback) => {
         sql.query("SELECT * FROM datos_persona", (err, data) => {
                if(data.length){ console.log(`Registro Encontrado > ${JSON.stringify(data)}`) 
                }else{   console.log(`No se encontró registro`)};
                callback(err, data)
         })
    
    }

    crear = (newData, callback) => {
        sql.query("INSERT INTO datos_persona SET ?", newData, (err, data) => {
            if(newData) console.log(`Registro Cargado > ${JSON.stringify(newData)}`);
            callback(err, data)
        })
    }

    Bid = (id, callback) => {
        sql.query("SELECT * FROM datos_persona WHERE id_persona = ?", id, (err, data) => {
            if(data.length){ console.log(`Registro Encontrado > ${JSON.stringify(data)}`) 
            }else{   console.log(`No se encontró registro`)};

            callback(err, data)
     })
    }

    actualizarRegistro = (id, newData, callback) => {
        sql.query("UPDATE datos_persona SET nombre = ?, apellido = ?, dni = ? WHERE id_persona = ?", 
        [newData.nombre, newData.apellido, newData.dni, id], (err, data) => {
            if(data) console.log(`Registro Actualizado > ${JSON.stringify(newData)}`) 


             callback(err, data)
        });
    }
    
}

module.exports = new datos_personaModel()