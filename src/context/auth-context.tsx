"use client";

import type React from "react";

import { createContext, useContext, useState, useEffect } from "react";
import { getCurrentUser } from "@/lib/getCurrentUser";
type User = {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  // login: (email: string, password: string) => Promise<void>;
  // register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  syncUser: () => Promise<void>;
  isAdmin: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // This would be replaced with actual API call
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUser({
            id: currentUser.id,
            name: currentUser.name,
            email: currentUser.email,
            role: currentUser.role,
          });
        }
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  // const login = async (email: string, password: string) => {
  //   setIsLoading(true);
  //   try {
  //     // This would be replaced with actual API call

  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     // Mock user data
  //     const userData: User = {
  //       id: "user_123",
  //       name: "John Doe",
  //       email,
  //       role: email.includes("admin") ? "admin" : "user",
  //     };

  //     setUser(userData);
  //     localStorage.setItem("user", JSON.stringify(userData));
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const register = async (name: string, email: string, password: string) => {
  //   setIsLoading(true);
  //   try {
  //     // This would be replaced with actual API call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     // Mock user data
  //     const userData: User = {
  //       id: "user_" + Math.random().toString(36).substr(2, 9),
  //       name,
  //       email,
  //       role: "user",
  //     };

  //     setUser(userData);
  //     localStorage.setItem("user", JSON.stringify(userData));
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const logout = async () => {
    setIsLoading(true);
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Method to manually sync user (e.g., after login/register)
  const syncUser = async () => {
    try {
      const currentUser = await getCurrentUser();
      if (currentUser)
        setUser({
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
          role: currentUser.role,
        });
    } catch (error) {
      console.error("Failed to sync user:", error);
    }
  };

  const isAdmin = user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        // login,
        // register,
        logout,
        syncUser,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
