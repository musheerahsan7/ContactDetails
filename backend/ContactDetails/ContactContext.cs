using ContactDetails.Models;
using Microsoft.EntityFrameworkCore;

namespace ContactDetails
{
    public class ContactContext : DbContext
    {
        public ContactContext(DbContextOptions<ContactContext> options) : base(options)
        {
        }

        public DbSet<Contact> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed data
            modelBuilder.Entity<Contact>().HasData(
                new Contact { Id = 1, FirstName = "John", LastName = "Doe", Email = "john.doe@example.com", Phone = "123-456-7890" },
                new Contact { Id = 2, FirstName = "John", LastName = "Doe", Email = "john.doe@example.com", Phone = "123-456-7890" },
            new Contact { Id = 3, FirstName = "John", LastName = "Doe", Email = "john.doe@example.com", Phone = "123-456-7890" },
            new Contact { Id = 4, FirstName = "John", LastName = "Doe", Email = "john.doe@example.com", Phone = "123-456-7890" },
            new Contact { Id = 5, FirstName = "John", LastName = "Doe", Email = "john.doe@example.com", Phone = "123-456-7890" },
            new Contact { Id = 6, FirstName = "John", LastName = "Doe", Email = "john.doe@example.com", Phone = "123-456-7890" },
            new Contact { Id = 7, FirstName = "John", LastName = "Doe", Email = "john.doe@example.com", Phone = "123-456-7890" },
            new Contact { Id = 8, FirstName = "John", LastName = "Doe", Email = "john.doe@example.com", Phone = "123-456-7890" },
            new Contact { Id = 9, FirstName = "John", LastName = "Doe", Email = "john.doe@example.com", Phone = "123-456-7890" },
            new Contact { Id = 10, FirstName = "John", LastName = "Doe", Email = "john.doe@example.com", Phone = "123-456-7890" }
            );
        }
    }

}
