// Test data for CMS development
// This file can be used for testing when database is not available

export const mockArticles = [
  {
    id: 1,
    title: "Test Article 1",
    description: "<p>This is a test article for CMS testing.</p>",
    date: "2025-09-25",
    author: 1,
    images: ["/placeholder.jpg"],
    isTopStory: true,
    isDeleted: false,
    deletedAt: null
  },
  {
    id: 2,
    title: "Test Article 2", 
    description: "<p>Another test article for CMS testing.</p>",
    date: "2025-09-24",
    author: 1,
    images: [],
    isTopStory: false,
    isDeleted: false,
    deletedAt: null
  },
  {
    id: 3,
    title: "Deleted Article",
    description: "<p>This article is in trash.</p>",
    date: "2025-09-23",
    author: 1,
    images: [],
    isTopStory: false,
    isDeleted: true,
    deletedAt: "2025-09-25"
  }
];

export const mockUsers = [
  {
    id: 1,
    name: "Test User",
    image: "/placeholder-user.jpg"
  }
];