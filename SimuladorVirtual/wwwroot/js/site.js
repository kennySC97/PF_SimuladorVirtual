// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

class Simulacion {
    Id;
    Nombre;
    CantidadMaquinas;
    DuracionTotal;
}

class Maquina {
    Id;
    IdSimulacion;
    NombreMaquina;
    CostoOperacion;
    ProbabilidadFallo;
    NombreProducto;
    PrecioProducto;
    CantidadProducto;
    TiempoReparacion;
    Estado;
}

class Iteracion {
    Id;
    IdSimulacion;
    IdMaquina;
    NumeroIteracion;
    CantidadProducto;
    EstadoMaquina;
}

var simulacion = new Simulacion();
var maquina1 = new Maquina();
var maquina2 = new Maquina();
var tiempoHoras = 0;

var pausa = false;

const iteraciones = [];

function salirApp() {
    window.close();
}


function postSimulacion() {

    tiempoHoras = $("#txt_duracion").val() * 24;

    simulacion.Nombre = "Simulacion";
    simulacion.CantidadMaquinas = 3;
    simulacion.DuracionTotal = $("#txt_duracion").val();

    maquina1.Id = 1;
    maquina1.NombreMaquina = $("#txt_nomMaq1").val();
    maquina1.CostoOperacion = $("#txt_costeMaq1").val();
    maquina1.CantidadProducto = $("#txt_tiempoMaq1").val();
    maquina1.TiempoReparacion = $("#txt_tiempoMaq1").val();
    maquina1.ProbabilidadFallo = Math.random();
    maquina1.NombreProducto = $("#txt_nomProd").val();
    maquina1.PrecioProducto = $("#txt_costoProd").val();
    maquina1.Estado = 1;

    maquina2.Id = 2;
    maquina2.NombreMaquina = $("#txt_nomMaq2").val();
    maquina2.CostoOperacion = $("#txt_costeMaq2").val();
    maquina2.CantidadProducto = $("#txt_tiempoMaq2").val();
    maquina2.TiempoReparacion = $("#txt_tiempoMaq2").val();
    maquina2.ProbabilidadFallo = Math.random();
    maquina2.NombreProducto = $("#txt_nomProd").val();
    maquina2.PrecioProducto = $("#txt_costoProd").val();
    maquina2.Estado = 1;

    prepararInfo();
}

function prepararInfo() {

    $("#div_datos").hide(true);
    $("#div_simulacion").show(true);

    $("#id_titulo_simulacion").text = `Simulacion del producto ${maquina1.NombreProducto}`;
    $("#nomMaq1").text(`Maquina #1: ${maquina1.NombreMaquina}`);
    $("#probFalloMaq1").text(`Probabilidad fallo de ${Math.round(maquina1.ProbabilidadFallo * 100)}%`);
    $("#horasRepMaq1").text(`Duracion de reparacion de ${maquina1.TiempoReparacion} horas`);

    $("#nomMaq2").text(`Maquina #2: ${maquina2.NombreMaquina}`);
    $("#probFalloMaq2").text(`Probabilidad fallo de ${Math.round(maquina2.ProbabilidadFallo * 100)}%`);
    $("#horasRepMaq2").text(`Duracion de reparacion de ${maquina2.TiempoReparacion} horas`);
}

function cambiarEstado(badge, estado) {
    if (estado) {
        badge.text("Activo");
        badge.removeClass("bg-danger");
        badge.addClass("bg-success");
    } else {
        badge.text("Dañada");
        badge.addClass("bg-danger");
        badge.removeClass("bg-success");
    }
}

function volver() {
    $("#div_datos").show(true);
    $("#div_simulacion").hide(true);
    $("#btn_pausar").hide(true);
    $("#btn_iniciar").show(true);
    $("#btn_pausar").text("Pausar");
    $("#btn_pausar").addClass("btn-warning");
    $("#btn_pausar").removeClass("btn-primary");
    pausa = false;
}

function iniciarSimulacion() {
    simularMaquina(maquina1);
    simularMaquina(maquina2);
    $("#btn_iniciar").hide(true);
    $("#btn_pausar").show(true);
}

function pausar() {
    if (pausa) {
        pausa = false;
        $("#btn_pausar").text("Pausar");
        $("#btn_pausar").addClass("btn-warning");
        $("#btn_pausar").removeClass("btn-primary");
    } else {
        pausa = true;
        $("#btn_pausar").text("Continuar");
        $("#btn_pausar").removeClass("btn-warning");
        $("#btn_pausar").addClass("btn-primary");
    }
}

async function simularMaquina(maquina) {    

    var contadorReparacion = maquina.TiempoReparacion;
    var contadorTiempo = 0;
    var cont24Horas = 0;
    var contDias = 0;

    do {

        await sleep(1000);

        if (!pausa) {

            var i = new Iteracion();

            if (Math.round(Math.random()) == Math.round(maquina.ProbabilidadFallo) && maquina.estado == 1) {
                maquina.Estado = 0;
                cambiarEstado((maquina.Id == 1) ? $("#estadoMaq1") : $("#estadoMaq2"), false);
            }

            if (maquina.Estado == 0 && contadorReparacion > 0) {
                contadorReparacion--;
            } else if (maquina.Estado == 0 && contadorReparacion == 0) {
                maquina.Estado = 1; contadorReparacion = maquina.TiempoReparacion;
                cambiarEstado((maquina.Id == 1) ? $("#estadoMaq1") : $("#estadoMaq2"), true);
            }

            i.Id = iteraciones.length + Math.floor(Math.random() * 50);
            i.IdMaquina = maquina.Id;
            i.CantidadProducto = (maquina.Estado == 1) ? maquina.CantidadProducto : 0;
            i.EstadoMaquina = maquina.Estado;
            

            contadorTiempo++;
            cont24Horas++;
            if (cont24Horas == 24) {
                cont24Horas = 0;
                contDias++;
            }
            $("#numIteracion").text(`${contDias} días y ${cont24Horas} horas`);
        }

    } while (contadorTiempo != tiempoHoras);

    $("#fin").show(true);

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}