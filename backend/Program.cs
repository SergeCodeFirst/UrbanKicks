﻿using backend.Data;
using Microsoft.EntityFrameworkCore;
using backend.Services.UserService;
using backend.Services.PaymentService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// Connect to the DB
builder.Services.AddDbContext<DataContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers().AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//// Allow our web api to share data with the frontend: Configuring CORS (Cross-Origin Resource Sharing)
builder.Services.AddCors(p => p.AddPolicy("corspolicy", build =>
{
    //build.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
    build.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
}));

builder.Services.AddAutoMapper(typeof(Program).Assembly); // Register Auto Mapper
builder.Services.AddScoped<IUserService, UserService>(); // Evrry time we use the interface IUserService it will use an instance of UserService class
builder.Services.AddScoped<IPaymentService, PaymentService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("corspolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

