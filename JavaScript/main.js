class torta {
    constructor(nombre,base,cortes,relleno,decoracion,precio, disponible)
    {
        this.nombre = nombre,
        this.base = base,
        this.cortes = cortes,
        this.relleno = relleno,
        this.decoracion = decoracion,
        this.precio = precio
        this.disponible = disponible
    }
    getIva()
    {
        return this.precio*0.21
    }
}
const balcarce = new torta(
    "Balcarce",
    "Pionono",
    "1",
    "dulce de leche, crema chantilly y merengue",
    "crema y merengues",
    300,
    false
)

const selvaNegra = new torta(
    "Selva Negra",
    "bizcochuelo de chocolate",
    "2",
    "crema chantilly y mermelada de cerezas",
    "crema, cerezas y ramas de chocolate",
    450,
    true
)

class Bebida {
    constructor(nombre, sabor, formato, cantidad, precio, disponible)
    {
    this.nombre = nombre
    this.sabor = sabor
    this.formato = formato
    this.cantidad = cantidad
    this.precio = precio
    this.disponible = disponible
    }
}

const Limonada = new Bebida ("Limonada","limon, menta y jengibre", "botella", 200, 250, false)
const jugoDeNaranja = new Bebida ("Cepita","naranja", "tetra", 200, 150, true)
const chocolatada = new Bebida ("Nesquik","chocolate con leche", "tetra", 200, 250, true)

class Salado {
    constructor(nombre, tipo, sabor, cantidad, precio, disponible){
        this.nombre = nombre
        this.tipo = tipo
        this.sabor = sabor
        this.cantidad = cantidad
        this.precio = precio
        this.disponible = disponible  
    }
}

const tostado = new Salado("Tostado de miga", "sandwich de miga tostado","jamon y queso", 4, 350, true)
const sconQueso = new Salado("Scones de queso", "scones","queso provolone", 3, 450, false)

var pedido = []

alert("A continuación le daremos opciones para armar su desayuno")

let opcionTorta = "Seleccione la porción de torta deseada\n";
opcionTorta += "1. "+balcarce.nombre+"\n"
opcionTorta += "2. "+selvaNegra.nombre+"\n"
 
    let opcion = 0
    while (opcion !==1 && opcion !==2) {
        opcion = parseInt(prompt(opcionTorta));
        switch (opcion)
        {
            case 1:
                {
                    alert("Usted eligió la torta: "+balcarce.nombre+"\nLa misma consta de una base de "+balcarce.base+" con "+balcarce.cortes+" cortes, y está relleno de "
                    +balcarce.relleno+". Está decorada con "+balcarce.decoracion)    
                    pedido.push(balcarce)          
                    break;  
                }
            case 2:
                {
                    alert("Usted eligió la torta: "+selvaNegra.nombre+"\nLa misma consta de una base de "+selvaNegra.base+" con "+selvaNegra.cortes+" corte, y está relleno de "
                    +selvaNegra.relleno+". Está decorada con "+selvaNegra.decoracion)
                    pedido.push(selvaNegra)
                    break;
                }
            default:
                {
                    alert("Por favor, elija una opción válida");
                }        
        }                 
    }

let opcionBebida = "Seleccione la bebida deseada\n";
opcionBebida += "1. "+Limonada.nombre+"\n"
opcionBebida += "2. "+chocolatada.nombre+"\n"
opcionBebida += "3. "+jugoDeNaranja.nombre+"\n"
 
    opcion = 0
    while (opcion !==1 && opcion !==2 && opcion !==3) {
        opcion = parseInt(prompt(opcionBebida));
        switch (opcion)
        {
            case 1:
                {
                    alert("Usted eligió la bebida: "+Limonada.nombre+".\nLa misma es sabor "+Limonada.sabor+" y viene en "+Limonada.formato+" de "
                    +Limonada.cantidad)
                    pedido.push(Limonada)
                    break
                }
            case 2:
                {
                    alert("Usted eligió la bebida: "+chocolatada.nombre+".\nLa misma es sabor "+chocolatada.sabor+" y viene en "+chocolatada.formato+" de "
                    +chocolatada.cantidad)
                    pedido.push(chocolatada)
                    break
                }
            case 3:
            {
                alert("Usted eligió la bebida: "+jugoDeNaranja.nombre+".\nLa misma es sabor "+jugoDeNaranja.sabor+" y viene en "+jugoDeNaranja.formato+" de "
                +jugoDeNaranja.cantidad)
                pedido.push(jugoDeNaranja)
                break
            }

            default:
                {
                    alert("Por favor, elija una opción válida");
                }        
        }  
    
    }

let opcionSalada = "Seleccione la porción salada deseada\n";
opcionSalada += "1. "+tostado.nombre+"\n"
opcionSalada += "2. "+sconQueso.nombre+"\n"
 
    opcion = 0
    while (opcion !==1 && opcion !==2) {
        opcion = parseInt(prompt(opcionSalada));
        switch (opcion)
        {
            case 1:
                {
                    alert("Usted eligió: "+tostado.nombre+"\n El mismo es un "+tostado.tipo+" sabor "+tostado.sabor+" de "+tostado.cantidad+" triangulos")
                    pedido.push(tostado)
                    break
                }
            case 2:
                {
                    alert("Usted eligió: "+sconQueso.nombre+"\n Los mismos son "+sconQueso.cantidad+" "+sconQueso.tipo+" sabor "+sconQueso.sabor)
                    pedido.push(sconQueso)
                    break
                }
            default:
                {
                    alert("Por favor, elija una opción válida");
                    break;
                }        
        }  
    }

    var sinStock = pedido.filter(producto => producto.cantidad == 0 || producto.disponible == false)
    {
        alert("No tenemos stock de los siguientes productos: "+sinStock)
    }

    alert("Su desayuno contiene "+(pedido.length-sinStock.length)+" productos.")