import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  GitlabIcon as GitHub,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NextShop</h3>
            <p className="text-muted-foreground">
              Your one-stop shop for all your needs. Quality products, fast
              delivery, and excellent customer service.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <GitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/search"
                  className="text-muted-foreground hover:text-primary"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/search?category=electronics"
                  className="text-muted-foreground hover:text-primary"
                >
                  Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="/search?category=clothing"
                  className="text-muted-foreground hover:text-primary"
                >
                  Clothing
                </Link>
              </li>
              <li>
                <Link
                  href="/search?category=home"
                  className="text-muted-foreground hover:text-primary"
                >
                  Home & Kitchen
                </Link>
              </li>
              <li>
                <Link
                  href="/search?category=books"
                  className="text-muted-foreground hover:text-primary"
                >
                  Books
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/login"
                  className="text-muted-foreground hover:text-primary"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-muted-foreground hover:text-primary"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-primary"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/orders"
                  className="text-muted-foreground hover:text-primary"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/profile"
                  className="text-muted-foreground hover:text-primary"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping-policy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} NextShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
