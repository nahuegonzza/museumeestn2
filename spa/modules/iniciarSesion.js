class iniciarSesion{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
    }
    children = [
        {type:"br"},
        {type: "section", props: {class:"form login"}, children:[
            {type: "form", props: {action:"manager_index.html"}, children:[
                {type: "img", props: {src:"style/img/icono2.png", class:"logo", style:"cursor:default", alt:"Logo"}},
                {type: "h1", props: {style:"font-size:36px"}, children:["Manager Web - Museo"]},
                {type: "h2", children:["¡Bienvenido!"]},
                {type: "h4", children:["Inicie sesión para continuar"]},    
                {type: "input", props:{class:"controls", type:"text", name:"credencial", id:"credencial", placeholder:"Credenciales"}},
                {type: "input", props:{class:"controls", type:"password", name:"password", id:"password", placeholder:"Contraseña"}},
                {type: "input", props:{class:"buttons", type:"submit", value:"Iniciar Sesion"}},
            ]}
        ]}
    ]
}

export {iniciarSesion};