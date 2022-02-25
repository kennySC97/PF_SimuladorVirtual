using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFinal_Simulador.Models
{
    public class Maquina
    {
        public int id { set; get; }
        public int idSimulacion { set; get; }
        public string nombreMaquina { set; get; }
        public decimal costoOperacion { set; get; }
        public string nombreProducto { set; get; }
        public decimal precioProducto { set; get; }
        public decimal tiempoReparacion { set; get; }
        public int estado { set; get; }
        
    }
}
