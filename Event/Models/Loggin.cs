using System.ComponentModel.DataAnnotations;

namespace Event.Models
{
    public class Loggin
    {
        [Key]
        public int id_loggin { get; set; }
        public string email { get; set; }
        public string password { get; set; }
    }
}