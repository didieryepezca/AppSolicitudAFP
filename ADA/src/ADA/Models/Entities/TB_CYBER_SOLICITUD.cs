using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace ADA.Models.Entities
{
    public class TB_CYBER_SOLICITUD
    {
      
        [Key]
        [Display(Name = "CODIGO")]
        public int? CODIGO { get; set; }

        [Display(Name = "FECHA SOLICITUD CLIENTE")]
        public DateTime FECHA_SOLICITUD_CLIENTE { get; set; }


        [Display(Name = "FECHA RECEPCION CYBER")]
        public DateTime FECHA_RECEPCION_CYBER { get; set; }


        [Display(Name = "TIPO DOCUMENTO")]
        [Required(ErrorMessage = "Ingrese el Tipo Documento.")]
        public string TIPO_DOCUMENTO { get; set; }


        [Display(Name = "NUMERO DOCUMENTO")]
        [Required(ErrorMessage = "Ingrese el Nro Documento.")]
        public string NUMERO_DOCUMENTO { get; set; }


        [Display(Name = "NOMBRES")]
        [Required(ErrorMessage = "Por favor ingrese los Nombres.")]
        public string NOMBRES { get; set; }


        [Display(Name = "APELLIDO PATERNO")]
        [Required(ErrorMessage = "Ingrese Apellido Paterno.")]
        public string APELLIDO_PATERNO { get; set; }


        [Display(Name = "APELLIDO MATERNO")]
        [Required(ErrorMessage = "Ingrese Apellido Materno.")]
        public string APELLIDO_MATERNO { get; set; }

        [Display(Name = "EMAIL")]
        public string EMAIL { get; set; }


        [Display(Name = "NUM CREDITO")]
        [Required(ErrorMessage = "Ingrese el Nro Credito.")]
        public string NUM_CREDITO { get; set; }


        [Display(Name = "DESTINO CREDITO")]
        [Required(ErrorMessage = "Ingrese el Destino del Credito.")]
        public string DESTINO_CREDITO { get; set; }

        [Display(Name = "MODALIDAD")]
        [Required(ErrorMessage = "Ingrese la Modalidad.")]
        public string MODALIDAD { get; set; }


        [Display(Name = "NUM OFICINA")]
        [Required(ErrorMessage = "Debe Elegir una oficina.")]
        public string NUM_OFICINA { get; set; }

        [Display(Name = "PROVINCIA")]
        [Required(ErrorMessage = "Debe Elegir un Territorio.")]
        public string PROVINCIA { get; set; }


        [Display(Name = "AFP")]
        [Required(ErrorMessage = "Debe Elegir una AFP")]
        public string AFP { get; set; }


        [Display(Name = "¿SOLICITUD COMPLETA?")]
        //[Required(ErrorMessage = "Seleccione una opcion")]
        public string SOLICITUD_COMPLETA { get; set; }

        [Display(Name = "¿ESTADO CTA AFP?")]
        //[Required(ErrorMessage = "Seleccione una opcion")]
        public string ESTADO_CTA_AFP { get; set; }



        [Display(Name = "DNI")]
        //[Required(ErrorMessage = "Seleccione una opcion")]
        public string DNI { get; set; }


        [Display(Name = "CONSULTA INDICES")]
        //[Required(ErrorMessage = "Seleccione una opcion")]
        public string CONSULTA_INDICES { get; set; }

       
        [Display(Name = "INFORCORP")]
        //[Required(ErrorMessage = "Seleccione una opcion")]
        public string INFORCORP { get; set; }



        [Display(Name = "GESTOR")]
        public string GESTOR { get; set; }



        [Display(Name = "FECHA ENVIO IMPROCEDENCIA ")]
        //[Required(ErrorMessage = "Debe Ingresar la Fecha")]
        public DateTime? FECHA_OBSERVACION { get; set; }



        [Display(Name = "MOTIVOS DE RECHAZO")]
        public string MOTIVO_RECHAZO  { get; set; }


        [Display(Name = "OBSERVACIONES GESTOR/ABOGADO")]
        public string OBSERVACIONES_GESTOR { get; set; }



        [Display(Name = "NUM_PRESTAMO")]
        public Int64? NUM_PRESTAMO { get; set; }


        [Display(Name = "FECHA ENVIO")]
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


        [Display(Name = "DICTAMEN")]
        public string DICTAMEN { get; set; }



        [Display(Name = "ABOGADO")]
        public string ABOGADO { get; set; }



        [Display(Name = "COMENTARIO ABOGADO")]
        public string COMENTARIO_ABOGADO { get; set; }



        [Display(Name = "LUGAR PRECONFORMIDAD")]
        public string LUGAR_PRECONFORMIDAD { get; set; }



        [Display(Name = "GESTOR CONTACTO")]
        public string GESTOR_CONTACTO { get; set; }



        [Display(Name = "FECHA ENVIO")]
        public DateTime? FECHA_ENVIO_AFP { get; set; }


        [Display(Name = "ESTADO SOLICITUD")]
        //[Required(ErrorMessage = "Seleccione una opcion")]
        public string ESTADO_SOLICITUD { get; set; }



        [Display(Name = "OBSERVACIONES POR DEVOLUCION")]
        public string OBSER { get; set; }


        
        [Display(Name = "FECHA DOCUMENTACION COMPLETA")]
        [Required(ErrorMessage = "Ingrese Fecha y Hora")]
        public string FECHA_DOCUMENTACIONC { get; set; }
    }
}
