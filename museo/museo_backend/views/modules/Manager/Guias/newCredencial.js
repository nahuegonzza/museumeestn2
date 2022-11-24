class newCredencial{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
    }
    children = [ {type:"form", props:{class: "form manager"}, children:[
        {type: "h1", props:{style:"font-size:36px;"}, children:["Nueva Credencial"]},
        {type: "input", props:{type:"text", class:"controls", id:"credencialN", name:"credencialN", placeholder:"Nueva Credencial", required:"required"}},
        {type: "input", props:{type:"password", class:"controls", id:"passwordN", name:"passwordN", placeholder:"Nueva Contraseña", required:"required"}}, 
        {type:"input", props:{class:"buttons", type:"submit", value:"Crear"}},
        {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_credenciales.js", "M_credenciales", "Main") }}}
        ]}
    ] 


    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}

export {newCredencial};