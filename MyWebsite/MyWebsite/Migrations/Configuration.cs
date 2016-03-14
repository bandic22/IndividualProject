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
                    Status = "In good standing",
                };

                userManager.Create(user, "Hello!123");
                userManager.AddClaim(user.Id, new Claim("Admin", "true"));
            }

            var user2 = userManager.FindByName("joe@yahoo.com");

            if (user2 == null)
            {
                user2 = new ApplicationUser
                {
                    UserName = "joe@yahoo.com",
                    DisplayName = "Joe26",
                    Email = "joe@yahoo.com",
                    FirstName = "Joe",
                    LastName = "Johnson",
                    IsActive = true,
                    MemberSince = new DateTime(2016, 02, 22),
                    Status = "Suspected troll",
                };
            }

            userManager.Create(user2, "Joe!123");

            var requests = new Request[]
        {
                new Request { Title = "Please give me some feedback on my mix", Description = "This is a song from an EP I recorded for a local band. To my standards it sounds good but I know it's not there yet. I don't have any specific requests, just give me all the constructive criticism you can. Thanks!", Id = 1, NoOfReplies = 4, FileUrl = "https://www.filestackapi.com/api/file/IYw27dpbTxqLKOw7arwo", CategoryId = 1, DateCreated = DateTime.Now, UserId = user.Id }
        }; ///////////////////////////// Seed some categories ////////////////////////////////

            context.Requests.AddOrUpdate(r => r.Title, requests);

            var replies = new Reply[]
            {
                new Reply
                {
                    Id = 1,
                Message = "Nice recording bro... if you ignore the fact that the dynamics are as flat as the pancakes I ate this morning",
                DateCreated = DateTime.Now,
                IsHidden = false,
                NoOfDislikes = 0,
                NoOfLikes = 0,
                CanNotRate = true,
                RequestId = 1,
                UserId = user2.Id,
                Ratings = null
                },

                new Reply
                {
                    Id = 2,
                Message = "You're not helping bro. Give constructive criticism please, I know I'm still a noob",
                DateCreated = DateTime.Now,
                IsHidden = false,
                NoOfDislikes = 0,
                NoOfLikes = 0,
                CanNotRate = true,
                RequestId = 1,
                UserId = user.Id,
                Ratings = null
                },

                new Reply
                {
                    Id = 3,
                Message = "Hahahaha!",
                DateCreated = DateTime.Now,
                IsHidden = true,
                NoOfDislikes = 0,
                NoOfLikes = 0,
                CanNotRate = true,
                RequestId = 1,
                UserId = user2.Id,
                Ratings = null
                },

                new Reply
                {
                    Id = 4,
                Message = "That's what happens when you troll, you get hidden by an admin",
                DateCreated = DateTime.Now,
                IsHidden = false,
                NoOfDislikes = 0,
                NoOfLikes = 0,
                CanNotRate = true,
                RequestId = 1,
                UserId = user.Id,
                Ratings = null
                }
            };
            context.Replies.AddOrUpdate(r => r.Message, replies);

            #region Categories

            var requestCategories = new Category[]
            {
                new Category { Id = 1, Type = "Request", Name = "Audio Production" },
                new Category { Id = 2, Type = "Request", Name = "Composition" }
            };
            context.Categories.AddOrUpdate(c => c.Name, requestCategories);

            var gearCategories = new Category[]
            {
                new Category { Id = 5, Type = "Gear", Name = "Microphones" },
                new Category { Id = 6, Type = "Gear", Name = "Midi controllers" },
                new Category { Id = 7, Type = "Gear", Name = "Studio Monitors" },
                new Category { Id = 8, Type = "Gear", Name = "Audio Interfaces" },
                new Category { Id = 9, Type = "Gear", Name = "Cables" }
            };
            context.Categories.AddOrUpdate(c => c.Name, gearCategories);

            var gearSubCategories = new SubCategory[]
            {
                new SubCategory { Id = 19, Name = "Condenser Microphone", Type = "Gear", CategoryId = 5 }
            };
            context.SubCategories.AddOrUpdate(s => s.Name, gearSubCategories);

            #endregion

            var gearItems = new GearItem[]
            {
                new GearItem {Id = 1, Title = "Tannoy Reveal 502's", Description = "Good budget studio monitors", UserId = user.Id, CategoryId = 7, },
                new GearItem {Id = 2, Title = "Samson C03", Description = "A great value, 3 pattern, large diaphragm condenser microphone", UserId = user.Id, CategoryId = 5 },
                new GearItem {Id = 3, Title = "SM57", Description = "A slightly-used SM57", UserId = user.Id, CategoryId = 5 },
                new GearItem {Id = 4, Title = "MAudio KeyRig49", Description = "A simple but good quality MIDI controller", UserId = user.Id, CategoryId = 6 },
                new GearItem {Id = 5, Title = "Mackie Blackbird 8-channel firewire interface", Description = "Excellent budget 8 channel interface", UserId = user.Id, CategoryId = 8 },
                new GearItem {Id = 6, Title = "SM58", Description = "A slightly-used SM58", UserId = user2.Id, CategoryId = 5 },
                new GearItem {Id = 7, Title = "Saffire Pro 24", Description = "Good quality, 4 channel, firewire interface", UserId = user2.Id, CategoryId = 8 },
                new GearItem {Id = 8, Title = "MAudio AV40's", Description = "A cheap set of monitor speakers", UserId = user2.Id, CategoryId = 7 },
                new GearItem {Id = 9, Title = "Pair of Samson C02's", Description = "A set of reasonable small diaphragm condenser microphones", UserId = user2.Id, CategoryId = 5 },
                new GearItem {Id = 10, Title = "Beta57A", Description = "A slightly-used Beta57A", UserId = user2.Id, CategoryId = 5 },
            };

            context.GearItems.AddOrUpdate(i => i.Title, gearItems);

            var userSpaces = new UserSpace[]
            {
                new UserSpace
                {
                    Description = "My room is about 300 square feet. I have a drum kit in the main room where I do the rest of my tracking and mixing. I use long wall placement for my monitors and I have an appropriate sweet spot set up close to the center of the room.", Id = 1, Title = "The recording space of spaces - not really", UserId = user.Id,
                },

                new UserSpace
                {
                    Description = "My room is nothing special. It's just a bedroom where I sit cramped up right against the wall, in a corner, and make music, no matter how bad it sounds", UserId = user2.Id, Id = 2, Title = "My boring recording space"
                }
            };

            context.UserSpaces.AddOrUpdate(u => u.Title, userSpaces);

            var images = new Image[]
            {
                new Image
                {
                    Caption = "Me recording a local Port Elizabeth band in South Africa", FileUrl = "https://www.filestackapi.com/api/file/G8CfafWvSveb4SDSkele", Id = 1, UserId = user.Id,
                },
                new Image
                {
                    Caption = "A microphone and pop filter", FileUrl = "https://www.filestackapi.com/api/file/JMxx4cSSl2BMXPz9fAkA", Id = 2, UserId = user.Id,
                },

                new Image
                {
                    Caption = "Another microphone", FileUrl = "https://www.filestackapi.com/api/file/PLf68DDFQPCPrWXlP0IE", Id = 3, UserId = user.Id,
                },

                new Image
                {
                    Caption = "Disciple: Attack", FileUrl = "https://www.filestackapi.com/api/file/8Z7gE8nySviqr4LnHbKn", UserId = user2.Id, Id = 4
                }
            };

            context.Images.AddOrUpdate(i => i.Id, images);
        }
    }
}
