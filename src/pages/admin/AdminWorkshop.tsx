import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const AdminWorkshop = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display text-primary mb-2">Workshop</h1>
          <p className="text-muted-foreground">Manage 3D prints, craft logs, and behind-the-scenes content</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Item
        </Button>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-primary">Workshop Collection</CardTitle>
          <CardDescription>3D models, materials, and crafting guides</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <p className="mb-4">Workshop section coming soon</p>
            <p className="text-sm">Manage STL files, material tracking, and craft logs</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminWorkshop;
