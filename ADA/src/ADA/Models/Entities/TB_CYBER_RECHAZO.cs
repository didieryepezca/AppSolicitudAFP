using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ADA.Models.Entities
{
    public class TB_CYBER_RECHAZO
    {

        //LLAVE

        [Key]
        [Display(Name = "CODIGO")]
        public int CODIGO { get; set; }

        [Display(Name = "RECHAZO")]
        public string RECHAZO { get; set; }


        [Display(Name = "DESCRIPCION")]
        public string DESCRIPCION { get; set; }

    }
}
