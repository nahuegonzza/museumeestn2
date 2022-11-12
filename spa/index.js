const Onload = async ()=>{
    const {Render} = await import("./scripts/toolComponents.js")
    const {MyBody} = await import("./scripts/masterTemplate.js")
    const MyBody1 = new MyBody();
    //console.log({MyBody1})
    idBody.append(Render(MyBody1));
    //MyBody1.Navegando("../modules/header.js", "header", "Header")
    MyBody1.Navegando("../modules/Index.js", "Index", "Main")
    MyBody1.Navegando("../modules/footer.js", "footer", "Footer")
}

window.onload = Onload; //Carga la funcion anterior (Onload) al momento de cargar la pagina