const helpers = require('../common/helpers');
const idiomaModel = require('../models/idioma.model')

class idiomaController {
    // GET /idioma
    async obtenerRegistros (req, res) {
        try {
            idiomaModel.obtenerRegistros((err,_data) => {
                if(_data.length <= 0){ 
                    
                    helpers.error(res, err)
                }else{
                
                    helpers.success(res, _data);
                }
            })
           
          //  return helpers.success(res, data);
        }
        catch (error) {
          //  return helpers.error(res, error);
        }
    }

    // POST /idioma
    async crear (req, res, param, postData) {
       try{
            const {idioma } = JSON.parse(postData)
            const bodyData = {
                idioma
            }

            idiomaModel.crear(bodyData, (err, _data) => {
                if(err) helpers.error(res, err)
                //console.log(postData)
                helpers.success(res, bodyData)
            })
            
    
       }catch (error) {
     //    return helpers.error(res, error);
        }
    }

    // GET /datos_persona/:id
    async Bid (req, res, param) {
        try {
         //   console.log(param)
         idiomaModel.Bid(param, (err, _data) => {
                if(_data.length <= 0){
                    helpers.error(res, err)
                
                }else{
                    helpers.success(res, _data);
                }
            })
            //return helpers.success(res, employee);
        }
        catch (error) {
           // return helpers.error(res, error);
        }
    }

    // PUT /employee/:id
    async actualizarRegistro (req, res, param, postData) {
        try {
            const {idioma } = JSON.parse(postData)
            const bodyData = {
                idioma
            }

            idiomaModel.actualizarRegistro(param, bodyData, (err, _data) => {
                if(_data.length <= 0){
                    helpers.error(res, err)
                
                }else{

                    helpers.success(res, _data);
                }
            })
           // return helpers.success(res, employee.toClient());
        }
        catch (error) {

        }
    }

    // DELETE /employee/:id
    async borrarRegistro (req, res, param) {
       try {
        idiomaModel.borrarRegistro(param, (err, _data) => {
            if(_data.length <= 0){
                helpers.error(res, err)
            
            }else{
                helpers.success(res, _data);
            }
        })

       } catch (error) {
        
       }
    }
}

module.exports = new idiomaController();