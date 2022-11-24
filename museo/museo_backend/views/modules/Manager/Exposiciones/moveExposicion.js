class moveExposicion{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
    }
    children = [ {type:"form", props:{class: "form manager"}, children:[
        {type: "h1", props:{style:"font-size:36px;"}, children:["Mover Exposicion"]},
        
        {type: "h7", children:["Lista de Exposiciones para mover una"]},
        {type:"input", props:{class:"buttons", type:"submit", value:"Mover"}},
        {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_exposiciones.js", "M_exposiciones", "Main") }}}
        ]}
    ] 


    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}

export {moveExposicion};