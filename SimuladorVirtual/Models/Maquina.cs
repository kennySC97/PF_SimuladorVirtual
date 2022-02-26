using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SimuladorVirtual.Models
{
    public class Maquina
    {
        [Key]
        public int Id { set; get; }
        public int IdSimulacion { set; get; }
        public string NombreMaquina { set; get; }
        public decimal CostoOperacion { set; get; }
        public decimal ProbabilidadFallo { set; get; }
        public string NombreProducto { set; get; }
        public decimal PrecioProducto { set; get; }
        public decimal TiempoReparacion { set; get; }
        public int Estado { set; get; }
        
    }
}
