using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ADA.Models;
using ADA.Models.Entities;

namespace ADA.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public ApplicationDbContext()
        {

            Database.SetCommandTimeout(1500000);

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {

                    base.OnModelCreating(builder);
            //        Customize the ASP.NET Identity model and override the defaults if needed.
            //        For example, you can rename the ASP.NET Identity table names and more.
            //        Add your customizations after calling base.OnModelCreating(builder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer("Server=172.17.1.29;" +
                    "Database=AFP;" +
                    "Trusted_Connection=True;" +
                    "MultipleActiveResultSets=True;" +
                    "Connection Timeout=60000");
        }

        public DbSet<TB_CYBER_SOLICITUD> TB_CYBER_SOLICITUD { get; set; }
        //OPPLUS REPLICA
        public DbSet<TB_CYBER_SOLICITUD_OP> TB_CYBER_SOLICITUD_OP { get; set; }
        public DbSet<TB_AFP> TB_AFP { get; set; }
        public DbSet<TB_AFP_MODALIDAD> TB_AFP_MODALIDAD { get; set; }
        public DbSet<TB_OFICINA_N> TB_OFICINA_N { get; set; }
        public DbSet<TB_TERRITORIO_N> TB_TERRITORIO_N { get; set; }
        public DbSet<TB_CYBER_ESTADO> TB_CYBER_ESTADO { get; set; }
        public DbSet<TB_CYBER_RECHAZO> TB_CYBER_RECHAZO { get; set; }
        public DbSet<TB_CYBER_ENLACE> TB_CYBER_ENLACE { get; set; }
        public DbSet<TB_USUARIO> TB_USUARIO { get; set; }
        public DbSet<TB_OPPLUS_SOLICITUD> TB_OPPLUS_SOLICITUD { get; set; }    
        public DbSet<TB_VALIDAR_PRE_AFP_CODIGO> TB_VALIDAR_PRE_AFP_CODIGO { get; set; }
    }
}
