using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ADA.Models.Entities
{
    public class TB_VALIDAR_PRE_AFP_CODIGO
    {

        [Key]     

        public int ID { get; set; }

        [Display(Name = "CODIGO")]
        public int CODIGO { get; set; }

        public int AFP { get; set; }

        public string NOMBRE { get; set; }

        public string ESTADO { get; set; }

        public string OBSERVACION { get; set; }

    }
}
