namespace MyWebsite.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Security.Claims;
    internal sealed class Configuration : DbMigrationsConfiguration<MyWebsite.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MyWebsite.Models.ApplicationDbContext context)
        {
            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new ApplicationUserManager(userStore);

            var user = userManager.FindByName("bandic22@gmail.com");

            if (user == null)
            {
                user = new ApplicationUser
                {
                    UserName = "bandic22@gmail.com",
                    Email = "bandic22@gmail.com",
                    FirstName = "Duran",
                    LastName = "Gradwell",
                };

                userManager.Create(user, "Hello!123");
                //userManager.AddClaim(user.Id, new Claim("Admin", "true"));
            }

            var requests = new Request[]
        {
                new Request { Title = "Help me", Description = "My mix sucks", Id = 1, NoOfReplies = 0 }
        };

            context.Requests.AddOrUpdate(r => r.Title, requests);

            //var reply = new Reply
            //{
            //    Id = 1,
            //    Message = "Nice recording bro"
            //};

            //var gearCategories = new GearCategory[]
            //{
            //    new GearCategory { Id = 1, Title = "Microphone" }
            //};

            //context.GearCategories.AddOrUpdate(g => g.Title, gearCategories);

            //var gearItems = new GearItem[]
            //{
            //    new GearItem {Id = 1, Title = "SM57", Description = "A slightly-used SM57" }
            //};

            //context.GearItems.AddOrUpdate(i => i.Title, gearItems);

            //var userSpace = new UserSpace
            //{
            //    Id = 1,
            //    Description = "My terrible recording space",
            //    Title = "Terrible recording space",
            //};

            //context.UserSpace.AddOrUpdate(s => s.Title, userSpace);
        }
    }
}
