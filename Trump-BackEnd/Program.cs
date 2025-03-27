using Microsoft.EntityFrameworkCore;
using TrumpThoughtsApi.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TrumpDbContext>( options =>
options.UseSqlite( "Data Source=Trump.db" )); 

builder.Services.AddCors(
    options => {
        options.AddPolicy("AllowAnyOrigin",
        policies => 
        policies
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
    }
);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseCors("AllowAnyOrigin");


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers(); 

app.Run();
