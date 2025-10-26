using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace SpeckitSaaSBackend.Models
{
    // Represents a Task entity matching the frontend Task type
    public class TaskEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        [JsonPropertyName("id")]
        public string Id { get; set; } = string.Empty;

        [BsonElement("title")]
        public string Title { get; set; } = string.Empty;

        [BsonElement("description")]
        public string? Description { get; set; }

        [BsonElement("dueDate")]
        public string? DueDate { get; set; }

        [BsonElement("priority")]
        public string? Priority { get; set; } // Low | Medium | High

        [BsonElement("tags")]
        public string[]? Tags { get; set; }

        [BsonElement("assignedTo")]
        public string? AssignedTo { get; set; }
    }
}
