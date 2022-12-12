class historia{
    constructor(props){
        this.type = "div";
        this.props = {class: "Identifier"};
        this.props = props;
    }
    children = [
        {type: "h2", props: {id:"", class:""} , children:["El origen del Museo Argentino de Ciencias Naturales se remonta al año 1812, oportunidad en la que el Primer Triunvirato, por inspiración de Bernardino Rivadavia, invitó a las provincias a reunir materiales para “dar principio al establecimiento en la Capital de un Museo de Historia Natural”. Esta iniciativa se concretó en 1823, mediante una resolución firmada por Rivadavia, entonces ministro de Martín Rodríguez."]},
        {type: "h3", props: {id:"", class:""} , children:["A lo largo de su larga vida el Museo se alojó sucesivamente en las celdas altas del Convento de Santo Domingo, en la Manzana de las Luces y algunos edificios de la plazoleta Monserrat, hasta instalarse definitivamente en 1937, en el edificio que hoy ocupa, construido de acuerdo a los cánones arquitectónicos vigentes en la época para los museos de ciencias europeos."]},
        {type: "h3", props: {id:"", class:""} , children:["Por sus salas y laboratorios pasaron investigadores de la talla de Alcides d’Orbigny Fernando Lahille, L.Kraglievich, Eduardo Ladislao Holmberg, María Isabel Hylton Scott, Alberto Castellanos, Rita Schiappelli, Rosendo Pascual, Enrique Balech y Esteban Boltovskoy; y tuvo por directores a personalidades como Herman Burmeister, Florentino Ameghino, Angel Gallardo, Martín Doello-Jurado, Agustín Riggi, Maximiliano Birabén, José María Gallardo, Wolfgang Volkheimer, Edgardo J. Romero y actualmente el Dr. Pablo L. Tubaro."]},
        {type: "h3", props: {id:"", class:""} , children:["Las colecciones del Museo estuvieron integradas en un principio por elementos heterogéneos que luego fueron agrupándose en forma temática y desprendiéndose para dar origen a otros museos de la capital. En 1947 el Poder Ejecutivo dispuso la transferencia de las secciones: Arqueología, Etnografía y Antropología al Museo Etnográfico dependiente de la Universidad de Buenos Aires."]},
        {type: "button", props:{class:"buttons SpeechBtn", id:"SpeechBtn", onclick: ()=> {this.Hablar("historia")}}, children:["🔊"]}
    ]

    Hablar =(place) =>{
        speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById(place).innerHTML));
    }
}


export {historia};