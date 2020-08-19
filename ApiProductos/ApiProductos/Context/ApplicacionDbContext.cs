using ApiProductos.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiProductos.Context
{
    public class ApplicacionDbContext : DbContext
    {
        public ApplicacionDbContext(DbContextOptions<ApplicacionDbContext> options) : base(options) { }

        public DbSet<Producto> Producto { get; set;}
    }
}
