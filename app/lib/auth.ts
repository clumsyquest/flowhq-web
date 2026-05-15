"use client"

export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false
  return localStorage.getItem("flowhq_auth") === "true"
}

export const isAdmin = (): boolean => {
  if (typeof window === "undefined") return false
  return localStorage.getItem("flowhq_admin") === "true"
}

export const signIn = (admin = false) => {
  localStorage.setItem("flowhq_auth", "true")
  if (admin) localStorage.setItem("flowhq_admin", "true")
}

export const signOut = () => {
  localStorage.removeItem("flowhq_auth")
  localStorage.removeItem("flowhq_admin")
  window.location.href = "/login"
}