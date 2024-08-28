// types/user.ts

export interface User {
    id: number;
    email: string;
    password: string; // In practice, you might not expose the password field
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    message: string;
  }
  