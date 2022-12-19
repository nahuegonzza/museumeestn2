class persona{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
        this.children = [ {type:"form", props:{class: "form manager"}, children:[
        {type: "h1", props:{style:"font-size:36px;"}, children:["Ejemplo Persona"]},
        {type: "div", children:[ ]},
        ]}
    ] 
    this._CargarDatos();
}

_CargarDatos = ()=>{
    let Cards = [
        {id:"Ul", title:"Ul", info:[]}
    ];

    let data = "api/datos_persona".data
    /*
    let data = [
        {
            id_persona: "1",
            dni: 1656515,
            nombre: "Juan",
            apellido: "Pacopedrodelamar",
        },
        {
            id_persona: "2",
            dni: 6164515,
            nombre: "Pedro",
            apellido: "Yanni",
        },
        {
            id_persona: "3",
            dni: 8716515,
            nombre: "Damian",
            apellido: "Erausquin",
        },
        {
            id_persona: "4",
            dni: 21216515,
            nombre: "Dylan",
            apellido: "Homoman",
        },
    ]
    */

//const datas= await fetch(endpoint)
    data.map(dat => { 
        Cards[0].info.push(
            {id:dat.id_persona, dni:dat.dni, nombre:dat.nombre, apellido:dat.apellido}
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
            {type: "p", props:{value:element.nro}, children:[
                "ID: " + element.id, {type:"br"},
                "Nombre: " + element.nombre + " " + element.apellido
            ]},
        )
    });
}
}

export {persona};