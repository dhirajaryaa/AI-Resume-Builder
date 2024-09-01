import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";

export const PersonalDetailsForm = () => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;

  };

  return (
    <section className="border-t-4 border-primary rounded-lg shadow-lg p-4 mt-4">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p className="text-xs text-muted-foreground ">
        Enter your personal details here. This information will be used to
        create your resume.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="col-span-2">
            <Label htmlFor="jobRole">Job Role</Label>
            <Input
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="jobRole"
              id="jobRole"
              placeholder="Job Role"
            />
          </div>
          <div className="col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="address"
              id="address"
              placeholder="Address"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="text"
              name="phone"
              id="phone"
              onChange={(e) => handleInputChange(e)}
              placeholder="Phone"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-5 mt-8">
          <Button size="lg" className="flex gap-2 shadow-md">
            Save
          </Button>
        </div>
      </form>
    </section>
  );
};
