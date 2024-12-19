using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;

namespace Event.Models
{
    public class Events
    {
        [Key]
        public int id_event { get; set; } 
        public string name { get; set; }
        public string description { get; set; }
        public DateTime date { get; set; }

        [ForeignKey("Place")]
        public int id_place { get; set; }

        [ForeignKey("Category")]
        public int id_category { get; set; }
        public int max_amount { get; set; }
        public Image image { get; set; }

    }
}
