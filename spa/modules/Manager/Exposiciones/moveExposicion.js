class moveExposicion{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
        this.children = [ {type:"form", props:{class: "form manager"}, children:[
        {type: "h1", props:{style:"font-size:36px;"}, children:["Mover Exposicion"]},
        {type: "div", children:[ ]},
        {type:"input", props:{class:"buttons", type:"submit", value:"Mover"}},
        {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_exposiciones.js", "M_exposiciones", "Main") }}}
        ]}
    ] 
    this._CargarDatos();
}

_CargarDatos = ()=>{
    let Cards = [
        {id:"Ul", title:"Ul", info:[]}
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
        {
            nro: "4",
        },
        {
            nro: "5",
        },
        {
            nro: "6",
        },
    ]

//const turnos= await fetch(endpoint)
    turnos.map(turno => { 
        Cards[0].info.push(
            {nro:turno.nro, lang:turno.lang, datetime:turno.datetime}
        )
    })

    Cards.forEach(card =>{
        const CardI = new MyCard({type:"ul", id: card.id, required:"required"}, card);
        this.children[0].children[1].children.push(CardI)
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
    this.type = "div"
    this.props = props;
    this.props.class = "controls";
    this.children = []
    this.children.push({type: "ul", props:{value:""}})
    data.info.forEach(element => {
        this.children.push(
            {type: "li", props:{value:element.nro}, children:[
                "Sala " + element.nro
            ]},
        )
    });
}
}

export {moveExposicion};