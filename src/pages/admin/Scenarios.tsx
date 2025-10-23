import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Scenarios = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display text-primary mb-2">Scenarios</h1>
          <p className="text-muted-foreground">Create and manage story scenarios</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Scenario
        </Button>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-primary">Scenario Collection</CardTitle>
          <CardDescription>Playable adventures across the Nine Realms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <p className="mb-4">No scenarios created yet</p>
            <p className="text-sm">Design your first adventure to begin the saga</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Scenarios;
