using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace ADA.Models
{
    public class TB_USUARIO
    {
        [Key]
        [Required]
        [Display(Name = "CODIGO")]
        public string cod_usu { get; set; }

        [Required]
        [Display(Name = "CONTRASEÑA")]
        //[DataType(DataType.Password)]
        public string pas_usu { get; set; }

        
        
        [Display(Name = "NOMBRE DE USUARIO")]
        public string nom_usu { get; set; }

       
        [Display(Name = "TIPO DE USUARIO")]
        public string tip_usu { get; set; }

        
        [Display(Name = "EMPRESA")]
        public string empresa { get; set; }        

       
    }
}
