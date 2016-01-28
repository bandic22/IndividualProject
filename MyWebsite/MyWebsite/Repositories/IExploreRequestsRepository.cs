using MyWebsite.Models;
using MyWebsite.Models.ViewModels;

namespace MyWebsite.Repositories
{
    public interface IExploreRequestsRepository
    {
        void addReply(Reply reply);
        RequestViewModel GetRequestInfo(int requestId);
    }
}