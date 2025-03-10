# Tanstack React Query App

Tanstack (React) Query Sandbox App

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge/User Stories

Build a Next.js application that demonstrates the power of Tanstack React Query by implementing efficient data fetching, state management, and caching. Create a Comments page that fetches and displays data from an API and a Form Posts page that allows users to create new posts and see them update instantly using React Query’s mutation and cache invalidation. Ensure proper loading states and error handling for a smooth user experience. Use Tailwind CSS for styling, make the design fully responsive, and include a clear landing page explaining the application’s purpose. Follow best practices in structuring the project to serve as both a learning tool and a demonstration of React Query’s capabilities.    

### Screenshot

![](/public/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/tanstack-react-query](https://github.com/traez/tanstack-react-query)
- Live Site URL: [https://tanstack-react-query.vercel.app/](https://tanstack-react-query.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox and CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- Typescript
- Nodejs            
- Tailwind CSS     
- react-icons  
- tanstack/react-query    

### What I learned
   
**1 Installation and Setup**  
- Install TanStack Query: `npm i @tanstack/react-query`  
- Install ESLint Plugin: `npm i -D @tanstack/eslint-plugin-query`  
**Provider Setup**: Next.js requires a different approach due to its server-side rendering  
**Development Tools**: React Query Devtools are optional but helpful for debugging  

**2 Core Concepts**  
TanStack Query has three fundamental concepts:  
A. **Queries**: For GET requests  
B. **Mutations**: For POST, PUT, PATCH, DELETE operations  
C. **Query Invalidation**: Marking queries as stale and potentially triggering refetches  

**3 TanStack Query vs Zustand**  
**TanStack Query**: Designed for server state management  
- Handles data fetching, caching, synchronization, background updates, and pagination
- Best for managing data from APIs or databases

**Zustand**: Client-side state management library  
- Used for UI state, user preferences, authentication state
- Manages local app state that doesn't require server fetching 

**4 Understanding the useQuery Return Object**  
The object returned by useQuery includes:
- **State Metadata**: `data`, `error`, `isLoading`, `isFetching`, and `status`
- `data`: Contains the fetched response on success
- `error`: Provides details on failure
- `isLoading`: True during the first fetch
- `isFetching`: True during any ongoing request
- `status`: Can be "idle", "loading", "success", or "error"
- **Utility Methods**: `refetch()` for manual re-fetching
- **Timestamps**: `dataUpdatedAt` provides the last update time
- **Advanced Features**: Automatic caching, background re-fetching, and retry logic
- **Configuration Details**: Nested fields under `.meta`, `.queryKey`, and `.queryFn` 

**5 The useQueryClient Hook**  
**Purpose**: Efficiently manages and synchronizes cached data across components  
**Benefits**:
- Enables immediate UI updates without refetching  
- Improves performance by reducing redundant API calls  
- Ensures data consistency  

**Usage Example**: Instead of manually calling `refetchGetFormPosts()`, use `queryClient.invalidateQueries(["getFormPosts"])` inside the `onSuccess` callback of `useMutation` to automatically refetch posts when a new one is added
 
**6 API Organization Approaches**  
### Centralized API Calls; When to Use This Approach**:  
- ✅ When fetching from external APIs like jsonplaceholder.typicode.com
- ✅ When using React Query for caching, background refetching, and mutations
- ✅ When keeping API request logic centralized in a service file (apiService.ts)  
### Next.js API Routes; When to Use API Routes (app/api/...)**:  
- 🔹 When server-side processing is needed before returning data
- 🔹 When handling authentication, authorization, or request validation
- 🔹 When fetching from a backend database (e.g., MongoDB, PostgreSQL) 

### Continued development

- More projects; increased competence!

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Zeeofor Technologies](https://zeeofortech.vercel.app/)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

-Jehovah that keeps breath in my lungs
