using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Event.Models
{
    public class Member
    {
        [Key]
        public int id_member { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public DateTime date { get; set; }
        public string Email { get; set; }
        [ForeignKey("Event")]
        public int id_event { get; set; }
    }
}
