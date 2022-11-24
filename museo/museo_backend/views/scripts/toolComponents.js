function Render(Node) {
    if(typeof Node === "string"){ //Verifica que el elemento recibido no sea un string
        return document.createTextNode(Node) //En caso de que lo sea, crea un nodo de texto para representar en el HTML
    }
    if(Node.tagName){ //Verifica que el elemento recibido tenga tagName, de esa forma verifica si es un elemento nativo de HTML o no
        return Node; //Retorna el elemento recibido de forma directa
    }
    //--------------------------
    const element = document.createElement(Node.type); //Crea un elemento
    //console.log({element});
    if(Node.props){ //Si el Nodo tiene Propiedades...
        for (const prop in Node.props) { //Repite el ciclo por c/propiedad
            //console.log({prop})
            if(typeof Node.props[prop] === 'function' //Si la propiedad es una funcion...
                || typeof Node.props[prop] === 'object'){ //O es un objeto...
                element[prop] = Node.props[prop] //
            }else{ //En caso de no ser Funcion u Objeto
                element.setAttribute(prop, Node.props[prop]) //
            }
        }
    }
    if(Node.children){ //Si existe un atributo "Hijo"...
        Node.children.map(Render).forEach(Child => element.appendChild(Child)) //Mapea el hijo y por c/u lo envia como tal
    }
    //--------------------------
    return element; //Retorna el elemento completo generado
}
export {Render} //Exporta la funcion Render