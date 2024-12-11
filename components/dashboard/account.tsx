'use client'

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";


export default function Account() {

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Profile Picture</CardTitle>
          <CardDescription>
            Click on the avatar to upload a custom one from your files.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                alt="User avatar"
                src="/placeholder.svg?height=96&width=96"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1.5">
              <Label htmlFor="picture">Profile picture</Label>
              <Input id="picture" type="file" accept="image/*" />
              <p className="text-sm text-muted-foreground">
                Accepted formats: .jpg, .png, .gif
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
        <form className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Enter your details below to update your profile.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
              <Label>username</Label>
              <Input id="username" type="text" name="username" placeholder="johndoe" />
              </div>
              <div>
              <Label>Name</Label>
              <Input id="name" type="text" name="name" placeholder="John Doe" />
              </div>
              <div>
              <Label>Email</Label>
              <Input id="email" type="email" name="email" placeholder=""/>
              </div>
              <div>
              <Label>Phone</Label>
              <Input id="phone" type="tel" name="phone" placeholder="+1 234 567 890" />
              </div>
              <div>
              <Label>Address</Label>
              <Textarea id="address" name="address" placeholder="123 Main St, City, Country" />
              </div>
              <div>
              <Label>Password</Label>
              <Input id="password" type="password" name="password" />
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-end">
            <Button type="submit">Update profile</Button>
          </div>
        </form>
    </div>
  );
}
