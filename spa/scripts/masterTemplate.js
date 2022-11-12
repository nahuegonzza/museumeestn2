import{ Render } from "./toolComponents.js";

class domClass{
    constructor() { }
    navForm = [];
    Navegando = async (url, id, dir)=> {
        //console.log(url, id, dir);
        const MyContainer = document.querySelector("#"+dir)
        let nodes = MyContainer.querySelectorAll(".Identifier")
        nodes.forEach(node => {
            if (node.id != id){
                this.navForm[node.id] = node;
                MyContainer.removeChild(node);
            }
        });
        if(typeof this.navForm[id] !== "undefined"){
            MyContainer.append(this.navForm[id])
            return;
        }
        console.log(this.navForm)
        const ObjNav = await import(url);
        const ObjNavInstance = new ObjNav[id]({id: id, class:"Identifier"});
        const MyForm = Render(ObjNavInstance)
        this.navForm[id] = MyForm
        MyContainer.append(MyForm);
        return;
    }
}

class MyBody extends domClass{
    constructor() {
        super();
        this.type = "div";
        this.header = new MyHeader();
        this.main = new MyContainer1();
        this.footer = new MyFooter();
        this.children = [
            {type: "div", props:{id: "Container1", class: "container style2"}, children:[ 
                this.header, this.main, ]},
             this.footer
        ];
    }
}

class MyHeader extends domClass{ 
    constructor() {
        super();
        this.type = "header";
        this.props = {id:"Header", class:"navbar"};
        this.children = [
            {type: "a", children: [
                {type: "img", props: {src:"style/img/logo2.png", class:"logo", alt:"Logo", onclick: ()=> {
                    this.Navegando("../modules/Index.js", "Index", "Main")
                }}}
            ]},
            { type: "ul", children: [
                { type: "li", props:{onclick: ()=> { this.Navegando("../modules/mapa.js", "mapa", "Main") }}, children: ["Mapa"]},
                { type: "li", props:{onclick: ()=> { this.Navegando("../modules/visita.js", "visita", "Main") }}, children: ["Exhibiciones"]},
                { type: "li", props:{onclick: ()=> { this.Navegando("../modules/historia.js", "historia", "Main") }}, children: ["Historia del Museo"]},
                { type: "li", props:{onclick: ()=> { this.Navegando("../modules/turn.js", "turn", "Main") }}, children: ["Solicitar Turno"]},
                { type: "li", props:{onclick: ()=> { this.Navegando("../modules/iniciarSesion.js", "iniciarSesion", "Main") }}, children: [{type: "b", children:["Iniciar Sesion"]}]},
                { type: "li", props:{onclick: ()=> { this.Navegando("../modules/M_index.js", "M_index", "Main") }}, children: ["Manager"]},
            ]}
        ];
    }
}

class MyContainer1 extends domClass{
    constructor() {
        super();
        this.type = "main";
        this.props = {id:"Main"};
        this.children = [ ];
    }
}

class MyFooter extends domClass{
    constructor() {
        super();
        this.type = "footer";
        this.props = {id:"Footer", class:"footer"},
        this.children = [ ];
    }
}

export {MyBody}