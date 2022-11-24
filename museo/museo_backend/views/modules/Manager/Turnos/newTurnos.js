class newTurnos{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
    }
    children = [ {type:"form", props:{class: "form manager"}, children:[
        {type: "h1", props:{style:"font-size:36px;"}, children:["Nuevo Turno"]},
        {type: "input", props:{type:"date", class:"controls", id:"TurnosDate", name:"TurnosDate", placeholder:"Fecha", required:"required"}},
        {type: "input", props:{type:"time", class:"controls", id:"TurnosTime", name:"TurnosTime", placeholder:"Hora", required:"required"}},
        {type: "h7", children:["(Select de Visitante para seleccionar uno)"]},
        {type: "br"},
        {type: "h7", children:["(Select de Visitas Guiadas para seleccionar una)"]},
        {type: "input", props:{class:"buttons", type:"submit", value:"Crear"}},
        {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_turnos.js", "M_turnos", "Main") }}}
        ]}
    ]

    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}

export {newTurnos};