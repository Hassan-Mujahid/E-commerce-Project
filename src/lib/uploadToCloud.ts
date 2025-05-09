export const uploadToCloudinary = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Image upload failed");

  const data = await res.json();
  return data.secure_url; // Cloudinary hosted image URL
};
