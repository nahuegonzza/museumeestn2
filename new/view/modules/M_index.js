class M_index{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        
    }
    children = [ {type:"div", props:{class: "container manager"}, children:[
            {type: "a", props:{id:"Exposiciones"}, children: [
                {type:"h1", props:{class:"options", onclick: ()=> {this.Conectar("../modules/M_exposiciones.js", "M_exposiciones", "Main")}}, children: [
                    "Administrar Exposiciones"
                ]}
            ]},
            {type: "a", props:{id:"Guias"}, children: [
                {type:"h1", props:{class:"options"}, children: [
                    "Administrar Guias"
                ]}
            ]},
            {type: "a", props:{id:"Visitas"}, children: [
                {type:"h1", props:{class:"options"}, children: [
                    "Gestionar Visitas Guiadas"
                ]}
            ]},
            {type: "a", props:{id:"Turnos"}, children: [
                {type:"h1", props:{class:"options"}, children: [
                    "Gestionar Turnos"
                ]}
            ]},
            {type: "a", props:{id:"Credenciales"}, children: [
                {type:"h1", props:{class:"options"}, children: [
                    "Administrar Credenciales"
                ]}
            ]}
        ]}
    ]
    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}


export {M_index};