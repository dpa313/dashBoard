"use client";
import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { Calendar1 } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <div className="flex flex-col gap-3">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" id="date" className="w-full">
              <Calendar1 />
              {date ? format(date, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-x-4">
              <Checkbox id="items-1" checked />
              <label
                htmlFor="items-1"
                className="text-sm text-muted-foreground"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-x-4">
              <Checkbox id="items-1" />
              <label
                htmlFor="items-1"
                className="text-sm text-muted-foreground"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-x-4">
              <Checkbox id="items-1" />
              <label
                htmlFor="items-1"
                className="text-sm text-muted-foreground"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-x-4">
              <Checkbox id="items-1" />
              <label
                htmlFor="items-1"
                className="text-sm text-muted-foreground"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-x-4">
              <Checkbox id="items-1" />
              <label
                htmlFor="items-1"
                className="text-sm text-muted-foreground"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-x-4">
              <Checkbox id="items-1" checked />
              <label
                htmlFor="items-1"
                className="text-sm text-muted-foreground"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-x-4">
              <Checkbox id="items-1" checked />
              <label
                htmlFor="items-1"
                className="text-sm text-muted-foreground"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-x-4">
              <Checkbox id="items-1" checked />
              <label
                htmlFor="items-1"
                className="text-sm text-muted-foreground"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-x-4">
              <Checkbox id="items-1" checked />
              <label
                htmlFor="items-1"
                className="text-sm text-muted-foreground"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-x-4">
              <Checkbox id="items-1" checked />
              <label
                htmlFor="items-1"
                className="text-sm text-muted-foreground"
              >
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
