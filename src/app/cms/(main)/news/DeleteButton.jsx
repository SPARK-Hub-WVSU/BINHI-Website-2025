'use client';

export default function DeleteButton({ articleId, onDelete, className = "cursor-pointer font-semibold text-red-700 hover:text-red-800" }) {
  const handleDelete = (e) => {
    e.preventDefault();
    if (!confirm('Are you sure you want to move this article to trash?')) {
      return;
    }
    const formData = new FormData();
    formData.append('articleId', articleId);
    onDelete(formData);
  };

  return (
    <button 
      onClick={handleDelete}
      className={className}>
      Trash
    </button>
  );
}