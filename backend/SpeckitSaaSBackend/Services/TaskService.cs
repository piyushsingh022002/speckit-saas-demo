using SpeckitSaaSBackend.Models;
using MongoDB.Driver;

namespace SpeckitSaaSBackend.Services
{
    // Service for CRUD operations on TaskEntity
    public class TaskService
    {
        private readonly IMongoCollection<TaskEntity> _tasks;
        public TaskService(MongoDbContext db)
        {
            _tasks = db.Tasks;
        }

        public async Task<List<TaskEntity>> GetAllAsync() =>
            await _tasks.Find(_ => true).ToListAsync();

        public async Task<TaskEntity?> GetByIdAsync(string id) =>
            await _tasks.Find(t => t.Id == id).FirstOrDefaultAsync();

        public async Task<TaskEntity> CreateAsync(TaskEntity task)
        {
            await _tasks.InsertOneAsync(task);
            return task;
        }

        public async Task<bool> UpdateAsync(string id, TaskEntity updated)
        {
            var result = await _tasks.ReplaceOneAsync(t => t.Id == id, updated);
            return result.ModifiedCount > 0;
        }

        public async Task<bool> DeleteAsync(string id)
        {
            var result = await _tasks.DeleteOneAsync(t => t.Id == id);
            return result.DeletedCount > 0;
        }
    }
}
