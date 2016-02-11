using AutoMapper;
using MyWebsite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyWebsite.Utilities
{
    public class MapUtility
    {
        static public T2 Map<T1, T2>(T1 obj)
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<ApplicationUser, ApplicationUserDto>();
                cfg.CreateMap<Request, RequestDto>();
            });

            var mapper = config.CreateMapper();
            return mapper.Map<T2>(obj);
        }
    }
}