using System.Collections.Generic;
using MyWebsite.Models;
using MyWebsite.Models.ViewModels;

namespace MyWebsite.Repositories
{
    public interface ICategoryViewRepository
    {
        RequestsFilterViewModel GetFilteredRequestView(RequestFilterViewModel vm);
        List<Category> GetGearCategories();
        List<Category> GetRequestCategories();
    }
}