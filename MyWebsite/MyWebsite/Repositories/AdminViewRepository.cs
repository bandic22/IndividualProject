using MyWebsite.Models;
using MyWebsite.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MyWebsite.Repositories
{
    public class AdminViewRepository : IAdminViewRepository
    {
        private IGenericRepository _repo;

        public AdminViewRepository(IGenericRepository repo)
        {
            _repo = repo;
        }

        public AdminViewModel GetAdminViewModel()
        {
            var users = _repo.Query<ApplicationUser>();
            var userSpaces = _repo.Query<UserSpace>();
            var replies = _repo.Query<Reply>();
            var requests = _repo.Query<Request>();
            var userGear = _repo.Query<GearItem>();

            var adminViewModel = new AdminViewModel()
            {
                Replies = replies.ToList(),
                Requests = requests.ToList(),
                UserGear = userGear.ToList(),
                Users = users.ToList(),
                UserSpaces = userSpaces.ToList(),
            };
            return adminViewModel;
        }
    }
}