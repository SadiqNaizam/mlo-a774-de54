import React from 'react';

// Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

// Icons
import { Pencil, Trash2 } from 'lucide-react';

// Placeholder Data
const pastOrders = [
  { id: 'ORD75638', date: '2023-10-25', status: 'Delivered', total: '$1,250.00' },
  { id: 'ORD64839', date: '2023-09-12', status: 'Delivered', total: '$89.99' },
  { id: 'ORD58372', date: '2023-08-01', status: 'Cancelled', total: '$345.50' },
  { id: 'ORD58371', date: '2024-03-01', status: 'Processing', total: '$45.50' },
];

const savedAddresses = [
  { id: '1', type: 'Home', name: 'John Doe', line1: '123 Pixel Lane', city: 'Componentville', zip: '12345', country: 'Reactland', isDefault: true },
  { id: '2', type: 'Work', name: 'John Doe', line1: '456 API Avenue', city: 'Server City', zip: '67890', country: 'Reactland', isDefault: false },
];

const UserProfilePage = () => {
  console.log('UserProfilePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-grow container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Your Account</h1>
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="orders">Order History</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="settings">Account Settings</TabsTrigger>
          </TabsList>

          {/* Order History Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Your Orders</CardTitle>
                <CardDescription>View the history of your past purchases.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>
                          <Badge 
                             variant={order.status === 'Delivered' ? 'default' : (order.status === 'Processing' ? 'secondary' : 'destructive')}
                             className={`${order.status === 'Delivered' ? 'bg-green-600' : ''}`}
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{order.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Your Addresses</CardTitle>
                  <CardDescription>Manage your saved shipping addresses.</CardDescription>
                </div>
                 <Button>Add New Address</Button>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                {savedAddresses.map((address) => (
                  <Card key={address.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {address.type}
                        {address.isDefault && <Badge variant="secondary">Default</Badge>}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold">{address.name}</p>
                      <p className="text-sm text-muted-foreground">{address.line1}</p>
                      <p className="text-sm text-muted-foreground">{`${address.city}, ${address.zip}`}</p>
                      <p className="text-sm text-muted-foreground">{address.country}</p>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                      <Button variant="outline" size="icon"><Pencil className="h-4 w-4" /></Button>
                      <Button variant="destructive" size="icon"><Trash2 className="h-4 w-4" /></Button>
                    </CardFooter>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Account Settings Tab */}
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Update your personal information and password.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-md font-semibold pt-4">Change Password</h3>
                    <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                        <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input id="new-password" type="password" />
                    </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfilePage;