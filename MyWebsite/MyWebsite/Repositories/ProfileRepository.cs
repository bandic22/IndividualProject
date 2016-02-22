using MyWebsite.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;
using MyWebsite.Models;

namespace MyWebsite.Repositories
{
    public class ProfileViewRepository : IProfileViewRepository
    {
        private IGenericRepository _repo;

        public ProfileViewRepository(IGenericRepository repo)
        {
            _repo = repo;
        }

        public UserViewModel GetUserInfo(string userId)
        {
            var user = _repo.Query<ApplicationUser>().Where(a => a.Id == userId).FirstOrDefault();
            var userGear = _repo.Query<GearItem>().Where(g => g.UserId == userId).ToList();
            var userRequests = _repo.Query<Request>().Where(r => r.UserId == userId).ToList();
            var replies = _repo.Query<Reply>().Where(re => re.UserId == userId).Include(r => r.Request).ToList();
            var userSpace = _repo.Query<UserSpace>().Where(s => s.UserId == userId).FirstOrDefault();
            var userImages = _repo.Query<Image>().Where(i => i.UserId == userId).ToList();
            var ratings = _repo.Query<Rating>().Where(r => r.UserId == userId).ToList();

            var userViewModel = new UserViewModel()
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                DisplayName = user.DisplayName,
                UserSpace = userSpace,
                UserImages = userImages,
                UserGear = userGear,
                Requests = userRequests,
                UserReplies = replies,
                Ratings = ratings,
                IsAuthorized = true
            };
            return userViewModel;
        }

        public string UserId(string displayName)
        {
            var user = _repo.Query<ApplicationUser>().Where(a => a.DisplayName == displayName).FirstOrDefault();
            return user.Id;
        }
    }
}