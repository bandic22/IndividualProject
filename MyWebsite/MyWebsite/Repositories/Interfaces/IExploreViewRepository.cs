using MyWebsite.Models;
using MyWebsite.Models.ViewModels;

namespace MyWebsite.Repositories
{
    public interface IExploreViewRepository
    {
        void addReply(Reply reply);
        void deleteReply(int id);
        RequestViewModel GetRequestInfo(int requestId);
    }
}