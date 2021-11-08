using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ADA.Models.Entities
{
    public class TB_AFP_MODALIDAD
    {

        //LLAVE

        [Key]
        [Display(Name = "CODIGO")]
        public int CODIGO { get; set; }

        [Display(Name = "MODALIDAD")]
        public string MODALIDAD { get; set; }


        [Display(Name = "DESCRIPCION")]
        public string DESCRIPCION { get; set; }

    }
}
