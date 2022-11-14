class M_exposiciones{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
    }
    children = [ {type:"div", props:{class: "form manager"}, children:[
            {type: "h1", props:{style:"font-size:36px;"}, children:["Administrador de Exposiciones"]},
            {type: "input", props:{type:"button", class:"buttons", id:"newExposicion", name:"newExposicion", value:"Nueva Exposicion", onclick: ()=> { this.Conectar("../modules/Manager/Exposiciones/newExposicion.js", "newExposicion", "Main")}}},
            {type: "input", props:{type:"button", class:"buttons", id:"modifyExposicion", name:"modifyExposicion", value:"Modificar Exposicion", onclick: ()=> { this.Conectar("../modules/Manager/Exposiciones/modifyExposicion.js", "modifyExposicion", "Main")}}},
            {type: "input", props:{type:"button", class:"buttons", id:"moveExposicion", name:"moveExposicion", value:"Mover Exposicion", onclick: ()=> { this.Conectar("../modules/Manager/Exposiciones/moveExposicion.js", "moveExposicion", "Main")}}},
            {type: "input", props:{type:"button", class:"buttons", id:"disableExposicion", name:"disableExposicion", value:"Deshabilitar/Habilitar Exposicion", onclick: ()=> { this.Conectar("../modules/Manager/Exposiciones/disableExposicion.js", "disableExposicion", "Main")}}},
            {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_index.js", "M_index", "Main")}}},
        ]}
    ]
    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}

export {M_exposiciones};