namespace MyWebsite.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MyWebsite.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MyWebsite.Models.ApplicationDbContext context)
        {
            var requests = new Request[]
            {
                new Request {Title = "Please fix my mix", Author = "Duran", Category = "Whatever", Description = "My mix has been ruined, please give me some tips on how to fix it!", NoOfReplies = 0, DateCreated = DateTime.Now }
            };

            context.Requests.AddOrUpdate(r => r.Title, requests);
        }
    }
}
