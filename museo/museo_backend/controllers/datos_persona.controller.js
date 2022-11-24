const helpers = require('../common/helpers');
const datos_personaModel = require('../models/datos_persona.model')

class datos_persona {
    // GET /datos_persona
    async obtenerRegistros (req, res) {
        try {
            datos_personaModel.obtenerRegistros((err,_data) => {
                if(err) helpers.error(res, err)
                
                helpers.success(res, _data);
            })
           
          //  return helpers.success(res, data);
        }
        catch (error) {
          //  return helpers.error(res, error);
        }
    }

    // POST /datos_persona
    async crear (req, res, param, postData) {
       try{
            const {nombre, apellido, dni } = JSON.parse(postData)
            const bodyData = {
                nombre,
                apellido,
                dni
            }

            datos_personaModel.crear(bodyData, (err, _data) => {
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
            datos_personaModel.Bid(param, (err, _data) => {
                if(!_data.length) helpers.error(res, err)

                helpers.success(res, _data);
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
            const {nombre, apellido, dni } = JSON.parse(postData)
            const bodyData = {
                nombre,
                apellido,
                dni
            }

            datos_personaModel.actualizarRegistro(param, bodyData, (err, _data) => {
                if(!_data.length) helpers.error(res, err)

                helpers.success(res, _data);
            })
           // return helpers.success(res, employee.toClient());
        }
        catch (error) {

        }
    }
/*
    // DELETE /employee/:id
    async delete (req, res, param) {
        let employee;
        try {
            employee = await Employee.get({ _id: param }, { isManager: 1 });
        }
        catch (e) {
            console.log(e);
        }

        if (!employee) {
            return helpers.error(res, 'Entity not found', 404);
        }

        try {
            let update, conditions;

            // delete employee from project
            try {
                update = { $pull: { employeeIds: mongoose.Types.ObjectId(param) } };
                await Project.update({}, update, {multi: true});
            }
            catch (e) {
                console.log('Error in delete employee from project', e);
            }

            // delete managerId from project
            try {
                update = { $set: { managerId: null } };
                await Project.update({managerId: mongoose.Types.ObjectId(param)}, update, {multi: true});
            }
            catch (e) {
                console.log('Error in delete employee from project', e);
            }

            // delete peers
            try {
                update = { $pull: { peers: mongoose.Types.ObjectId(param) } };
                await Employee.update({}, update, {multi: true});
            }
            catch (e) {
                console.log('delete peers', e);
            }

            // set manager to null
            try {
                conditions = {managerId: mongoose.Types.ObjectId(param)};
                update = { $set: { managerId: null } };
                await Employee.update(conditions, update, {multi: true});
            }
            catch (e) {
                console.log('set manager to null', e);
            }

            conditions = { _id: param };
            await Employee.remove(conditions);

            return helpers.success(res);
        }
        catch (error) {
            return helpers.error(res, error);
        }
    }

    // Checks if a manager with given id exists
    async validateManager (managerId) {
        if (managerId === null) {
            return true;
        }

        try {
            const managerExists = await Employee.get({ _id: managerId, isManager: true });
            return !!(managerExists);
        }
        catch (e) {
            return false;
        }
    }

    // Checks if all the peers exist in database
    async validatePeers (peers, isManager) {
        if (peers === null) {
            return true;
        }

        if (peers.length && !isManager) {
            return false;
        }

        try {
            const peersExists = await Employee.getAll({ _id: {$in: peers} }, { _id: 1 });
            return (peersExists.length === peers.length) ;
        }
        catch (e) {
            return false;
        }
    }*/
}

module.exports = new datos_persona();
