using Microsoft.EntityFrameworkCore;
using Trump.Models;

namespace TrumpThoughtsApi.Data;

public class TrumpDbContext : DbContext
{
    public TrumpDbContext(DbContextOptions<TrumpDbContext> options) : base(options) {}

    public DbSet<Trump.Models.TrumpThought> TrumpThought { get; set; }
}