﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApiProductos.Models
{
    public class Producto
    {
        [Key]
        public int Id { get; set; }

        public string Nombre { get; set; }

        public decimal Precio { get; set; }
    }
}
