class newGuias{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
    }
    children = [ {type:"form", props:{class: "form manager"}, children:[
        {type: "h1", props:{style:"font-size:36px;"}, children:["Nuevo Guia"]},
        {type: "input", props:{type:"text", class:"controls", id:"GuiasN", name:"GuiasN", placeholder:"Nombre del Guía", required:"required"}},
        {type: "input", props:{type:"text", class:"controls", id:"GuiasA", name:"GuiasA", placeholder:"Apellido del Guía", required:"required"}},
        {type: "input", props:{type:"text", class:"controls", id:"GuiasDNI", name:"GuiasDNI", placeholder:"DNI del Guía", pattern:"[0-9]{6,8}", title:"XX.XXX.XXX (Solo Numeros)", required:"required"}},
        {type: "input", props:{class:"buttons", type:"submit", value:"Crear"}},
        {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_guias.js", "M_guias", "Main") }}}
        ]}
    ] 
      

    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}

export {newGuias};