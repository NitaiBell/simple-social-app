import { useState } from "react";
import "./PostItem.css";

function PostItem({ post, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(post.content);

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this post?")) {
      onDelete(post.id);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedContent(post.content);
  };

  const handleSave = async () => {
    if (!editedContent.trim()) return;
    await onUpdate(post.id, editedContent);
    setIsEditing(false);
  };

  return (
    <div className="post-item">
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <p className="content">{post.content}</p>
      )}

      <div className="footer">
        <span>{new Date(post.createdAt).toLocaleString()}</span>

        {isEditing ? (
          <div className="edit-buttons">
            <button className="save" onClick={handleSave}>Save</button>
            <button className="cancel" onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostItem;

