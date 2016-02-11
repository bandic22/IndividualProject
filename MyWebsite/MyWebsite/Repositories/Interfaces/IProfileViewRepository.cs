using MyWebsite.Models.ViewModels;

namespace MyWebsite.Repositories
{
    public interface IProfileViewRepository
    {
        UserViewModel GetUserInfo(string userId);
        string UserId(string displayName);
    }
}