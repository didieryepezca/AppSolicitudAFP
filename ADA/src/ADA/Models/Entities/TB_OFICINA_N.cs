using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ADA.Models.Entities
{
    public class TB_OFICINA_N
    {

        [Key]
        [Display(Name = "CODIGO OFICINA")]
        public string COD_OFIC { get; set; }

        [Display(Name = "OFICINA")]
        public string OFICINA { get; set; }


        [Display(Name = "COD_TERRITORIO")]
        public string COD_TERRITORIO { get; set; }



    }
}
