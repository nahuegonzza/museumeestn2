class M_visitas{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
    }
    children = [ {type:"div", props:{class: "form manager"}, children:[
        {type: "h1", props:{style:"font-size:36px;"}, children:["Administrador de Visitas Guiadas"]},
        {type: "input", props:{type:"button", class:"buttons", id:"newVisita", name:"newVisita", value:"Nueva Visita"}},
        {type: "input", props:{type:"button", class:"buttons", id:"modifyVisita", name:"modifyVisita", value:"Modificar Visita"}},
        {type: "input", props:{type:"button", class:"buttons", id:"disableVisita", name:"disableVisita", value:"Deshabilitar/Habilitar Visita"}},
        {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_index.js", "M_index", "Main") }}}
        ]}
    ]
    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}

export {M_visitas};