// Mock data functions for the e-commerce app
// These would be replaced with actual API calls to MongoDB

export async function getMockProducts() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: "1",
      name: "Wireless Headphones",
      slug: "wireless-headphones",
      description:
        "Premium wireless headphones with noise cancellation and long battery life.",
      price: 129.99,
      oldPrice: 159.99,
      rating: 4.5,
      reviews: 128,
      inStock: true,
      category: "Electronics",
      images: [
        "https://images.unsplash.com/photo-1565935192924-21a9ddca26eb?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1591588979429-5f5dc6b32418?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1585666681089-0b14e55c6e22?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1596628319258-c6f3f387a1ed?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      colors: ["#000000", "#FFFFFF", "#FF0000"],
      specifications: [
        { name: "Battery Life", value: "30 hours" },
        { name: "Connectivity", value: "Bluetooth 5.0" },
        { name: "Noise Cancellation", value: "Active" },
      ],
      createdAt: "2023-01-15T00:00:00.000Z",
    },
    {
      id: "2",
      name: "Smart Watch",
      slug: "smart-watch",
      description:
        "Track your fitness, receive notifications, and more with this advanced smartwatch.",
      price: 199.99,
      oldPrice: null,
      rating: 4.2,
      reviews: 95,
      inStock: true,
      category: "Electronics",
      images: [
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400",
      ],
      colors: ["#000000", "#SILVER", "#GOLD"],
      sizes: ["S", "M", "L"],
      specifications: [
        { name: "Battery Life", value: "48 hours" },
        { name: "Water Resistance", value: "50m" },
        { name: "Display", value: "AMOLED" },
      ],
      createdAt: "2023-02-20T00:00:00.000Z",
    },
    {
      id: "3",
      name: "Premium Backpack",
      slug: "premium-backpack",
      description:
        "Durable and stylish backpack with multiple compartments for all your essentials.",
      price: 79.99,
      oldPrice: 99.99,
      rating: 4.7,
      reviews: 213,
      inStock: true,
      category: "Accessories",
      images: [
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400",
      ],
      colors: ["#000000", "#NAVY", "#GRAY"],
      specifications: [
        { name: "Material", value: "Water-resistant polyester" },
        { name: "Capacity", value: "30L" },
        { name: "Laptop Compartment", value: "Up to 15 inches" },
      ],
      createdAt: "2023-03-10T00:00:00.000Z",
    },
    {
      id: "4",
      name: "Fitness Tracker",
      slug: "fitness-tracker",
      description:
        "Monitor your activity, sleep, and heart rate with this sleek fitness tracker.",
      price: 89.99,
      oldPrice: null,
      rating: 4.0,
      reviews: 78,
      inStock: true,
      category: "Electronics",
      images: [
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400",
      ],
      colors: ["#000000", "#RED", "#BLUE"],
      sizes: ["S", "M", "L"],
      specifications: [
        { name: "Battery Life", value: "7 days" },
        { name: "Water Resistance", value: "IP68" },
        { name: "Sensors", value: "Heart rate, accelerometer" },
      ],
      createdAt: "2023-04-05T00:00:00.000Z",
    },
    {
      id: "5",
      name: "Portable Bluetooth Speaker",
      slug: "portable-bluetooth-speaker",
      description:
        "Powerful sound in a compact, waterproof design for music on the go.",
      price: 59.99,
      oldPrice: 79.99,
      rating: 4.3,
      reviews: 156,
      inStock: true,
      category: "Electronics",
      images: [
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400",
      ],
      colors: ["#000000", "#BLUE", "#RED"],
      specifications: [
        { name: "Battery Life", value: "12 hours" },
        { name: "Water Resistance", value: "IPX7" },
        { name: "Connectivity", value: "Bluetooth 5.0" },
      ],
      createdAt: "2023-05-12T00:00:00.000Z",
    },
    {
      id: "6",
      name: "Ergonomic Office Chair",
      slug: "ergonomic-office-chair",
      description:
        "Comfortable and supportive chair for long hours of work or study.",
      price: 249.99,
      oldPrice: 299.99,
      rating: 4.6,
      reviews: 89,
      inStock: false,
      category: "Home",
      images: [
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400",
      ],
      colors: ["#000000", "#GRAY"],
      specifications: [
        { name: "Material", value: "Mesh and leather" },
        { name: "Weight Capacity", value: "300 lbs" },
        { name: "Adjustable", value: "Height, armrests, recline" },
      ],
      createdAt: "2023-06-18T00:00:00.000Z",
    },
  ];
}

export async function getMockProductBySlug(slug: string) {
  const products = await getMockProducts();
  return products.find((product) => product.slug === slug) || null;
}

export async function getMockRelatedProducts(slug: string) {
  const products = await getMockProducts();
  const currentProduct = products.find((product) => product.slug === slug);

  if (!currentProduct) return [];

  // Return products in the same category, excluding the current product
  return products
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
    .slice(0, 4);
}

export async function getMockUser() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  // Mock user data
  return {
    id: "user_123",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "user",
  };
}

export async function getMockOrders() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: "ORD-1234",
      date: "2023-04-15",
      status: "Delivered",
      total: 129.99,
      items: [
        { id: "1", name: "Wireless Headphones", quantity: 1, price: 129.99 },
      ],
    },
    {
      id: "ORD-1235",
      date: "2023-05-20",
      status: "Delivered",
      total: 279.98,
      items: [
        { id: "2", name: "Smart Watch", quantity: 1, price: 199.99 },
        { id: "3", name: "Premium Backpack", quantity: 1, price: 79.99 },
      ],
    },
    {
      id: "ORD-1236",
      date: "2023-06-10",
      status: "Delivered",
      total: 89.99,
      items: [{ id: "4", name: "Fitness Tracker", quantity: 1, price: 89.99 }],
    },
    {
      id: "ORD-1237",
      date: "2023-07-05",
      status: "Processing",
      total: 59.99,
      items: [
        {
          id: "5",
          name: "Portable Bluetooth Speaker",
          quantity: 1,
          price: 59.99,
        },
      ],
    },
    {
      id: "ORD-1238",
      date: "2023-07-18",
      status: "Processing",
      total: 249.99,
      items: [
        { id: "6", name: "Ergonomic Office Chair", quantity: 1, price: 249.99 },
      ],
    },
  ];
}
