class header{
    constructor(props){
        this.type = "header";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props.class = "navbar";
    }
    children = [
        
    ]
    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}


export {header};