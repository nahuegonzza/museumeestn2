class newExposicion{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
        this.children = [ {type:"form", props:{class: "form manager"}, children:[
            {type: "h1", props:{style:"font-size:36px;"}, children:["Nueva Exposicion"]},
            {type: "input", props:{type:"text", class:"controls", id:"exposicionTitle", name:"exposicionTitle", placeholder:"Titulo", required:"required"}},
            {type: "input", props:{type:"text", class:"controls", id:"exposicionDesc", name:"exposicionDesc", placeholder:"Descripcion", required:"required"}},
            {type: "input", props:{type:"text", class:"controls", id:"exposicionAutor", name:"exposicionAutor", placeholder:"Autor", required:"required"}},
            {type: "div", children:[ ]},
            {type:"input", props:{class:"buttons", type:"submit", value:"Crear"}},
            {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_exposiciones.js", "M_exposiciones", "Main") }}}
        ]}
    ] 
    this._CargarDatos();
    }

    _CargarDatos = ()=>{
        let Cards = [
            {id:"Select", title:"Select", info:[]}
        ];
        let turnos = [
            {
                nro: "1",
            },
            {
                nro: "2",
            },
            {
                nro: "3",
            },
        ]

    //const turnos= await fetch(endpoint)
        turnos.map(turno => { 
            Cards[0].info.push(
                {nro:turno.nro, lang:turno.lang, datetime:turno.datetime}
            )
        })

        Cards.forEach(card =>{
            const CardI = new MyCard({type:"select", id: card.id, required:"required"}, card);
            this.children[0].children[4].children.push(CardI)
        })
    }

    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}

class MyCard{ 
    constructor(props, data){
        this.type = "select"
        this.props = props;
        this.props.class = "controls";
        this.children = []
        this.children.push({type: "option", props:{value:"", required:"required"}, children:["Seleccione una Sala" ]})
        data.info.forEach(element => {
            this.children.push(
                {type: "option", props:{value:element.nro}, children:[
                    "Sala " + element.nro
                ]},
            )
        });
    }
}

export {newExposicion};