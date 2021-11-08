using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ADA.Models.Entities
{
    public class TB_OPPLUS_SOLICITUD_OP
    {

        [Key]
        [Display(Name = "CODIGO")]
        public int? CODIGO { get; set; }

        [Display(Name = "FECHA SOLICITUD CLIENTE")]
        public DateTime FECHA_SOLICITUD_CLIENTE { get; set; }


        [Display(Name = "FECHA RECEPCION CYBER")]
        public DateTime FECHA_RECEPCION_CYBER { get; set; }


        [Display(Name = "TIPO DOCUMENTO")]
        public string TIPO_DOCUMENTO { get; set; }


        [Display(Name = "NUMERO DOCUMENTO")]
        public string NUMERO_DOCUMENTO { get; set; }


        [Display(Name = "NOMBRES")]
        public string NOMBRES { get; set; }


        [Display(Name = "APELLIDO PATERNO")]
        public string APELLIDO_PATERNO { get; set; }


        [Display(Name = "APELLIDO MATERNO")]
        public string APELLIDO_MATERNO { get; set; }


        [Display(Name = "NUM CREDITO")]
        public string NUM_CREDITO { get; set; }


        [Display(Name = "DESTINO CREDITO")]
        public string DESTINO_CREDITO { get; set; }

        [Display(Name = "MODALIDAD")]
        public string MODALIDAD { get; set; }



        [Display(Name = "AFP")]
        public string AFP { get; set; }


        [Display(Name = "FECHA OBSERVACION")]
        public DateTime? FECHA_OBSERVACION { get; set; }




        [Display(Name = "FECHA GESTION")]
        public DateTime? FECHA_GESTION { get; set; }


        [Display(Name = "FECHA ASIGNACION")]
        public DateTime? FECHA_ASIGNACION { get; set; }


        [Display(Name = "FECHA Y HORA DICTAMEN")]
        public DateTime? FECHA_DICTAMEN { get; set; }


        [Display(Name = "MONTO SOLICITADO")]
        public decimal? AFP_125 { get; set; }



        [Display(Name = "MONEDA DEL PRESTAMO")]
        public string MONEDA { get; set; }



        [Display(Name = "VALOR INMUEBLE 125%")]
        public decimal? VALOR_INMUEBLE { get; set; }


        [Display(Name = "MONEDA INMUEBLE")]
        public string MONEDA_INMUEBLE { get; set; }


        [Display(Name = "ESTADO SOLICITUD")]
        public string ESTADO_SOLICITUD { get; set; }

        [Display(Name = "FECHA COMUNICACION")]
        public DateTime? FECHA_COMUNICACION { get; set; }


        [Display(Name = "ESTADO DE VALIDAR")]
        public string ESTADO_VALIDAR { get; set; }


        [Display(Name = "OBSER")]
        public string OBSER { get; set; }


        [Display(Name = "PRODUCTO")]
        public string PRODUCTO { get; set; }

    }
}
