using System.Collections.Generic;
using MyWebsite.Models;

namespace MyWebsite.Repositories
{
    public interface ICategoryViewRepository
    {
        List<Category> GetGearCategories();
        List<Category> GetRequestCategories();
        List<Request> SearchByCategories(RequestFilterViewModel vm);
    }
}