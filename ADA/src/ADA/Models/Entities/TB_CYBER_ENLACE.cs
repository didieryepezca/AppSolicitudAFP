using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ADA.Models.Entities
{
    public class TB_CYBER_ENLACE
    {

        [Key]
        [Display(Name = "COD_ENTITY")]
        public int COD_ENTITY { get; set; }


        [Display(Name = "CODIGO")]
        public int CODIGO { get; set; }




        [Display(Name = "AFP")]
        public string AFP { get; set; }


        [Display(Name = "DESCRIPCION")]
        public string DESCRIPCION { get; set; }

        [Display(Name = "LINK")]
        public string LINK { get; set; }

        [Display(Name = "OBSERVACION")]
        public string OBSERVACION { get; set; }


        [Display(Name = "ESTADO")]
        public string ESTADO { get; set; }

    }
}
