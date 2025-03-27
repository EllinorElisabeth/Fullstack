using System.ComponentModel.DataAnnotations;

namespace Trump.Models;

    public class TrumpThought 
    {
        [Key]
        public int Id { get; set; } 
        
        public string? Thought { get; set; }
    }

