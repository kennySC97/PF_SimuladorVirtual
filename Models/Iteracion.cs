using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFinal_Simulador.Models
{
    public class Iteracion
    {
        public int id { set; get; }
        public int idSimulacion { set; get; }
        public int idMaquina { set; get; }
        public int numeroIteracion { set; get; }
        public int cantidadProducto { set; get; }
        public int estadoMaquina { set; get; }
    }
}
