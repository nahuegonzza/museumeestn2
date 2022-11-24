class turn{
    constructor(props) {
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.children = [ 
            {type:"br"},
            {type: "section",
             props:{class:"form"}, 
             children:[
                {type: "form", 
                children:[
                    {type: "h2", children:["Solicitud de Turnos"]},
                    {type: "input", props:{class:"controls", type:"text", name:"nombres", id:"nombres", placeholder:"Nombre", required:"required"}},
                    {type: "input", props:{class:"controls", type:"text", name:"apellidos", id:"apellidos", placeholder:"Apellido", required:"required"}},
                    {type: "input", props:{class:"controls", type:"text", name:"dni", id:"dni", placeholder:"DNI", pattern:"[0-9]{6,8}", title:"XX.XXX.XXX (Solo Numeros)", required:"required"  }},
                    {type: "input", props:{class:"controls", type:"email", name:"correo", id:"correo", placeholder:"Correo Electronico", required:"required"}},
                    {type: "input", props:{class:"controls", type:"tel", name:"tel", id:"tel", placeholder:"Numero de Telefono", title:"0223-XXXXXXX", patern:"[0-3]{4}[0-9]{1}[0-9]{6}", required:"required"}},
                    {type: "select", props:{class:"controls", name:"cant", id:"cant", required:"required"}, children:[
                        {type: "option", props:{value:""}, children:["Cantidad de Personas"]},
                        {type: "option", props:{value:"1"}, children:["1"]},
                        {type: "option", props:{value:"2"}, children:["2"]},
                        {type: "option", props:{value:"3"}, children:["3"]},
                        {type: "option", props:{value:"4"}, children:["4"]},
                        {type: "option", props:{value:"5"}, children:["5"]},
                        {type: "option", props:{value:"6"}, children:["6"]}
                    ]},
                    {type: "div", children:[ ]},
                    {type:"input", props:{class:"buttons", type:"submit", value:"Solicitar Turno"}}
                ]}
            ]}
        ];
        this._CargarDatos();
    }

    _CargarDatos = ()=>{
        let Cards = [
            {id:"Select", title:"Select",
                info: [
                    {nro:"1", lang:"Español", datetime: "191220220930"}, //19/12/2022 - 09:30
                    {nro:"2", lang:"Ingles", datetime: "211220220830"}, //21/12/2022 - 08:30
                    {nro:"3", lang:"Frances", datetime: "241220221100"}, //24/12/2022 - 11:00
                ]
            },
        ];
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
}






export {turn};