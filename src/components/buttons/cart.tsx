"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import CartCheckout from "../cart-checkout";

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span className="cursor-pointer flex gap-1">
          <ShoppingCart />
        </span>
      </SheetTrigger>
      <SheetContent className="overflow-x-hidden overflow-y-auto">
        <CartCheckout />
      </SheetContent>
    </Sheet>
  );
}
