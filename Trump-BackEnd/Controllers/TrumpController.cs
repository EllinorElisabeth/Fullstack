#nullable enable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Trump.Models;
using TrumpThoughtsApi.Data;

namespace Trump.Controllers;

[ApiController]
[Route("[controller]")]
public class TrumpController : ControllerBase
{

    private readonly TrumpDbContext context;

    public TrumpController(TrumpDbContext _context)
    {
        context = _context;
    }

    // Read
    [HttpGet]
    public async Task<ActionResult<List<TrumpThought>>> GetAllTrumpThoughts()
    {
        List<TrumpThought> thoughts = await context.TrumpThought.ToListAsync();
        return thoughts;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<TrumpThought>> GetTrumpThought(int id)
    {
        TrumpThought? trumpThought = await context.TrumpThought.FindAsync(id); 

        if(trumpThought == null)
        {
            return NotFound();
        }
        else
        {
            return Ok(trumpThought);
        }

    }

    // Get mot Db - søk mot databasen
    [HttpGet]
    [Route("[action]/{thought}")]
    public async Task<ActionResult<List<TrumpThought>>> GetByThought(string thought)
    {
        List<TrumpThought> ideas = await context.TrumpThought
            .Where( idea => idea.Thought != null && idea.Thought.ToLower().Contains(thought.ToLower()) )
            .ToListAsync();

        return ideas;
    }


    // Create
    [HttpPost] 
    public async Task<ActionResult<TrumpThought>> Post(TrumpThought newThought)
    {
        context.TrumpThought.Add(newThought);
        await context.SaveChangesAsync();
        return CreatedAtAction("GetTrumpThought", new {id = newThought.Id}, newThought);

    }

    // Delete
    [HttpDelete("{id}")] 
    public async Task<IActionResult> Delete(int id)
    {
        TrumpThought? trumpThought = await context.TrumpThought.FindAsync(id);

        if(trumpThought != null) {
            context.TrumpThought.Remove(trumpThought);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }

    // Update
    [HttpPut]
    public async Task<IActionResult> Put(TrumpThought updateThought)
    {
        context.Entry(updateThought).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }

    [HttpPost("test")]
public IActionResult TestPost() 
{
    return Ok("POST endpoint works");
}


}
