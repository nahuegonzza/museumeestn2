class header{
    constructor(props){
        this.type = "header";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props.class = "navbar";
    }
    children = [
        {type: "a", children: [
            {type: "img", props: {src:"style/img/logo2.png", class:"logo", alt:"Logo", onclick: ()=> {
                this.deleter(), this.Conectar("../modules/Index.js", "Index", "Main")
            }}}
        ]},
        { type: "ul", children: [
            { type: "li", props:{onclick: ()=> { this.deleter(), this.Conectar("../modules/mapa.js", "mapa", "Main") }}, children: ["Mapa"]},
            { type: "li", props:{onclick: ()=> { this.deleter(), this.Conectar("../modules/visita.js", "visita", "Main") }}, children: ["Exhibiciones"]},
            { type: "li", props:{onclick: ()=> { this.deleter(), this.Conectar("../modules/historia.js", "historia", "Main") }}, children: ["Historia del Museo"]},
            { type: "li", props:{onclick: ()=> { this.deleter(), this.Conectar("../modules/turn.js", "turn", "Main") }}, children: ["Solicitar Turno"]},
            { type: "li", props:{onclick: ()=> { this.deleter(), this.Conectar("../modules/iniciarSesion.js", "iniciarSesion", "Main") }}, children: [{type: "b", children:["Iniciar Sesion"]}]},
            { type: "li", props:{onclick: ()=> { this.deleter(), this.Conectar("../modules/persona.js", "persona", "Main") }}, children: [{type: "b", children:["Persona"]}]},
        ]}
    ]
    deleter = () =>{
        this.Conectar("../modules/deleter.js", "deleter", "Main")
    }

    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}


export {header};