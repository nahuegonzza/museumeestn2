class mapa{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
    }
    children = [
        {type: "img", props:{class:"map2", src:"style/img/mapa-museo.png"}}
    ]
}

export {mapa};