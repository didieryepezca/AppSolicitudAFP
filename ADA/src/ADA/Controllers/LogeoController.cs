using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ADA.Models;
using ADA.Data.DataAccess;
using Microsoft.AspNetCore.Routing;
using ADA.Models.Entities;

namespace ADA.Controllers
{
    public class LogeoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
      
        public IActionResult Entrar(string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [HttpPost]       
        public IActionResult Entrar(string cod_usu, string pas_usu)
        { 
            UsuarioDA userDA = new UsuarioDA();
            var result = userDA.ValidarUsuario(cod_usu, pas_usu);

            //TB_USUARIO user = new TB_USUARIO();

            if (result.Count() > 0)
            {

                vGlobal.vUsuario = result.Select(x =>x.nom_usu).FirstOrDefault().ToString();
                vGlobal.vPerfil = result.Select(x => x.tip_usu).FirstOrDefault().ToString();
                vGlobal.vEmpresa = result.Select(x => x.empresa).FirstOrDefault().ToString();

                

                return RedirectToAction("Index", new RouteValueDictionary(
                            new { controller = "Home", action = "Index", cod = cod_usu }));               
            }

            if (result.Count() == 0)
            {
               
                ViewBag.usuarioInvalido = "El Usuario es Incorrecto o No Existe";
            }

            return View();
        }


        public IActionResult Registrar()
        {
            return View();
        }

    }
}