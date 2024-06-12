"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import ArrowAsComponent from "../../../assets/ArrowAsComponent"


import { cn } from "@/lib/utils"
interface AccordionItemProps
  extends  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  isOpen?: boolean
}
interface AccordionItemPropsTwo
  extends  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> {
  isOpen?: boolean
}
interface AccordionItemPropsThree
  extends  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  isOpen?: boolean
}

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemPropsTwo
  
>(({ className,isOpen, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b " + (isOpen ? " text-white ": "text-orange-500 ") + (isOpen ? "border-orange-500 ":   " border-white "), className)}
    {...props}
    

    
  />
))
AccordionItem.displayName = "AccordionItem"






const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionItemProps
>(({ className,isOpen, children, ...props }, ref) => (
  
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all  text-sm  [&[data-state=open]>svg]:rotate-180 " + (isOpen? "text-orange-500":"text-white" ) ,
        className
      )}
      {...props}
    >
      {children}
      
      <ArrowAsComponent classname={"h-4 w-4 shrink-0 transition-transform duration-20 stroke-2  " +  (isOpen? "fill-orange-500":"fill-white" ) }  />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionItemPropsThree
>(({ className,isOpen, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" + (isOpen? "text-orange-500":"text-white" ) }
    {...props}
  >
    <div className={cn("pb-4 pt-0 " +  (isOpen? "text-orange-500":"text-white" ), className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
