# NYUSH Professor Chat Assistant

## Goal
The **NYUSH Professor Chat Assistant** is a web application designed to help NYU Shanghai students find professor recommendations. Users can interact with a chatbot to ask for personalized professor suggestions based on their preferences, such as workload, group projects, and more. The assistant allows students to rate professors, read reviews, and easily navigate the platform to get their desired recommendations.

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

- **Other Technologies:**
  - Next.js routing
  - Clerk (for user authentication)
  - GitHub Actions (for CI/CD)

## Data Models

Here are the data models used in the application:

### **Professor**
```json
{
  "professor_id": String, // Unique identifier for the professor
  "name": String,         // Name of the professor
  "subject": String,      // Subject the professor teaches
  "average_rating": Number, // Average rating of the professor
  "reviews": [
    {
      "user_id": String,    // The user who left the review
      "rating": Number,     // Rating from 1 to 5
      "comment": String,    // Review text
      "date": Date          // Date the review was submitted
    }
  ]
}
