using MyWebsite.Models.ViewModels;

namespace MyWebsite.Repositories.Interfaces
{
    public interface IVisitUserRepository
    {
        VisitUserViewModel GetVisitUserInfo(string displayName);
    }
}