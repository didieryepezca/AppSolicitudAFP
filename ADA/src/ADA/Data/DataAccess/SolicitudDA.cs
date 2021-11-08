using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ADA.Models.Entities;
using ADA.Data;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;
using System.Data;

namespace ADA.Data.DataAccess
{
    public class SolicitudDA
    {

        public IEnumerable<TB_CYBER_SOLICITUD> GetSolicitudes(DateTime Fecha_Ini, DateTime Fecha_Fin, string dni, string nombres, string accion = "")
        {
            var ana = new List<TB_CYBER_SOLICITUD>();

            using (var db = new ApplicationDbContext())
            {
                IQueryable<TB_CYBER_SOLICITUD> query = db.TB_CYBER_SOLICITUD;

                query = query.Where(item => item.FECHA_SOLICITUD_CLIENTE.Date >= Fecha_Ini.Date &&
                item.FECHA_SOLICITUD_CLIENTE.Date <= Fecha_Fin.Date);

                if (!String.IsNullOrWhiteSpace(accion))
                {
                    query = query.Where(item => item.FECHA_SOLICITUD_CLIENTE.Date >= Fecha_Ini.Date &&
                item.FECHA_SOLICITUD_CLIENTE.Date <= Fecha_Fin.Date);

                }

                if (!String.IsNullOrWhiteSpace(dni))
                {
                    query = query.Where(item => item.NUMERO_DOCUMENTO == dni);
                }

                if (!String.IsNullOrWhiteSpace(nombres))
                {
                    query = query.Where(item => item.NOMBRES.Contains(nombres) || item.APELLIDO_PATERNO.Contains(nombres) || item.APELLIDO_MATERNO.Contains(nombres));

                }

                ana = query.ToList();
            }
            return ana;
        }


        public IEnumerable<TB_CYBER_SOLICITUD_OP> GetSolicitudesAlex(DateTime Fecha_Ini, DateTime Fecha_Fin, string dni, string nombres, string accion = "")
        {
            var ana = new List<TB_CYBER_SOLICITUD_OP>();

            using (var db = new ApplicationDbContext())
            {
                IQueryable<TB_CYBER_SOLICITUD_OP> query = db.TB_CYBER_SOLICITUD_OP;

                query = query.Where(item => item.FECHA_SOLICITUD_CLIENTE.Date >= Fecha_Ini.Date &&
                item.FECHA_SOLICITUD_CLIENTE.Date <= Fecha_Fin.Date);

                if (!String.IsNullOrWhiteSpace(accion))
                {
                    query = query.Where(item => item.FECHA_SOLICITUD_CLIENTE.Date >= Fecha_Ini.Date &&
                item.FECHA_SOLICITUD_CLIENTE.Date <= Fecha_Fin.Date);

                }

                if (!String.IsNullOrWhiteSpace(dni))
                {
                    query = query.Where(item => item.NUMERO_DOCUMENTO == dni);
                }

                if (!String.IsNullOrWhiteSpace(nombres))
                {
                    query = query.Where(item => item.NOMBRES.Contains(nombres)|| item.APELLIDO_PATERNO.Contains(nombres)|| item.APELLIDO_MATERNO.Contains(nombres));
                    
                }


                ana = query.ToList();
            }
            return ana;
        }


        public IEnumerable<TB_OPPLUS_SOLICITUD> GetSolicitudesOpplus(DateTime Fecha_Ini, DateTime Fecha_Fin, string dni, string nombres, string accion = "")
        {
            var ana = new List<TB_OPPLUS_SOLICITUD>();

            using (var db = new ApplicationDbContext())
            {
                IQueryable<TB_OPPLUS_SOLICITUD> query = db.TB_OPPLUS_SOLICITUD;

                query = query.Where(item => item.FECHA_SOLICITUD_CLIENTE.Date >= Fecha_Ini.Date &&
                item.FECHA_SOLICITUD_CLIENTE.Date <= Fecha_Fin.Date);

                if (!String.IsNullOrWhiteSpace(accion))
                {
                    query = query.Where(item => item.FECHA_SOLICITUD_CLIENTE.Date >= Fecha_Ini.Date &&
                item.FECHA_SOLICITUD_CLIENTE.Date <= Fecha_Fin.Date);

                }

                if (!String.IsNullOrWhiteSpace(dni))
                {
                    query = query.Where(item => item.NUMERO_DOCUMENTO == dni);
                }

                if (!String.IsNullOrWhiteSpace(nombres))
                {
                    query = query.Where(item => item.NOMBRES.Contains(nombres) || item.APELLIDO_PATERNO.Contains(nombres) || item.APELLIDO_MATERNO.Contains(nombres));

                }


                ana = query.ToList();
            }
            return ana;
        }



        public int insertSolicitud(TB_CYBER_SOLICITUD solicitud)
        {
            var result = 0;
            
            using (var db = new ApplicationDbContext())
            {                                  
                    db.Add(solicitud);
                    result = db.SaveChanges();               
            }
            return result;
        }

        public int insertSolicitudOp(TB_CYBER_SOLICITUD_OP solicitud)
        {
            var result = 0;

            using (var db = new ApplicationDbContext())
            {
                db.Add(solicitud);
                result = db.SaveChanges();
            }
            return result;
        }




        public int insertDocumento(TB_CYBER_ENLACE enlace)
        {
            var result = 0;

            using (var db = new ApplicationDbContext())
            {
                db.Add(enlace);
                result = db.SaveChanges();
            }
            return result;
        }


        public IEnumerable<TB_CYBER_SOLICITUD> checkDuplicado(string dni)
        {

            var ana = new List<TB_CYBER_SOLICITUD>();
            using (var db = new ApplicationDbContext())
            {
                IQueryable<TB_CYBER_SOLICITUD> query = db.TB_CYBER_SOLICITUD;

                query = query.Where(item => item.NUMERO_DOCUMENTO == dni);

                ana = query.ToList();
            }
            return ana;
        } 

        public TB_CYBER_SOLICITUD GetSolicitud(int codigo)
        {
            var result = new TB_CYBER_SOLICITUD();
            {
                using (var db = new ApplicationDbContext())
                {
                    result = db.TB_CYBER_SOLICITUD.Where(item => item.CODIGO == codigo).FirstOrDefault();
                }
            }
            return result;
        }


        public TB_CYBER_SOLICITUD_OP GetSolicitudOp(int codigo)
        {
            var result = new TB_CYBER_SOLICITUD_OP();
            {
                using (var db = new ApplicationDbContext())
                {
                    result = db.TB_CYBER_SOLICITUD_OP.Where(item => item.CODIGO == codigo).FirstOrDefault();
                }
            }
            return result;
        }




        public TB_OPPLUS_SOLICITUD GetSolicitudOpplus(int codigo)
        {
            var result = new TB_OPPLUS_SOLICITUD();
            {
                using (var db = new ApplicationDbContext())
                {
                    result = db.TB_OPPLUS_SOLICITUD.Where(item => item.CODIGO == codigo).FirstOrDefault();
                }
            }
            return result;
        }





        public IEnumerable<TB_CYBER_ENLACE> GetAdjuntos(int codigo)
        {
            var result = new List<TB_CYBER_ENLACE>();

            using (var db = new ApplicationDbContext())
            {
                IQueryable<TB_CYBER_ENLACE> query = db.TB_CYBER_ENLACE;

                //query = query.Select(item => item.DESCRIPCION.Distinct()).Where;

                query = query.Where(item => item.CODIGO == codigo);


                return query.ToList();

            }

            
        }


        public int UpdateSolicitud(TB_CYBER_SOLICITUD solicitud)
        {
            var result = 0;
            using (var db = new ApplicationDbContext())
            {
                var soli = db.TB_CYBER_SOLICITUD.Where(item => item.CODIGO == solicitud.CODIGO).FirstOrDefault();

                soli.FECHA_SOLICITUD_CLIENTE = solicitud.FECHA_SOLICITUD_CLIENTE;
                soli.FECHA_RECEPCION_CYBER = solicitud.FECHA_RECEPCION_CYBER;
                soli.AFP = solicitud.AFP;
                soli.TIPO_DOCUMENTO = solicitud.TIPO_DOCUMENTO;
                soli.NUMERO_DOCUMENTO = solicitud.NUMERO_DOCUMENTO;
                soli.NOMBRES = solicitud.NOMBRES;
                soli.APELLIDO_PATERNO = solicitud.APELLIDO_PATERNO;
                soli.APELLIDO_MATERNO = solicitud.APELLIDO_MATERNO;
                soli.EMAIL = solicitud.EMAIL;
                soli.NUM_CREDITO = solicitud.NUM_CREDITO;
                soli.DESTINO_CREDITO = solicitud.DESTINO_CREDITO;
                soli.MODALIDAD = solicitud.MODALIDAD;
                soli.NUM_OFICINA = solicitud.NUM_OFICINA;
                soli.PROVINCIA = solicitud.PROVINCIA;
                soli.FECHA_DOCUMENTACIONC = solicitud.FECHA_DOCUMENTACIONC;
                soli.ESTADO_SOLICITUD = solicitud.ESTADO_SOLICITUD;
                soli.ESTADO_CTA_AFP = solicitud.ESTADO_CTA_AFP;
                soli.DNI = solicitud.DNI;
                soli.CONSULTA_INDICES = solicitud.CONSULTA_INDICES;
                soli.INFORCORP = solicitud.INFORCORP;
                soli.SOLICITUD_COMPLETA = solicitud.SOLICITUD_COMPLETA;
                soli.FECHA_OBSERVACION = solicitud.FECHA_OBSERVACION;
                soli.GESTOR = solicitud.GESTOR;
                soli.OBSERVACIONES_GESTOR = solicitud.OBSERVACIONES_GESTOR;

                soli.FECHA_ASIGNACION = solicitud.FECHA_ASIGNACION;
                soli.FECHA_DICTAMEN = solicitud.FECHA_DICTAMEN;
                soli.FECHA_GESTION = solicitud.FECHA_GESTION;
                soli.AFP_125 = solicitud.AFP_125;
                soli.MONEDA = solicitud.MONEDA;
                soli.VALOR_INMUEBLE = solicitud.VALOR_INMUEBLE;
                soli.MONEDA_INMUEBLE = solicitud.MONEDA_INMUEBLE;
                soli.ABOGADO = solicitud.ABOGADO;

                result = db.SaveChanges();
            }

            return result;
        }

        public int UpdateSolicitudOP(TB_CYBER_SOLICITUD_OP solicitud)
        {
            var result = 0;
            using (var db = new ApplicationDbContext())
            {
                var soli = db.TB_CYBER_SOLICITUD_OP.Where(item => item.CODIGO == solicitud.CODIGO).FirstOrDefault();

                soli.FECHA_SOLICITUD_CLIENTE = solicitud.FECHA_SOLICITUD_CLIENTE;
                soli.FECHA_RECEPCION_CYBER = solicitud.FECHA_RECEPCION_CYBER;
                soli.AFP = solicitud.AFP;
                soli.TIPO_DOCUMENTO = solicitud.TIPO_DOCUMENTO;
                soli.NUMERO_DOCUMENTO = solicitud.NUMERO_DOCUMENTO;
                soli.NOMBRES = solicitud.NOMBRES;
                soli.APELLIDO_PATERNO = solicitud.APELLIDO_PATERNO;
                soli.APELLIDO_MATERNO = solicitud.APELLIDO_MATERNO;
                soli.EMAIL = solicitud.EMAIL;
                soli.NUM_CREDITO = solicitud.NUM_CREDITO;
                soli.DESTINO_CREDITO = solicitud.DESTINO_CREDITO;
                soli.MODALIDAD = solicitud.MODALIDAD;
                soli.NUM_OFICINA = solicitud.NUM_OFICINA;
                soli.PROVINCIA = solicitud.PROVINCIA;
                soli.FECHA_DOCUMENTACIONC = solicitud.FECHA_DOCUMENTACIONC;
                soli.ESTADO_SOLICITUD = solicitud.ESTADO_SOLICITUD;
                soli.ESTADO_CTA_AFP = solicitud.ESTADO_CTA_AFP;
                soli.DNI = solicitud.DNI;
                soli.CONSULTA_INDICES = solicitud.CONSULTA_INDICES;
                soli.INFORCORP = solicitud.INFORCORP;
                soli.SOLICITUD_COMPLETA = solicitud.SOLICITUD_COMPLETA;
                soli.FECHA_OBSERVACION = solicitud.FECHA_OBSERVACION;
                soli.GESTOR = solicitud.GESTOR;
                soli.OBSERVACIONES_GESTOR = solicitud.OBSERVACIONES_GESTOR;

                soli.FECHA_ASIGNACION = solicitud.FECHA_ASIGNACION;
                soli.FECHA_DICTAMEN = solicitud.FECHA_DICTAMEN;
                soli.FECHA_GESTION = solicitud.FECHA_GESTION;
                soli.AFP_125 = solicitud.AFP_125;
                soli.MONEDA = solicitud.MONEDA;
                soli.VALOR_INMUEBLE = solicitud.VALOR_INMUEBLE;
                soli.MONEDA_INMUEBLE = solicitud.MONEDA_INMUEBLE;
                soli.ABOGADO = solicitud.ABOGADO;
                soli.FECHA_SELLO_GESTOR = solicitud.FECHA_SELLO_GESTOR;

                result = db.SaveChanges();
            }

            return result;
        }




        public IEnumerable<TB_AFP> getAFPS()
        {
            var result = new List<TB_AFP>();

            using (var db = new ApplicationDbContext())
            {
                result = db.TB_AFP.ToList();
                
                return result;
            }
        }

        public IEnumerable<TB_AFP_MODALIDAD> getModalidades()
        {
            var result = new List<TB_AFP_MODALIDAD>();

            using (var db = new ApplicationDbContext())
            {
                result = db.TB_AFP_MODALIDAD.ToList();

                return result;
            }
        }

        public IEnumerable<TB_OFICINA_N> getOficinas()
        {
            var result = new List<TB_OFICINA_N>();

            using (var db = new ApplicationDbContext())
            {
                result = db.TB_OFICINA_N.ToList();

                return result;
            }
        }


        public IEnumerable<TB_OFICINA_N> ListarOficinas(string vCod)
        {

            var ana = new List<TB_OFICINA_N>();

            using (var db = new ApplicationDbContext())
            {
                IQueryable<TB_OFICINA_N> query = db.TB_OFICINA_N;

                if (!String.IsNullOrWhiteSpace(vCod))
                {
                    query = query.Where(item => item.COD_TERRITORIO == vCod);
                }

                ana = query.ToList();


            }
            return ana;

        }



        public IEnumerable<TB_TERRITORIO_N> getTerritorios()
        {
            var result = new List<TB_TERRITORIO_N>();

            using (var db = new ApplicationDbContext())
            {
                result = db.TB_TERRITORIO_N.ToList();

                return result;
            }
        }


        public IEnumerable<TB_CYBER_ESTADO> getEstados()
        {
            var result = new List<TB_CYBER_ESTADO>();

            using (var db = new ApplicationDbContext())
            {
                result = db.TB_CYBER_ESTADO.ToList();

                return result;
            }
        }


        public IEnumerable<TB_CYBER_RECHAZO> getRechazos()
        {
            var result = new List<TB_CYBER_RECHAZO>();

            using (var db = new ApplicationDbContext())
            {
                result = db.TB_CYBER_RECHAZO.ToList();

                return result;
            }
        }


        public String USP_TB_CYBER_ENVIAR(int vCodigo, String vUsuario)
        {
            var result = "OK";
            DateTime fecha_out = DateTime.Now;

            try
            {


                using (var db = new ApplicationDbContext())
                {
                    db.Database.SetCommandTimeout(180);

                    SqlParameter pArchivo = new SqlParameter();
                    pArchivo.ParameterName = "@CODIGO";
                    pArchivo.Value = vCodigo;
                    pArchivo.SqlDbType = SqlDbType.VarChar;
                    pArchivo.Direction = System.Data.ParameterDirection.Input;

                    SqlParameter pUsua = new SqlParameter();
                    pUsua.ParameterName = "@USUARIO";
                    pUsua.Value = vUsuario;
                    pUsua.SqlDbType = SqlDbType.VarChar;
                    pUsua.Direction = System.Data.ParameterDirection.Input;


                    db.Database.ExecuteSqlCommand("USP_TB_CYBER_ENVIAR @CODIGO ,@USUARIO ", pArchivo, pUsua);


                }

            }
            catch (Exception ex)
            {

                result = ex.Message;
            }


            return result;
        }




        public IEnumerable<TB_VALIDAR_PRE_AFP_CODIGO> GetPreAFP(Int32 codigo)
        {
            var result = new List<TB_VALIDAR_PRE_AFP_CODIGO>();

            using (var db = new ApplicationDbContext())
            {
                IQueryable<TB_VALIDAR_PRE_AFP_CODIGO> query = db.TB_VALIDAR_PRE_AFP_CODIGO;

                //query = query.Select(item => item.DESCRIPCION.Distinct()).Where;

                query = query.Where(item => item.CODIGO == codigo);


                return query.ToList();

            }


        }


        public int UpdatePreAFP( string estado, int id)
        {
            var result = 0;

            using (var db = new ApplicationDbContext())
            {               

                var preafp = db.TB_VALIDAR_PRE_AFP_CODIGO.Where(item => item.ID == id).FirstOrDefault();

                preafp.ESTADO = estado;           

                result = db.SaveChanges();
            }
            
            return result;

        }


        public int UpdateSolitudOp(string obser,string estado, int id)
        {
            var result = 0;

            using (var db = new ApplicationDbContext())
            {

                var preafp = db.TB_OPPLUS_SOLICITUD.Where(item => item.CODIGO == id).FirstOrDefault();

                preafp.ESTADO_VALIDAR = estado;
                preafp.OBSER = obser;

                result = db.SaveChanges();
            }

            return result;

        }


        public int UpdateSolitudCyber(string obser,string estado, int id)
        {
            var result = 0;

            using (var db = new ApplicationDbContext())
            {

                var preafp = db.TB_CYBER_SOLICITUD.Where(item => item.CODIGO == id).FirstOrDefault();

                preafp.ESTADO_SOLICITUD = estado;
                preafp.OBSERVACIONES_GESTOR = obser;

                result = db.SaveChanges();
            }

            return result;

        }



        //public TB_VALIDAR_PRE_AFP_CODIGO GetPreAFP(int codigo)
        //{
        //    var result = new TB_VALIDAR_PRE_AFP_CODIGO();
        //    {
        //        using (var db = new ApplicationDbContext())
        //        {
        //            result = db.TB_VALIDAR_PRE_AFP_CODIGO.Where(item => item.CODIGO == codigo).FirstOrDefault();
        //        }
        //    }
        //    return result;
        //}





    }
}
