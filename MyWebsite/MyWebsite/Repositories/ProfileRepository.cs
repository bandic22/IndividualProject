using MyWebsite.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;
using MyWebsite.Models;

namespace MyWebsite.Repositories
{
    public class ProfileRepository : IProfileRepository
    {
        private IGenericRepository _repo;

        public ProfileRepository(IGenericRepository repo)
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
                UserName = user.UserName,
                UserSpace = userSpace,
                UserGear = userGear,
                Requests = userRequests,
            };
            return userViewModel;
        }
    }
}