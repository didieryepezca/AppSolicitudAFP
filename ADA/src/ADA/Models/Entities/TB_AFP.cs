using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ADA.Models.Entities
{
    public class TB_AFP
    {
        [Key]
        [Display(Name = "CODIGO")]
        public int CODIGO { get; set; }

        [Display(Name = "AFP")]
        public string AFP { get; set; }


        [Display(Name = "DESCRIPCION")]
        public string DESCRIPCION { get; set; }

    }
}
