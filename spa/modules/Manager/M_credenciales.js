class M_credenciales{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
    }
    children = [ {type:"div", props:{class: "form manager"}, children:[
            {type: "h1", props:{style:"font-size:36px;"}, children:["Administrador de Credenciales"]},
            {type: "input", props:{type:"button", class:"buttons", id:"newCredencial", name:"newCredencial", value:"Nueva Credencial", onclick: ()=> { this.Conectar("../modules/Manager/Credenciales/newCredencial.js", "newCredencial", "Main")}}},
            {type: "input", props:{type:"button", class:"buttons", id:"modifyCredencial", name:"modifyCredencial", value:"Modificar Credencial", onclick: ()=> { this.Conectar("../modules/Manager/Credenciales/modifyCredencial.js", "modifyCredencial", "Main")}}},
            {type: "input", props:{type:"button", class:"buttons", id:"deleteCredencial", name:"deleteCredencial", value:"Eliminar Credencial", onclick: ()=> { this.Conectar("../modules/Manager/Credenciales/deleteCredencial.js", "deleteCredencial", "Main")}}},
            {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_index.js", "M_index", "Main") }}}
        ]}
    ]
    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}

export {M_credenciales};