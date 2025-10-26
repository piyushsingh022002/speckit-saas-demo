using Microsoft.Extensions.Options;
using MongoDB.Driver;
using SpeckitSaaSBackend.Models;

namespace SpeckitSaaSBackend.Services
{
    // MongoDB settings loaded from appsettings.json
    public class MongoDbSettings
    {
        public string ConnectionString { get; set; } = string.Empty;
        public string Database { get; set; } = string.Empty;
    }

    // Provides access to MongoDB collections
    public class MongoDbContext
    {
        private readonly IMongoDatabase _database;
        public MongoDbContext(IOptions<MongoDbSettings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            _database = client.GetDatabase(settings.Value.Database);
        }
        public IMongoCollection<TaskEntity> Tasks => _database.GetCollection<TaskEntity>("Tasks");
        public IMongoCollection<UserEntity> Users => _database.GetCollection<UserEntity>("Users");
    }
}
