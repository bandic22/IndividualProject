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
                    DisplayName = "Bandic22(Admin)",
                    Email = "bandic22@gmail.com",
                    FirstName = "Duran",
                    LastName = "Gradwell",
                    IsActive = true,
                    MemberSince = new DateTime(2016, 01, 01),
                    Status = "In good standing"
                };

                userManager.Create(user, "Hello!123");
                userManager.AddClaim(user.Id, new Claim("Admin", "true"));
            }

            var requests = new Request[]
        {
                new Request { Title = "Please give me some feedback on my mix", Description = "This is a song from an EP I recorded for a local band. To my standards it sounds good but I know it's not there yet. I don't have any specific requests, just give me all the constructive criticism you can. Thanks!", Id = 1, NoOfReplies = 0, FileUrl = "https://www.filestackapi.com/api/file/IYw27dpbTxqLKOw7arwo", DateCreated = DateTime.Now, UserId = "41ef0386-336a-476f-b8cd-7e540507f99f" }
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
