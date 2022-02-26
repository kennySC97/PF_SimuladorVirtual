using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SimuladorVirtual.Models
{
    public class RegistroFallo
    {
        [Key]
        public int Id { set; get; }
        public int IdMaquina { set; get; }
        public int IdIteracion { set; get; }
    }
}
