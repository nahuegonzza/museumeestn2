class newExposicion{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
    }
    children = [ {type:"form", props:{class: "form manager"}, children:[
        {type: "h1", props:{style:"font-size:36px;"}, children:["Nueva Exposicion"]},
        {type: "input", props:{type:"text", class:"controls", id:"exposicionTitle", name:"exposicionTitle", placeholder:"Titulo", required:"required"}},
        {type: "input", props:{type:"text", class:"controls", id:"exposicionDesc", name:"exposicionDesc", placeholder:"Descripcion", required:"required"}},
        {type: "input", props:{type:"text", class:"controls", id:"exposicionAutor", name:"exposicionAutor", placeholder:"Autor", required:"required"}},
        {type: "h7", children:["Select con Salas desde DB"]},
        {type:"input", props:{class:"buttons", type:"submit", value:"Crear"}},
        {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_exposiciones.js", "M_exposiciones", "Main") }}}
        ]}
    ] 


    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}

export {newExposicion};