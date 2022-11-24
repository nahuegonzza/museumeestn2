class Index{
    constructor(props) {
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
        this.children = [ 
            {type: "h1", children: ["El Museo Argentino de Ciencias Naturales, ámbito único por historia y patrimonio, integra a la investigación, la conservación, la exhibición, y la educación para que toda la comunidad pueda descubrir, comprender, valorar y disfrutar la naturaleza (que incluye al hombre), sus procesos y diversidad, con énfasis en nuestro territorio."]},
            {type: "div", props:{class:"grid"}, children:[
                {type: "div", children:[
                    {type: "a", children:[
                        {type: "img", props:{class:"map", src:"style/img/mapa-museo.png", onclick: ()=> {this.Conectar("../modules/mapa.js", "mapa", "Main")}}}
                    ]}
                ]},
                {type: "div", props:{class:"mainTextDiv"}, children:[
                    {type: "h1", children: [
                        {type: "u", children:["Políticas"]}
                    ]},
                    {type: "h2", children:[" - Coleccionar e Investigar."]},
                    {type: "h2", children:[" - Conservar, exhibir y custodiar del patrimonio."]},
                    {type: "h2", children:[" - Divulgar la ciencia, entendida como la interpretación de la información científica para transmitirla a los distintos tipos de público posibles."]},
                    {type: "h2", children:[" - Que el público construya a través de su experiencia previa y la visita al museo su propio conocimiento. Donde el visitante pueda asumir un rol activo, participando en todas las ofertas educativas, involucrando su dimensión emocional y construyendo su propio conocimiento."]},
                    {type: "h2", children:[" - Complementar la educación formal (visitas articuladas a la currícula escolar)."]}
                ]}
            ]}
        ];
    }
    Conectar = async (url, id, dir)=> {
        const {MyBody} = await import("../scripts/masterTemplate.js")
        const MyBody1 = new MyBody();
        MyBody1.Navegando(url, id, dir);
    }
}



export {Index};