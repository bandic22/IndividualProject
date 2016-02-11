using MyWebsite.Models.ViewModels;

namespace MyWebsite.Repositories
{
    public interface IAdminViewRepository
    {
        AdminViewModel GetAdminViewModel();
    }
}