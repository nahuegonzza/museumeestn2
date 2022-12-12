class M_guias{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
    }
    children = [ {type:"div", props:{class: "form manager"}, children:[
        {type: "h1", props:{style:"font-size:36px;"}, children:["Administrador de Guias"]},
        {type: "input", props:{type:"button", class:"buttons", id:"newGuia", name:"newGuia", value:"Nuevo Guia", onclick: ()=> { this.Conectar("../modules/Manager/Guias/newGuias.js", "newGuias", "Main")}}},
        {type: "input", props:{type:"button", class:"buttons", id:"modifyGuia", name:"modifyGuia", value:"Modificar Guias", onclick: ()=> { this.Conectar("../modules/Manager/Guias/modifyGuias.js", "modifyGuias", "Main")}}},
        {type: "input", props:{type:"button", class:"buttons", id:"deleteGuia", name:"deleteGuia", value:"Eliminar Guias", onclick: ()=> { this.Conectar("../modules/Manager/Guias/deleteGuias.js", "deleteGuias", "Main")}}},        
        {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_index.js", "M_index", "Main") }}}
        ]}
    ]

    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}

export {M_guias};