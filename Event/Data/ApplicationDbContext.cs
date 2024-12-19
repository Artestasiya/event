using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Data.Entity;
using Event.Models;

namespace Event.Data
{
    public class ApplicationDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
                
        }
        public Microsoft.EntityFrameworkCore.DbSet<Events> Events { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Category> Category { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Member> Member { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<City> City { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Country> Country { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Place> Place { get; set; }
        public Microsoft.EntityFrameworkCore.DbSet<Loggin> Loggin { get; set; }
    }
}
