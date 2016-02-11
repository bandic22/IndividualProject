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
            var userSpace = _repo.Query<UserSpace>().Where(s => s.UserId == userId).FirstOrDefault();

            var userViewModel = new UserViewModel()
            {
                FirstName = user.FirstName,
                LastName = user.LastName,
                Email = user.Email,
                DisplayName = user.DisplayName,
                UserSpace = userSpace,
                UserGear = userGear,
                Requests = userRequests,
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