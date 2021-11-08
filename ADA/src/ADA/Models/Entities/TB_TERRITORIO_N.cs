using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ADA.Models.Entities
{
    public class TB_TERRITORIO_N
    {

        [Key]
        [Display(Name = "COD_TERRITORIO")]
        public string COD_TERRITORIO { get; set; }

        [Display(Name = "TERRITORIO")]
        public string TERRITORIO { get; set; }
        

    }
}
