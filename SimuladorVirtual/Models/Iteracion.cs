using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SimuladorVirtual.Models
{
    public class Iteracion
    {
        [Key]
        public int Id { set; get; }
        public int IdSimulacion { set; get; }
        public int IdMaquina { set; get; }
        public int NumeroIteracion { set; get; }
        public int CantidadProducto { set; get; }
        public int EstadoMaquina { set; get; }
    }
}
