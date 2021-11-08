using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ADA.Models.Entities;
using ADA.Data.DataAccess;
using ADA.Models;

namespace ADA.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index(string cod)
        {
            UsuarioDA userDA = new UsuarioDA();
            var model = userDA.GetUsuario(cod);

           
            ViewBag.codigo = model.cod_usu.ToString();
            ViewBag.NombreLogeado = model.nom_usu.ToString();

            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            return View();
        }

        public IActionResult UserUpdate(string cod)
        {
            UsuarioDA userDA = new UsuarioDA();
            
            var userEdit = userDA.GetUsuario(cod);
            ViewBag.NombreLogeado = userEdit.nom_usu.ToString();

            return View(userEdit);
        }

        [HttpPost]
        public IActionResult UserUpdate(TB_USUARIO usuario)
        {

            var userEdit = new UsuarioDA();
            var model = userEdit.UpdateUsuario(usuario);
           

            if (model > 0)
            {
                return RedirectToAction("Index");
            }
            else
            {
                ViewBag.MessageError = "No se pudo guardar la informacion";
                return View(usuario);
            }           
        }



        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
