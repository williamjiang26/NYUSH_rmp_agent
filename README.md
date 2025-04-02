# NYUSH Professor Chat Assistant

## Goal
The **NYUSH Professor Chat Assistant** is a web application designed to help NYU Shanghai students find professor recommendations. Users can interact with a chatbot to ask for personalized professor suggestions based on their preferences, such as workload, group projects, and more. NYUSH students can utilize this tool tailored to NYUSH Professors and add their own reviews for a more robust knowledge base. 

## Tech Stack
The application uses the following technologies:

- **Frontend:**
  - React.js (with Next.js)
  - Material UI (for UI components)
  - TypeScript
  - MUI for styling and components

- **Backend:**
  - Node.js
  - Express.js
  - OpenAI GPT-3 for chatbot capabilities
  - MongoDB (for storing user reviews and professor data)
  - REST API for communication between frontend and backend
  - Python
  - Pinecone

- **Other Technologies:**
  - Next.js routing
  - Clerk (for user authentication)
  - GitHub Actions (for CI/CD)

## Data Models

Here are the data models used in the application:

### **Professor**
```javascript
{
  "professor_id": str, // Unique identifier for the professor
  "name": str,         // Name of the professor
  "subject": str,      // Subject the professor teaches
  "average_rating": int, // Average rating of the professor
  "reviews": [
    {
      "user_id": str,    // The user who left the review
      "rating": int,     // Rating from 1 to 5
      "comment": str,    // Review text
      "date": date          // Date the review was submitted
    }
  ]
}
```
