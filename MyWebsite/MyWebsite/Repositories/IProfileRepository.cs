using MyWebsite.Models.ViewModels;

namespace MyWebsite.Repositories
{
    public interface IProfileRepository
    {
        UserViewModel GetUserInfo(string userId);
    }
}