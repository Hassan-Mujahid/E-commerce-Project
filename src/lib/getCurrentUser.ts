export async function getCurrentUser() {
  const res = await fetch("/api/auth/me", {
    method: "GET",
    credentials: "include", // Important: sends cookies!
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.user;
}
