# NYUSH Professor Chat Assistant

## Goal

The **NYUSH Rate My Professor Assistant** is a web application designed to help NYU Shanghai students find professor recommendations. Users can interact with a chatbot to ask for personalized professor suggestions based on their teaching preferences, such as workload, assignment types, and more. Students can add their own reviews for a more robust knowledge base.

## Tech Stack

- **Frontend:**
  - React
  - Next.js
  - Material UI
  - TypeScript
  - HTML/CSS

- **Backend:**
  - Node.js (Javascript)
  - Express.js
  - OpenRouter API
  - Firebase
  - REST API
  - Python
  - Pinecone

- **CI/CD and Auth:**
  - Vercel
  - Clerk
  - GitHub Actions

## Data Models
```javascript
{
  "professor_id": str,
  "name": str,
  "subject": str,
  "average_rating": int,
  "reviews": [
    {
      "comment": str,
    }
  ]
}
```
