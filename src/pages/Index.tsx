import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to the Task List App</CardTitle>
            <CardDescription>
              Manage your transaction tasks efficiently
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" placeholder="Your role" />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your email" type="email" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link to="/task-list" className="text-blue-600 hover:underline">
              View Task List
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-8 flex flex-col gap-2">
        {/* Add a link to the Transaction Task List */}
        <a
          href="/transaction-task-list"
          className="inline-block text-blue-600 underline text-base font-medium hover:text-blue-800 transition print:hidden"
        >
          Transaction Task List (Full Page)
        </a>
      </div>
    </main>
  );
}
