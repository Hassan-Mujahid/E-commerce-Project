"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/context/cart-context";
import { CartItem } from "@/components/cart/cart-item";
import { ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, subtotal } = useCart();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 py-12">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-medium">Your cart is empty</h3>
            <p className="mt-2 text-center text-muted-foreground">
              Add items to your cart to see them here.
            </p>
            <Button asChild className="mt-6">
              <Link href="/search" onClick={onClose}>
                Continue Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 pr-4">
              <AnimatePresence initial={false}>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CartItem item={item} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </ScrollArea>

            <div className="space-y-4 mt-6">
              <Separator />
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="font-medium">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <SheetFooter className="flex flex-col gap-2 sm:flex-col">
                <Button asChild size="lg">
                  <Link href="/checkout" onClick={onClose}>
                    Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" onClick={onClose}>
                  Continue Shopping
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
