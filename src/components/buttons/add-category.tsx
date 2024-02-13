"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { createCategory } from "@/actions/category.action";
import { toast } from "react-toastify";

export default function AddCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Button onClick={() => setShow(true)}>Add Category</Button>
      <div
        className={`${
          show ? "block" : "hidden"
        } fixed z-10 inset-0 overflow-y-auto`}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <form
              action={async (formData) => {
                const { message, error } = await createCategory(formData);
                if (error) {
                  toast.error(error);
                } else {
                  toast.success(message);
                }
                setShow(false);
              }}
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                      Add Food Category
                    </h3>
                    <div className="mb-4">
                      <Label htmlFor="itemName">Name</Label>
                      <Input type="text" name="name" id="itemName" required />
                    </div>
                    <div className="mb-4">
                      <Label htmlFor="itemName">Image</Label>
                      <Input
                        type="file"
                        name="image"
                        id="itemName"
                        accept="image/*"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <Button type="submit">Add</Button>
                <Button
                  type="button"
                  variant={"secondary"}
                  onClick={handleClose}
                  className="mr-2"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
