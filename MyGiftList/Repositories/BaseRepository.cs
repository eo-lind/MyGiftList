using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace MyGiftList.Repositories
{
    public abstract class BaseRepository // abstract indicates that BaseRepository class can't be directly instantiated - it can only be used by inheritance
    {
        private readonly string _connectionString;
        
        public BaseRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        protected SqlConnection Connection // marking connection as protected makes it accessible to child classes, but inaccessible to any other code
        {
            get
            {
                return new SqlConnection(_connectionString);
            }
        }
    }
}
