using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Event.Models
{
    public class City
    {
        [Key]
        public int id_city { get; set; }
        public string name { get; set; }
        [ForeignKey("Country")]
        public int id_country { get; set; }
    }
}
