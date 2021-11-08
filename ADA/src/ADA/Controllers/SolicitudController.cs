using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;

using ADA.Models;
using ADA.Models.Entities;
using ADA.Data;
using ADA.Data.DataAccess;
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;
using System.Data;

namespace ADA.Controllers
{
    public class SolicitudController : Controller
    {

        private IHostingEnvironment hostingEnv;
        private readonly UserManager<ApplicationUser> userManager;


        public SolicitudController(IHostingEnvironment hostingEnv, UserManager<ApplicationUser> userManager)
        {
            this.hostingEnv = hostingEnv;
            this.userManager = userManager;
        }


        public IActionResult Index()
        {
            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;
            return View();
        }

        public string Duplicado(string dni)
        {
            SolicitudDA da = new SolicitudDA();

            var model = da.checkDuplicado(dni).Count();
            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            return model.ToString();
        }

        public string ExcluirSabDom(DateTime startDate, DateTime endDate)
        {

            int weekendDays = 0;
            int DaysBetween = 0;
            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            try
            {
                for (DateTime date = startDate; date.Date <= endDate.Date; date = date.AddDays(1))
                {
                    if (endDate >= startDate)
                    {
                        DaysBetween = Convert.ToInt16((endDate - startDate).TotalDays);
                    }

                    if ((date.DayOfWeek == DayOfWeek.Saturday) || (date.DayOfWeek == DayOfWeek.Sunday))
                    {
                        weekendDays++;
                    }
                }
            }
            catch
            {

                Exception e;
            }
            return Convert.ToString(DaysBetween - weekendDays);
        }


        public IActionResult solicitud_Lista(DateTime Fecha_Ini, DateTime Fecha_Fin, string dni, string nombres, string accion = "")
        {
            SolicitudDA da = new SolicitudDA();

            UsuarioDA userDA = new UsuarioDA();
            var modelo = userDA.GetUsuario("P035086");

            ViewBag.usuarioCodigo = modelo.cod_usu;
            ViewBag.usuarioName = modelo.nom_usu;
            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;           

            //ViewBag.fecha_Archivo = DateTime.Now.ToString("yyyy-MM-dd");

            string vAccion = "";

            if (Fecha_Ini.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                Fecha_Ini = DateTime.Now;
            }

            if (Fecha_Fin.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                Fecha_Fin = DateTime.Now;
            }

            ViewBag.Fecha_Ini = Fecha_Ini.ToString("yyyy-MM-dd");
            ViewBag.Fecha_Fin = Fecha_Fin.ToString("yyyy-MM-dd");

            if (!String.IsNullOrWhiteSpace(accion))
            {
                vAccion = accion;
            }

            var model = da.GetSolicitudes(Fecha_Ini, Fecha_Fin, dni, nombres, vAccion);

            return View(model);

        }

        public IActionResult solicitud_Lista_Op(DateTime Fecha_Ini, DateTime Fecha_Fin, string dni, string nombres, string accion = "")
        {
            SolicitudDA da = new SolicitudDA();

            UsuarioDA userDA = new UsuarioDA();
            var modelo = userDA.GetUsuario("P035086");

            ViewBag.usuarioCodigo = modelo.cod_usu;
            ViewBag.usuarioName = modelo.nom_usu;
            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            //ViewBag.fecha_Archivo = DateTime.Now.ToString("yyyy-MM-dd");

            string vAccion = "";

            if (Fecha_Ini.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                //Fecha_Ini = DateTime.Today.AddDays(-7);
                //Fecha_Ini = DateTime.Now;
            }

            if (Fecha_Fin.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                //Fecha_Fin = DateTime.Now;
            }

            ViewBag.Fecha_Ini = Fecha_Ini.ToString("yyyy-MM-dd");
            ViewBag.Fecha_Fin = Fecha_Fin.ToString("yyyy-MM-dd");

            if (!String.IsNullOrWhiteSpace(accion))
            {
                vAccion = accion;
            }

            var model = da.GetSolicitudesAlex(Fecha_Ini, Fecha_Fin, dni, nombres, vAccion);

            return View(model);

        }




        public IActionResult solicitud_Validar(DateTime Fecha_Ini, DateTime Fecha_Fin, string dni, string nombres, string accion = "")
        {
            SolicitudDA da = new SolicitudDA();

            UsuarioDA userDA = new UsuarioDA();
            var modelo = userDA.GetUsuario("P035086");

            ViewBag.usuarioCodigo = modelo.cod_usu;
            ViewBag.usuarioName = modelo.nom_usu;

            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;



            //ViewBag.fecha_Archivo = DateTime.Now.ToString("yyyy-MM-dd");

            string vAccion = "";

            if (Fecha_Ini.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                Fecha_Ini = DateTime.Now;
            }

            if (Fecha_Fin.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                Fecha_Fin = DateTime.Now;
            }

            ViewBag.Fecha_Ini = Fecha_Ini.ToString("yyyy-MM-dd");
            ViewBag.Fecha_Fin = Fecha_Fin.ToString("yyyy-MM-dd");

            if (!String.IsNullOrWhiteSpace(accion))
            {
                vAccion = accion;
            }

            var modelCyber = da.GetSolicitudes(Fecha_Ini, Fecha_Fin, dni, nombres, vAccion);
            ViewBag.SolitudCyber = modelCyber;

            var model = da.GetSolicitudesOpplus(Fecha_Ini, Fecha_Fin,dni,nombres, vAccion);

            return View(model);

        }



        [HttpGet]
        public IActionResult solicitud_Crear(DateTime fecha_cliente, DateTime fecha_cyber)
        {
            ViewBag.MsjExito = "none";
            ViewBag.MessageError = "none";
            //DateTime fecha_cliente, fecha_cyber;

            var soli = new SolicitudDA();

            ViewBag.AFPS = soli.getAFPS();
            ViewBag.MODALIDADES = soli.getModalidades();
            ViewBag.OFICINAS = soli.getOficinas();
            ViewBag.TERRITORIOS = soli.getTerritorios();
            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            if (fecha_cliente.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                fecha_cliente = DateTime.Now;
            }

            if (fecha_cyber.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                fecha_cyber = DateTime.Now;
            }

            ViewBag.fechaCliente = fecha_cliente.ToString("yyyy-MM-dd HH:mm");
            ViewBag.fechaCyber = fecha_cyber.ToString("yyyy-MM-dd HH:mm");


            return View();
        }      


        [HttpPost]
        public IActionResult solicitud_Crear(TB_CYBER_SOLICITUD solicitud, DateTime fecha_cliente, DateTime fecha_cyber)
        {
            try
            {             

                var soli = new SolicitudDA();

                ViewBag.AFPS = soli.getAFPS();
                ViewBag.MODALIDADES = soli.getModalidades();
                ViewBag.OFICINAS = soli.getOficinas();
                ViewBag.TERRITORIOS = soli.getTerritorios();

                ViewBag.fecha_cliente = fecha_cliente.ToString("yyyy-MM-dd");
                ViewBag.fecha_cyber = fecha_cyber.ToString("yyyy-MM-dd");              


                solicitud.FECHA_SOLICITUD_CLIENTE = fecha_cliente;
                solicitud.FECHA_RECEPCION_CYBER = fecha_cyber;
                solicitud.ESTADO_SOLICITUD = "100";

                solicitud.NUM_CREDITO.ToString();
                //solicitud.NUM_CREDITO = credito.Replace("-", String.Empty);


                //CAMPOS QUE NOSE
                solicitud.ABOGADO = "";
                solicitud.MOTIVO_RECHAZO = "";
                solicitud.NUM_PRESTAMO = 0;
                solicitud.AFP_125 = 0;
                solicitud.MONEDA = "";
                solicitud.VALOR_INMUEBLE = 000;
                solicitud.MONEDA_INMUEBLE = "";
                solicitud.DICTAMEN = "";
                solicitud.COMENTARIO_ABOGADO = "";
                solicitud.LUGAR_PRECONFORMIDAD = "";
                solicitud.GESTOR_CONTACTO = "";
                solicitud.FECHA_ENVIO_AFP = Convert.ToDateTime("1900-01-01");
                solicitud.OBSER = "";

                var da = new SolicitudDA();
                var result = da.insertSolicitud(solicitud);

                if (result > 0)
                {

                    ViewBag.MsjExito = "flex";
                    ViewBag.MessageError = "none";
                    return View(solicitud);
                    
                }
                else
                {
                    //return ViewBag.MsjFracaso = "No se pudo grabar"; 
                    ViewBag.MsjExito = "none";
                    ViewBag.MessageError = "flex";

                    return View(solicitud);
                }
            }
            catch (Exception)
            {
                ViewBag.MessageError = "No se pudo grabar";
            }

            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            return View(solicitud);
        }

        [HttpGet]
        public IActionResult solicitud_Crear_Op(DateTime fecha_cliente, DateTime fecha_cyber)
        {
            //DateTime fecha_cliente, fecha_cyber;
            ViewBag.MsjExito = "none";
            ViewBag.MessageError = "none";

            var soli = new SolicitudDA();

            ViewBag.AFPS = soli.getAFPS();
            ViewBag.MODALIDADES = soli.getModalidades();
            ViewBag.OFICINAS = soli.getOficinas();
            ViewBag.TERRITORIOS = soli.getTerritorios();
            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            if (fecha_cliente.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                fecha_cliente = DateTime.Now;
            }

            if (fecha_cyber.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                fecha_cyber = DateTime.Now;
            }

            ViewBag.fechaCliente = fecha_cliente.ToString("yyyy-MM-dd HH:mm");
            ViewBag.fechaCyber = fecha_cyber.ToString("yyyy-MM-dd HH:mm");


            return View();
        }

        [HttpPost]
        public IActionResult solicitud_Crear_Op(TB_CYBER_SOLICITUD_OP solicitud, DateTime fecha_cliente, DateTime fecha_cyber)
        {
            try
            {
                var soli = new SolicitudDA();

                ViewBag.AFPS = soli.getAFPS();
                ViewBag.MODALIDADES = soli.getModalidades();
                ViewBag.OFICINAS = soli.getOficinas();
                ViewBag.TERRITORIOS = soli.getTerritorios();

                ViewBag.fecha_cliente = fecha_cliente.ToString("yyyy-MM-dd");
                ViewBag.fecha_cyber = fecha_cyber.ToString("yyyy-MM-dd");

                solicitud.FECHA_SOLICITUD_CLIENTE = fecha_cliente;
                solicitud.FECHA_RECEPCION_CYBER = fecha_cyber;
                solicitud.ESTADO_SOLICITUD = "100";

                solicitud.NUM_CREDITO.ToString();
                //solicitud.NUM_CREDITO = credito.Replace("-", String.Empty);


                //CAMPOS QUE NOSE
                solicitud.ABOGADO = "";
                solicitud.MOTIVO_RECHAZO = "";
                solicitud.NUM_PRESTAMO = 0;
                solicitud.AFP_125 = 0;
                solicitud.MONEDA = "";
                solicitud.VALOR_INMUEBLE = 000;
                solicitud.MONEDA_INMUEBLE = "";
                solicitud.DICTAMEN = "";
                solicitud.COMENTARIO_ABOGADO = "";
                solicitud.LUGAR_PRECONFORMIDAD = "";
                solicitud.GESTOR_CONTACTO = "";
                solicitud.FECHA_ENVIO_AFP = Convert.ToDateTime("1900-01-01");
                solicitud.OBSER = "";

                var da = new SolicitudDA();
                var result = da.insertSolicitudOp(solicitud);

                if (result > 0)
                {

                    ViewBag.MsjExito = "flex";
                    ViewBag.MessageError = "none";
                    //return RedirectToAction("solicitud_Lista_Op");

                    return View(solicitud);

                }
                else
                {
                    ViewBag.MsjExito = "none";
                    ViewBag.MessageError = "flex";                   

                    return View(solicitud);
                }
            }
            catch (Exception)
            {
                ViewBag.error = "No se pudo grabar";
            }

            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            return View(solicitud);
        }




        [HttpGet]
        public IActionResult solicitud_Editar(DateTime fecha_cliente, DateTime fecha_cyber, int codigo)
        {
            //DateTime fecha_cliente, fecha_cyber;
            ViewBag.MsjExito = "none";
            ViewBag.MessageError = "none";

            var soliEdit = new SolicitudDA();

            var model = soliEdit.GetSolicitud(codigo);

            ViewBag.docsAdjuntos = soliEdit.GetAdjuntos(codigo);
            ViewBag.AFPS = soliEdit.getAFPS();
            ViewBag.MODALIDADES = soliEdit.getModalidades();
            ViewBag.OFICINAS = soliEdit.getOficinas();
            ViewBag.TERRITORIOS = soliEdit.getTerritorios();
            ViewBag.ESTADOS = soliEdit.getEstados();
            ViewBag.RECHAZOS = soliEdit.getRechazos();
            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            if (fecha_cliente.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                fecha_cliente = DateTime.Now;
            }

            if (fecha_cyber.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                fecha_cyber = DateTime.Now;
            }

            //ViewBag.fecCli = model.FECHA_SOLICITUD_CLIENTE.ToString("yyyy-MM-dd HH:mm");
            //ViewBag.fecCyber = model.FECHA_RECEPCION_CYBER.ToString("yyyy-MM-dd HH:mm");

            ViewBag.fechaCliente = fecha_cliente.ToString("yyyy-MM-dd HH:mm");
            ViewBag.fechaCyber = fecha_cyber.ToString("yyyy-MM-dd HH:mm");


            ViewBag.SelectTer = model.PROVINCIA;


            List<TB_OFICINA_N> x = new List<TB_OFICINA_N>();
            ViewBag.OficinaListar = soliEdit.ListarOficinas(model.PROVINCIA).ToList();

            ViewBag.SelectOfi = model.NUM_OFICINA; 

            /////////////////////
            return View(model);
        }

        [HttpPost]
        public IActionResult solicitud_Editar(TB_CYBER_SOLICITUD solicitud, DateTime fecha_cliente, DateTime fecha_cyber)
        {
            var soliEdit = new SolicitudDA();
            var model = soliEdit.GetSolicitud(Convert.ToInt16(solicitud.CODIGO));

            try
            {        

                ViewBag.AFPS = soliEdit.getAFPS();
                ViewBag.MODALIDADES = soliEdit.getModalidades();
                ViewBag.OFICINAS = soliEdit.getOficinas();
                ViewBag.TERRITORIOS = soliEdit.getTerritorios();
                ViewBag.ESTADOS = soliEdit.getEstados();
                ViewBag.RECHAZOS = soliEdit.getRechazos();


                ViewBag.docsAdjuntos = soliEdit.GetAdjuntos(Convert.ToInt16(solicitud.CODIGO));


                ViewBag.fecha_cliente = fecha_cliente.ToString("yyyy-MM-dd");
                ViewBag.fecha_cyber = fecha_cyber.ToString("yyyy-MM-dd");
                ViewBag.vUsuario = vGlobal.vUsuario;
                ViewBag.vPerfil = vGlobal.vPerfil;
                ViewBag.vEmpresa = vGlobal.vEmpresa;


                solicitud.FECHA_SOLICITUD_CLIENTE = fecha_cliente;
                solicitud.FECHA_RECEPCION_CYBER = fecha_cyber;

                //REEMPLAZAR GUIONES 
                string credito = solicitud.NUM_CREDITO;
                solicitud.NUM_CREDITO = credito.Replace("-", String.Empty);



                var da = new SolicitudDA();
                var result = da.UpdateSolicitud(solicitud);

                if (result > 0)
                {
                    if(solicitud.ESTADO_SOLICITUD=="104")
                    da.USP_TB_CYBER_ENVIAR(Convert.ToInt16(solicitud.CODIGO), vGlobal.vUsuario);

                    ViewBag.SelectTer = model.PROVINCIA;

                    List<TB_OFICINA_N> x = new List<TB_OFICINA_N>();
                    ViewBag.OficinaListar = soliEdit.ListarOficinas(model.PROVINCIA).ToList();

                    ViewBag.SelectOfi = model.NUM_OFICINA;

                    ViewBag.MsjExito = "flex";
                    ViewBag.MessageError = "none";

                    return View(solicitud);
                }
                else
                {
                    ViewBag.MsjExito = "none";
                    ViewBag.MessageError = "flex";
                    
                    return View(solicitud);
                }
            }
            catch (Exception)
            {
                ViewBag.error = "No se pudo grabar";
            }

           // var soliEdit = new SolicitudDA();          

            return View(solicitud);
        }



        [HttpGet]
        public IActionResult solicitud_Editar_Op(DateTime fecha_cliente, DateTime fecha_cyber, int codigo)
        {
            //DateTime fecha_cliente, fecha_cyber;
            ViewBag.MsjExito = "none";
            ViewBag.MessageError = "none";

            var soliEdit = new SolicitudDA();

            var model = soliEdit.GetSolicitudOp(codigo);

            //ViewBag.docsAdjuntos = soliEdit.GetAdjuntos(codigo);
            ViewBag.AFPS = soliEdit.getAFPS();
            ViewBag.MODALIDADES = soliEdit.getModalidades();
            ViewBag.OFICINAS = soliEdit.getOficinas();
            ViewBag.TERRITORIOS = soliEdit.getTerritorios();
            ViewBag.ESTADOS = soliEdit.getEstados();
            ViewBag.RECHAZOS = soliEdit.getRechazos();
            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            if (fecha_cliente.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                fecha_cliente = DateTime.Now;
            }

            if (fecha_cyber.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                fecha_cyber = DateTime.Now;
            }

            //ViewBag.fecCli = model.FECHA_SOLICITUD_CLIENTE.ToString("yyyy-MM-dd HH:mm");
            //ViewBag.fecCyber = model.FECHA_RECEPCION_CYBER.ToString("yyyy-MM-dd HH:mm");

            ViewBag.fechaCliente = fecha_cliente.ToString("yyyy-MM-dd HH:mm");
            ViewBag.fechaCyber = fecha_cyber.ToString("yyyy-MM-dd HH:mm");


            ViewBag.SelectTer = model.PROVINCIA;


            List<TB_OFICINA_N> x = new List<TB_OFICINA_N>();
            ViewBag.OficinaListar = soliEdit.ListarOficinas(model.PROVINCIA).ToList();

            ViewBag.SelectOfi = model.NUM_OFICINA;

            /////////////////////
            return View(model);
        }

        [HttpPost]
        public IActionResult solicitud_Editar_Op(TB_CYBER_SOLICITUD_OP solicitud, DateTime fecha_cliente, DateTime fecha_cyber)
        {
            var soliEdit = new SolicitudDA();
            var model = soliEdit.GetSolicitudOp(Convert.ToInt16(solicitud.CODIGO));
            try
            {
                ViewBag.AFPS = soliEdit.getAFPS();
                ViewBag.MODALIDADES = soliEdit.getModalidades();
                ViewBag.OFICINAS = soliEdit.getOficinas();
                ViewBag.TERRITORIOS = soliEdit.getTerritorios();
                ViewBag.ESTADOS = soliEdit.getEstados();
                ViewBag.RECHAZOS = soliEdit.getRechazos();
                ViewBag.fecha_cliente = fecha_cliente.ToString("yyyy-MM-dd");
                ViewBag.fecha_cyber = fecha_cyber.ToString("yyyy-MM-dd");
                ViewBag.vUsuario = vGlobal.vUsuario;
                ViewBag.vPerfil = vGlobal.vPerfil;
                ViewBag.vEmpresa = vGlobal.vEmpresa;

                solicitud.FECHA_SOLICITUD_CLIENTE = fecha_cliente;
                solicitud.FECHA_RECEPCION_CYBER = fecha_cyber;

                //REEMPLAZAR GUIONES 
                string credito = solicitud.NUM_CREDITO;
                solicitud.NUM_CREDITO = credito.Replace("-", String.Empty);

                var da = new SolicitudDA();
                var result = da.UpdateSolicitudOP(solicitud);

                if (result > 0)
                {
                    //if (solicitud.ESTADO_SOLICITUD == "104")
                    //da.USP_TB_CYBER_ENVIAR(Convert.ToInt16(solicitud.CODIGO), vGlobal.vUsuario);

                    ViewBag.SelectTer = model.PROVINCIA;

                    List<TB_OFICINA_N> x = new List<TB_OFICINA_N>();
                    ViewBag.OficinaListar = soliEdit.ListarOficinas(model.PROVINCIA).ToList();

                    ViewBag.SelectOfi = model.NUM_OFICINA;

                    ViewBag.MsjExito = "flex";
                    ViewBag.MessageError = "none";
                    //return RedirectToAction("solicitud_Lista_Op");

                    return View(solicitud);
                }
                else
                {
                    ViewBag.MsjExito = "none";
                    ViewBag.MessageError = "flex";
                    return View(solicitud);
                }
            }
            catch (Exception)
            {
                ViewBag.error = "No se pudo grabar";
            }           

            return View(solicitud);
        }




        public IActionResult adjuntarArchivo(ICollection<IFormFile> files, int codigo, string AFP, string observacion)
        {
            SolicitudDA da = new SolicitudDA();
            TB_CYBER_ENLACE enla = new TB_CYBER_ENLACE();

            var arch = Request.Form.Files;
            var uploads = Path.Combine(hostingEnv.WebRootPath, "uploads");
            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            foreach (var file in arch)
            {

                if (file.Length > 0)
                {
                    using (var fileStream = new FileStream(Path.Combine(uploads, file.FileName.Replace(file.FileName, Convert.ToString(codigo) + "-C-" + file.FileName)), FileMode.Create))

                        file.CopyTo(fileStream);

                    enla.CODIGO = codigo;
                    enla.AFP = AFP;
                    enla.DESCRIPCION = file.Name;
                    enla.LINK = Convert.ToString(codigo) + "-C-" + file.FileName;
                    enla.OBSERVACION = observacion;
                    enla.ESTADO = "A";

                    var model = da.insertDocumento(enla);

                    return Json("OK");
                }                
               
            }

            return Json("");             
          
        }


        public List<TB_OFICINA_N> ListOficina(string cod) {

            var soliEdit = new SolicitudDA();
            List<TB_OFICINA_N> x = new List<TB_OFICINA_N>();
            x = soliEdit.ListarOficinas(cod).ToList();
            //var cadena = "";

            //foreach (var element in x)
            //{

            //    cadena = cadena + element.COD_OFIC + "-" + element.OFICINA + ";";


            //}

            //cadena = cadena.Remove(cadena.Length - 1);
            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            return x.ToList();
        }



        [HttpGet]
        public IActionResult solicitud_Editar_valid(DateTime fecha_cliente, DateTime fecha_cyber, int codigo)
        {
            //DateTime fecha_cliente, fecha_cyber;

            ViewBag.vUsuario = vGlobal.vUsuario;
            ViewBag.vPerfil = vGlobal.vPerfil;
            ViewBag.vEmpresa = vGlobal.vEmpresa;

            var soliEdit = new SolicitudDA();

            var model = soliEdit.GetSolicitudOpplus(codigo);


            ViewBag.docsAdjuntos = soliEdit.GetAdjuntos(codigo);
            ViewBag.PorValidarlos = soliEdit.GetPreAFP(codigo);




            ViewBag.AFPS = soliEdit.getAFPS();
            ViewBag.MODALIDADES = soliEdit.getModalidades();
            ViewBag.OFICINAS = soliEdit.getOficinas();
            ViewBag.TERRITORIOS = soliEdit.getTerritorios();
            ViewBag.ESTADOS = soliEdit.getEstados();
            ViewBag.RECHAZOS = soliEdit.getRechazos();

            if (fecha_cliente.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                fecha_cliente = DateTime.Now;
            }

            if (fecha_cyber.Date == Convert.ToDateTime("01/01/0001").Date)
            {

                fecha_cyber = DateTime.Now;
            }

            //ViewBag.fecCli = model.FECHA_SOLICITUD_CLIENTE.ToString("yyyy-MM-dd HH:mm");
            //ViewBag.fecCyber = model.FECHA_RECEPCION_CYBER.ToString("yyyy-MM-dd HH:mm");

            ViewBag.fechaCliente = fecha_cliente.ToString("yyyy-MM-dd HH:mm");
            ViewBag.fechaCyber = fecha_cyber.ToString("yyyy-MM-dd HH:mm");


            return View(model);
        }


        [HttpPost]
        public IActionResult solicitud_Editar_valid(TB_CYBER_SOLICITUD solicitud, DateTime fecha_cliente, DateTime fecha_cyber)
        {
            try
            {
                ViewBag.vUsuario = vGlobal.vUsuario;
                ViewBag.vPerfil = vGlobal.vPerfil;
                ViewBag.vEmpresa = vGlobal.vEmpresa;

                var soliEdit = new SolicitudDA();

                ViewBag.AFPS = soliEdit.getAFPS();
                ViewBag.MODALIDADES = soliEdit.getModalidades();
                ViewBag.OFICINAS = soliEdit.getOficinas();
                ViewBag.TERRITORIOS = soliEdit.getTerritorios();
                ViewBag.ESTADOS = soliEdit.getEstados();
                ViewBag.RECHAZOS = soliEdit.getRechazos();



                ViewBag.fecha_cliente = fecha_cliente.ToString("yyyy-MM-dd");
                ViewBag.fecha_cyber = fecha_cyber.ToString("yyyy-MM-dd");


                solicitud.FECHA_SOLICITUD_CLIENTE = fecha_cliente;
                solicitud.FECHA_RECEPCION_CYBER = fecha_cyber;

                //REEMPLAZAR GUIONES 
                string credito = solicitud.NUM_CREDITO;
                solicitud.NUM_CREDITO = credito.Replace("-", String.Empty);



                var da = new SolicitudDA();
                var result = da.UpdateSolicitud(solicitud);

                if (result > 0)
                {
                    return RedirectToAction("solicitud_Lista");
                }
                else
                {
                    ViewBag.MessageError = "No se pudo grabar";
                    return View(solicitud);
                }
            }
            catch (Exception)
            {
                ViewBag.MessageError = "No se pudo grabar";
            }
            return View(solicitud);
        }



        public IActionResult UpdateValidad(int vCod) {

            SolicitudDA da = new SolicitudDA();
            var model = da.UpdatePreAFP("CONFORME", vCod);

            if (model > 0)
            {
                return Json("OK");
            }
            else
            {
                return Json("NO");
            }

        }



        [HttpPost]
        public IActionResult updateSolicitudConforme(string vObser,int vCod)
        {
            try
            {
                ViewBag.vUsuario = vGlobal.vUsuario;
                ViewBag.vPerfil = vGlobal.vPerfil;
                ViewBag.vEmpresa = vGlobal.vEmpresa;

                var soliEdit = new SolicitudDA();  
                
                var da = new SolicitudDA();
                var result = da.UpdateSolitudOp(vObser,"CONFORME", vCod);

                if (result > 0)
                {
                    return Json("OK");
                }
                else
                {
                    return Json("NO");

                }
            }
            catch (Exception)
            {
                ViewBag.MessageError = "No se pudo actualizar";
            }
            return Json("");
        }


        [HttpPost]
        public IActionResult updateSolicitudDevueltoOpplus(string vObser, int vCod)
        {
            try
            {
                ViewBag.vUsuario = vGlobal.vUsuario;
                ViewBag.vPerfil = vGlobal.vPerfil;
                ViewBag.vEmpresa = vGlobal.vEmpresa;

                var soliEdit = new SolicitudDA();

                var da = new SolicitudDA();
                var result = da.UpdateSolitudCyber(vObser,"105", vCod);
                da.UpdateSolitudOp(vObser, "DEVUELTO A CYBERGESTION", vCod);
                //da.UpdateSolicitud();

                if (result > 0)
                {
                    return Json("OK");
                }
                else
                {
                    return Json("NO");

                }
            }
            catch (Exception)
            {
                ViewBag.MessageError = "No se pudo actualizar";
            }
            return Json("");
        }




    }
}