using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimuladorVirtual.Database
{
    public class SimuladorVirtualContext:DbContext
    {
        public SimuladorVirtualContext(DbContextOptions<SimuladorVirtualContext> options):base(options)
        {

        }
    }
}
