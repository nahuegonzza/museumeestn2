class M_index{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        
    }
    children = [ {type:"div", props:{class: "container manager"}, children:[
            {type: "a", props:{id:"Exposiciones"}, children: [
                {type:"h1", props:{class:"options", onclick: ()=> {this.Conectar("../modules/Manager/M_exposiciones.js", "M_exposiciones", "Main")}}, children: [
                    "Administrar Exposiciones"
                ]}
            ]},
            {type: "a", props:{id:"Guias"}, children: [
                {type:"h1", props:{class:"options", onclick: ()=> {this.Conectar("../modules/Manager/M_guias.js", "M_guias", "Main")}}, children: [
                    "Administrar Guias"
                ]}
            ]},
            {type: "a", props:{id:"Visitas", onclick: ()=> {this.Conectar("../modules/Manager/M_visitas.js", "M_visitas", "Main")}}, children: [
                {type:"h1", props:{class:"options"}, children: [
                    "Gestionar Visitas Guiadas"
                ]}
            ]},
            {type: "a", props:{id:"Turnos", onclick: ()=> {this.Conectar("../modules/Manager/M_turnos.js", "M_turnos", "Main")}}, children: [
                {type:"h1", props:{class:"options"}, children: [
                    "Gestionar Turnos"
                ]}
            ]},
            {type: "a", props:{id:"Credenciales", onclick: ()=> {this.Conectar("../modules/Manager/M_credenciales.js", "M_credenciales", "Main")}}, children: [
                {type:"h1", props:{class:"options"}, children: [
                    "Administrar Credenciales"
                ]}
            ]}
        ]}
    ]
    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}


export {M_index};