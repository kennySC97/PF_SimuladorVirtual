using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SimuladorVirtual.Models
{
    public class Simulacion
    {
        [Key]
        public int Id { set; get; }
        public string Nombre { set; get; }
        public int CantidadMaquinas { set; get; }
        public decimal DuracionTotal { set; get; }
    }
}
