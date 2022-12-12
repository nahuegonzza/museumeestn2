class deleteCredencial{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props = {class: "Identifier container manager"};
        this._CargarDatos();
    }
    children = [ {type:"form", props:{class: "form manager"}, children:[
        {type: "h1", props:{style:"font-size:36px;"}, children:["Deshabilitar/Habilitar Credencial"]},
        
        {type: "h7", children:["(Lista de credenciales con tickeo para seleccionar una o deseleccionarla)"]},
        {type: "input", props:{type:"button", class:"buttons", id:"volver", name:"volver", value:"Volver", onclick: ()=> { this.Conectar("../modules/Manager/M_credenciales.js", "M_credenciales", "Main") }}}
        ]}
    ] 

    _CargarDatos = ()=>{
        let Cards = [
            {id:"Select", title:"Select", info:[]}
        ];
        let turnos = [
            {
                nro: "1",
                lang: "Español",
                datetime: "191220220930",
            },
            {
                nro: "2",
                lang: "Ingles",
                datetime: "211220220830",
            },
            {
                nro: "3",
                lang: "Frances",
                datetime: "241220221100",
            },
        ]


    //const turnos= await fetch(endpoint)
    turnos.map(turno => { 
        Cards[0].info.push(
            {nro:turno.nro, lang:turno.lang, datetime:turno.datetime}
        )
    })
        Cards.forEach(card =>{
            const CardI = new MyCard({type:"select", id: card.id}, card);
            this.children[1].children[0].children[7].children.push(CardI)
        })
    }

    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../scripts/masterTemplate.js")
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
        this.children.push({type: "option", props:{value:""}, children:["Seleccione un Turno" ]})
        data.info.forEach(element => {
            this.children.push(
                {type: "option", props:{value:element.nro}, children:[
                    element.lang + " - " +
                    element.datetime[0] +
                    element.datetime[1] + "/" +
                    element.datetime[2] +
                    element.datetime[3] + "/" +
                    element.datetime[4] +
                    element.datetime[5] + 
                    element.datetime[6] +
                    element.datetime[7] + " - " +
                    element.datetime[8] +
                    element.datetime[9] + ":"  +
                    element.datetime[10] +
                    element.datetime[11] + "hs"
                ]},
            )
        });
    }

    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}

export {deleteCredencial};