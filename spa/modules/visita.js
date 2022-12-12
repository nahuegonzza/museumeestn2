class visita{
    constructor(props){
        this.type = "div";
        this.props = {class:"Identifier"};
        this.props = props;
        this.props = {class:"Identifier grid"};
        this._CargarDatos();
    }
    
    _CargarDatos = ()=>{
        let Cards = [
            {id:"Exposicion-1", title:"Antártida", photo: "./style/img/Visita/antartida.jpg",
                caracteristicas: [
                    { id: "Desc-01", description: "Al ingresar a esta sala, junto a una escena costera de una pareja de lobos marinos de dos pelos, se puede apreciar una rica diversidad de organismos."},
                    { id: "Desc-02", description: "Desde estrellas y erizos de mar, crustáceos y moluscos, hasta peces y aves propias de estos fríos ambientes. En un lateral domina el gigantesco cráneo de un cachalote."}
                ]
            },
            {id:"Exposicion-2", title:"Anfibios y reptiles", photo: "./style/img/Visita/anfibios.jpg",
                caracteristicas: [
                    { id: "Desc-01", description: "Ricas infografías, ejemplares conservados y calcos, permiten conocer la gran diversidad de sapos, ranas, tortugas, yacarés, lagartos y serpientes que habitan en nuestro país."},
                    { id: "Desc-02", description: "Entre los varios sectores que componen esta sala puede observarse una gran vitrina ambientada donde se muestran interesantes adaptaciones a diversos modos de vida."}
                ]
            },
            {id:"Exposicion-3", title:"Paleontología", photo: "./style/img/Visita/paleontologia.jpg",
                caracteristicas: [
                    { id: "Desc-01", description: "Una de las salas más importantes de América Latina, en cuanto a cantidad y calidad de material original exhibido. Impactan los calcos de dinosaurios descubiertos en territorio patagónico, por investigadores del Museo. Las vitrinas laterales e infografías permiten apreciar la evolución de la vida en la tierra de diversos grupos de animales y plantas, como el proceso de fosilización de estas últimas."},
                ]
            },
            {id:"Exposicion-4", title:"Aves", photo: "./style/img/Visita/aves.jpg",
                caracteristicas: [
                    { id: "Desc-01", description: "Un innovador recorrido, visual y acústico, de las diversas aves que habitan los distintos ambientes de la Argentina. En otros puede observarse una gran vitrina dedicada a la sistemática de las aves argentinas."},
                    { id: "Desc-02", description: "Allí se presentan, ordenadas de manera taxonómica, un total de 230 especies y se ofrece información de cada una de las familias presentes en nuestro país."}
                ]
            },
            {id:"Exposicion-5", title:"Osteología comparada", photo: "./style/img/Visita/osteologia.jpg",
                caracteristicas: [
                    { id: "Desc-01", description: "La gran diversidad de adaptaciones a los distintos modos de vida (ambiente, locomoción, alimentación, etc.), se manifiestan a través de los esqueletos de mamíferos, que se exhiben en esta sala."},
                ]
            },
            {id:"Exposicion-6", title:"Malacología", photo: "./style/img/Visita/malacologia.jpg",
                caracteristicas: [
                    { id: "Desc-01", description: "Esta sala contiene una rica colección de especies autóctonas y exóticas, tanto marinas como terrestres y de agua dulce. Importantes infografías permiten conocer su importancia sanitaria y los diversos usos dados por el hombre."},
                ]
            },
            {id:"Exposicion-7", title:"200 años de Historia", photo: "./style/img/Visita/200historia.jpg",
                caracteristicas: [
                    { id: "Desc-01", description: "A lo largo de su larga vida, el Museo se alojó sucesivamente en las celdas altas del Convento de Santo Domingo, en la manzana de las Luces y en algunos edificios de la plazoleta de Monserrat, hasta instalarse definitivamente en 1937, en este edificio construido especialmente para él. En esta sala se pueden descubrir algunos de los aspectos más interesantes de su historia."},
                ]
            },
            {id:"Exposicion-8", title:"Mamíferos Actuales", photo: "./style/img/Visita/mamiferos.jpg",
                caracteristicas: [
                    { id: "Desc-01", description: "Una serie de interesantes piezas de grandes mamíferos y un grupo de monos taxidermizados, hacen de presentación para esta sala. Están representados aquí los principales grupos de mamíferos, la mayoría autóctonos (salvo de grupos no presentes), a través de ambientaciones o dioramas, que permiten observar adaptaciones a los diversos modos de vida."},
                ]
            },
            {id:"Exposicion-9", title:"Buenos Aires, un millón de años atrás", photo: "./style/img/Visita/buenosaires.jpg",
                caracteristicas: [
                    { id: "Desc-01", description: "Esta sala expone a los mamíferos que habitaron la región pampeana en los últimos dos millones de años. Se muestra entre otros cómo es la estructura del subsuelo porteño y cuáles son algunas de las curiosidades de los hallazgos realizados en la ciudad de Buenos Aires."},
                ]
            },
            {id:"Exposicion-10", title:"Artrópodos", photo: "./style/img/Visita/artropodos.jpg",
            caracteristicas: [
                { id: "Desc-01", description: "En esta sala se pueden conocer los distintos grupos de insectos, ciempiés, arañas y cangrejos, a través de infografías y ricas colecciones. Modelos a gran escala muestran el vuelo, las adaptaciones del aparato bucal y las patas de estas especies. Importantes infografías muestran interesantes características sobre distintos aspectos de su biología."},
            ]
            },
            {id:"Exposicion-11", title:"Geología", photo: "./style/img/Visita/geologia.jpg",
            caracteristicas: [
                { id: "Desc-01", description: "En esta gran sala pueden apreciarse diversos bloques temáticos: el módulo Atlas Ambiental, diferentes tipos de minerales y rocas, infografías con temas como la estructura interna de la Tierra, tectónica de placas, deriva continental y otros. El Planetario ofrece la posibilidad de conocer nuestro cielo y las constelaciones."},
            ]
            },
            {id:"Exposicion-12", title:"Mirada infinita", photo: "./style/img/Visita/mirada.jpg",
                caracteristicas: [
                    { id: "Desc-01", description: "Esta Sala está destinada a homenajear el desarrollo de la ciencia en general y de las Ciencias Naturales en particular. La muestra está armada en módulos previstos como unidades autónomas, pero responden a un relato general, accesible y de clara visualización"},
                ]
            },
            {id:"Exposicion-13", title:"Mamiferos Africanos", photo: "./style/img/Visita/mamiferos_africanos.jpg",
                caracteristicas: [
                    { id: "Desc-01", description: "Esta sala expone a los mamíferos que habitaron la región pampeana en los últimos dos millones de años. Se muestra entre otros cómo es la estructura del subsuelo porteño y cuáles son algunas de las curiosidades de los hallazgos realizados en la ciudad de Buenos Aires."},
                ]
            },
            {id:"Exposicion-14", title:"Misterios del Mar", photo: "./style/img/Visita/mar.jpg",
                caracteristicas: [
                    { id: "Desc-01", description: "En esta exposicion se muestran los diveros habitantes del mar, tanto del mundo animal como vegetal, la biodiversidad abundante de la zona, y los misterios que pueden encontrarse alrededor de cada uno de ellos"},
                ]
            },
        ];
        Cards.forEach(card =>{
            const CardI = new MyCard({id: card.id}, card);
            this.children.push(CardI);
        })
    }
    children=[
        
    ]
}

class MyCard{ 
    constructor(props, data){
        this.type = "div"
        this.props = props;
        this.props.class = "card";
        this.children = [
            //{type:"label", children:[data.id]},
            {type:"h1", children:[data.title]},
            {type:"img", props:{src:data.photo}},
        ]
        data.caracteristicas.forEach(element => {
            this.children.push(
                {type: "label", children:[
                    {type:"h3", children:[element.description]},
                ]},
            )
        });
        this.children.push({type: "button", props:{class:"buttons SpeechBtn", id:"SpeechBtn", onclick: ()=> {this.Hablar(props.id)}}, children:["🔊"]})
    }
    Hablar =(place) =>{
        speechSynthesis.speak(new SpeechSynthesisUtterance(document.getElementById(place).innerHTML));
    }
}

    

export {visita};