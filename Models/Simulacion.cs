using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFinal_Simulador.Models
{
    public class Simulacion
    {
        public int id { set; get; }
        public string nombre { set; get; }
        public int cantidadMaquinas { set; get; }
        public decimal duracionTotal { set; get; }
    }
}
