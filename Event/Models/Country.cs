using System.ComponentModel.DataAnnotations;

namespace Event.Models
{
    public class Country
    {
        [Key]
        public int id_country { get; set; }
        public string name { get; set; }
    }
}
