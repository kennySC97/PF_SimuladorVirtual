using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoFinal_Simulador.Controllers
{
    public class SimuladorController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
