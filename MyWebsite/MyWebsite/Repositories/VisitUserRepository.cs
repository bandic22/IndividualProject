using MyWebsite.Models;
using MyWebsite.Models.ViewModels;
using MyWebsite.Utilities;
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
            var requests = _repo.Query<Request>().Where(r => r.User.DisplayName == displayName).Include(u => u.User).ToList();
            var requestsDto = MapUtility.Map<List<Request>, List<RequestDto>>(requests);
            var userSpace = _repo.Query<UserSpace>().Where(u => u.User.DisplayName == displayName).Include(u => u.User).FirstOrDefault();
            var userSpaceDto = MapUtility.Map<UserSpace, UserSpaceDto>(userSpace);
            var userGear = _repo.Query<GearItem>().Where(s => s.User.DisplayName == displayName).Include(u => u.User).ToList();
            var userGearDto = MapUtility.Map<List<GearItem>, List<GearItemDto>>(userGear);
            var user = _repo.Query<ApplicationUser>().Where(u => u.DisplayName == displayName).FirstOrDefault();
            var userImages = _repo.Query<Image>().Where(i => i.User.DisplayName == displayName).ToList();
            var userImagesDto = MapUtility.Map<List<Image>, List<ImageDto>>(userImages);

            var visitUserViewModel = new VisitUserViewModel
            {
                Requests = requestsDto,
                UserSpace = userSpaceDto,
                UserGear = userGearDto,
                DisplayName = user.DisplayName,
                UserImages = userImagesDto,
                IsAuthorized = false
            };

            return visitUserViewModel;
        }
    }
}
