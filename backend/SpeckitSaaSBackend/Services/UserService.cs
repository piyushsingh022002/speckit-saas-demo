using SpeckitSaaSBackend.Models;
using MongoDB.Driver;

namespace SpeckitSaaSBackend.Services
{
    // Service for CRUD operations on UserEntity
    public class UserService
    {
        private readonly IMongoCollection<UserEntity> _users;
        public UserService(MongoDbContext db)
        {
            _users = db.Users;
        }

        public async Task<List<UserEntity>> GetAllAsync() =>
            await _users.Find(_ => true).ToListAsync();

        public async Task<UserEntity?> GetByIdAsync(string id) =>
            await _users.Find(u => u.Id == id).FirstOrDefaultAsync();

        public async Task<UserEntity> CreateAsync(UserEntity user)
        {
            await _users.InsertOneAsync(user);
            return user;
        }

        public async Task<bool> UpdateAsync(string id, UserEntity updated)
        {
            var result = await _users.ReplaceOneAsync(u => u.Id == id, updated);
            return result.ModifiedCount > 0;
        }

        public async Task<bool> DeleteAsync(string id)
        {
            var result = await _users.DeleteOneAsync(u => u.Id == id);
            return result.DeletedCount > 0;
        }
    }
}
