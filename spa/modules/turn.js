class turn{
    constructor(props) {
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.children = [ 
            {type:"br"},
            {type: "section", props:{class:"form"}, children:[
                {type: "form", children:[
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
                    {type: "select", props:{class:"controls", name:"idioma", id:"idioma", required:"required"}, children:[
                        {type: "option", props:{value:""}, children:["Idioma"]},
                        {type: "option", props:{value:"1"}, children:["Español"]},
                        {type: "option", props:{value:"2"}, children:["Ingles"]},
                        {type: "option", props:{value:"3"}, children:["Frances"]},
                    ]},
                    {type:"br"},
                    {type:"input", props:{class:"buttons", type:"submit", value:"Solicitar Turno"}}
                ]}
            ]}
        ];
        this._CargarDatos();
    }

    _CargarDatos = ()=>{
        let Cards = [
            {id:"Select", title:"Select",
                opciones: [
                    { id: "Desc-01", opcion: "Opcion 1"},
                    { id: "Desc-02", opcion: "Opcion 2"}
                ]
            },
        ];
        Cards.forEach(card =>{
            const CardI = new MyCard({type:"select", id: card.id}, card);
            this.children.push(CardI);
        })
    }
}

class MyCard{ 
    constructor(props, data){
        this.type = "select"
        this.props = props;
        this.props.class = "card";
        this.children = []
        data.opciones.forEach(element => {
            this.children.push(
                {type: "option", children:[element.opcion]},
            )
        });
    }
}






export {turn};