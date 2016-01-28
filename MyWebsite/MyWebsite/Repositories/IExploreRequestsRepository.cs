using MyWebsite.Models.ViewModels;

namespace MyWebsite.Repositories
{
    public interface IExploreRequestsRepository
    {
        RequestViewModel GetRequestInfo(int requestId);
    }
}