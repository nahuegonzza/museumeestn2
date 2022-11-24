class footer{
    constructor(props){
        this.type = "h4";
        this.props = {class: "Identifier"};
        this.props = props;
        this.props.class = "footer";
    }
    children = [
        {type: "b", children:[ 'Museo Argentino de Ciencias Naturales "Bernardino Rivadavia"' ]},
        {type: "br"},
        {type: "i", children:[ "Av. Angel Gallardo 470 - C1405DJR - Buenos Aires - Argentina." ]},
        {type: "br"},
        {type: "i", children:[ "Tel/Fax.: (5411) 4982-6595 / 8370 / 8797 / 4791 / 6670 / 1561 / 9410. (5411) 4981-9365 / 9282." ]}
    ]
    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}


export {footer};