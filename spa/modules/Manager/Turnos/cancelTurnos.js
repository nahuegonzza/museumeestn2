class cancelTurnos{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
    }
    children = [ {type:"form", props:{class: "form manager"}, children:[
        {type: "h1", props:{style:"font-size:36px;"}, children:["Eliminar Turnos"]},
        
        {type: "h7", children:["(Lista de Turnos con tickeo para seleccionar uno)"]},
        {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_turnos.js", "M_turnos", "Main") }}}
        ]}
    ] 


    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}

export {cancelTurnos};