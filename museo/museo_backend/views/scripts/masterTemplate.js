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
        //console.log(this.navForm)
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
            {type: "div", props:{id: "Container1", class: "container"}, children:[ 
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
        this.children = [ ];
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