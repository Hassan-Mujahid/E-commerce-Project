"use client"

import { useState } from "react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X } from "lucide-react"
import Link from "next/link"

interface CartItemProps {
  item: {
    id: string
    name: string
    price: number
    image: string
    quantity: number
  }
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()
  const [isRemoving, setIsRemoving] = useState(false)

  const handleRemove = () => {
    setIsRemoving(true)
    // Small delay to allow animation to play
    setTimeout(() => {
      removeItem(item.id)
    }, 200)
  }

  return (
    <div className={`flex py-4 ${isRemoving ? "opacity-50" : ""}`}>
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium">
          <Link href={`/products/${item.id}`} className="hover:underline line-clamp-1">
            {item.name}
          </Link>
          <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" onClick={handleRemove}>
            <X className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
