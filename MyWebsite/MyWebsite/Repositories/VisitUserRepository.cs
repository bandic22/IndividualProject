using MyWebsite.Models;
using MyWebsite.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebsite.Repositories.Interfaces
{
    public class VisitUserRepository : IVisitUserRepository
    {
        private IGenericRepository _repo;

        public VisitUserRepository(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public VisitUserViewModel GetVisitUserInfo(string displayName)
        {
            var requests = _repo.Query<Request>().Where(r => r.User.DisplayName == displayName).ToList();
            var userSpace = _repo.Query<UserSpace>().Where(u => u.User.DisplayName == displayName).FirstOrDefault();
            var userGear = _repo.Query<GearItem>().Where(s => s.User.DisplayName == displayName).ToList();
            var user = _repo.Query<ApplicationUser>().Where(u => u.DisplayName == displayName).FirstOrDefault();

            var visitUserViewModel = new VisitUserViewModel
            {
                Requests = requests,
                UserSpace = userSpace,
                UserGear = userGear,
                DisplayName = user.DisplayName,
                IsAuthorized = false
            };

            return visitUserViewModel;
        }
    }
}
