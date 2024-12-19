using System.ComponentModel.DataAnnotations;

namespace Event.Models
{
    public class Category
    {
        [Key]
        public int Id_category { get; set; }
        public string name { get; set; }
        public string description { get; set; }
    }
}
