import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus } from 'lucide-react';

const Characters = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display text-primary mb-2">Characters</h1>
          <p className="text-muted-foreground">Manage heroes, foes, and NPCs of the Nine Realms</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Character
        </Button>
      </div>

      <Tabs defaultValue="heroes" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="heroes">Heroes</TabsTrigger>
          <TabsTrigger value="foes">Foes</TabsTrigger>
          <TabsTrigger value="bosses">Bosses</TabsTrigger>
        </TabsList>

        <TabsContent value="heroes">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">Heroes of the Realms</CardTitle>
              <CardDescription>Legendary warriors and champions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <p className="mb-4">No heroes created yet</p>
                <p className="text-sm">Create your first hero to populate the codex</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="foes">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">Foes & Adversaries</CardTitle>
              <CardDescription>Enemies that threaten the realms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <p className="mb-4">No foes created yet</p>
                <p className="text-sm">Add enemies to challenge your heroes</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bosses">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-primary">Epic Bosses</CardTitle>
              <CardDescription>Legendary encounters and final battles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 text-muted-foreground">
                <p className="mb-4">No bosses created yet</p>
                <p className="text-sm">Design epic encounters for your campaign</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Characters;
