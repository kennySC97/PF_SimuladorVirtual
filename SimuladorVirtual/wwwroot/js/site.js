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
    TiempoReparacion;
    Estado;
}



function postSimulacion() {

    var simulacion = new Simulacion();
    var maquina1 = new Maquina();
    var maquina2 = new Maquina();
    var maquina3 = new Maquina();

    simulacion.Nombre = "Simulacion";
    simulacion.CantidadMaquinas = 3;
    simulacion.DuracionTotal = $("#txt_duracion").val();

    maquina1.NombreMaquina = $("#txt_nomMaq1").val();
    maquina1.CostoOperacion = $("#txt_costeMaq1").val();
    maquina1.TiempoReparacion = $("#txt_tiempoMaq1").val();
    maquina1.ProbabilidadFallo = $("#txt_falloMaq1").val();
    maquina1.NombreProducto = $("#txt_nomProd").val();
    maquina1.PrecioProducto = $("#txt_costoProd").val();
    maquina1.Estado = 1;

    maquina2.NombreMaquina = $("#txt_nomMaq2").val();
    maquina2.CostoOperacion = $("#txt_costeMaq2").val();
    maquina2.TiempoReparacion = $("#txt_tiempoMaq2").val();
    maquina2.ProbabilidadFallo = $("#txt_falloMaq2").val();
    maquina2.NombreProducto = $("#txt_nomProd").val();
    maquina2.PrecioProducto = $("#txt_costoProd").val();
    maquina2.Estado = 1;

    maquina3.NombreMaquina = $("#txt_nomMaq3").val();
    maquina3.CostoOperacion = $("#txt_costeMaq3").val();
    maquina3.TiempoReparacion = $("#txt_tiempoMaq3").val();
    maquina3.ProbabilidadFallo = $("#txt_falloMaq3").val();
    maquina3.NombreProducto = $("#txt_nomProd").val();
    maquina3.PrecioProducto = $("#txt_costoProd").val();
    maquina3.Estado = 1;

    console.log(simulacion);
    console.log(maquina1);
    console.log(maquina2);
    console.log(maquina3);

    $.ajax({
        url: "/",
        type: "POST",
        success: function (data) {

        },
        error: function (error) {

        }
    });

}