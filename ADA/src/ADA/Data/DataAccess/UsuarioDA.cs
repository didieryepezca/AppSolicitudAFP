using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using ADA.Models;

namespace ADA.Data.DataAccess
{
    public class UsuarioDA
    {

        public IEnumerable<TB_USUARIO> ValidarUsuario(string cod = "", string pass = "")
        {

            var usuarios = new List<TB_USUARIO>();

            using (var db = new ApplicationDbContext())
            {
                IQueryable<TB_USUARIO> query = db.TB_USUARIO;

                if (!string.IsNullOrWhiteSpace(cod))
                {
                    query = query.Where(item => item.cod_usu == cod);
                }

                if (!string.IsNullOrWhiteSpace(pass))
                {
                    query = query.Where(item => item.pas_usu == pass);
                }

                usuarios =  query.ToList();
            }

            return usuarios;
        }

        public TB_USUARIO GetUsuario(string cod)
        {
            var result = new TB_USUARIO();
            {
                using (var db = new ApplicationDbContext())
                {
                    result = db.TB_USUARIO.Where(item => item.cod_usu == cod).FirstOrDefault();
                }
            }
            return result;
        }


        public int CrearUsuario(TB_USUARIO usuario)
        {
            var result = 0;
            using (var db = new ApplicationDbContext())
            {
                db.Add(usuario);
                result = db.SaveChanges();

            }
            return result;
        }


        public int UpdateUsuario(TB_USUARIO usuario)
        {
            var result = 0;
            using (var db = new ApplicationDbContext())
            {
                var user = db.TB_USUARIO.Where(item => item.cod_usu == usuario.cod_usu).FirstOrDefault();

                user.cod_usu = usuario.cod_usu;
                user.pas_usu = usuario.pas_usu;
                user.nom_usu = usuario.nom_usu;
                user.tip_usu = usuario.tip_usu;
                user.empresa = usuario.empresa;

                result = db.SaveChanges();
            }

            return result;
        }



    }
}
