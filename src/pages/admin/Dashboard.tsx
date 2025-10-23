import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Users, BookOpen, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display text-primary mb-2">Welcome, Rune Keeper</h1>
        <p className="text-muted-foreground">Overview of your realm's activities</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card border-border hover:border-primary/50 transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Subscribers
            </CardTitle>
            <Mail className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">0</div>
            <p className="text-xs text-muted-foreground mt-1">
              Awaiting the journey
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border hover:border-primary/50 transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Characters
            </CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">0</div>
            <p className="text-xs text-muted-foreground mt-1">
              Heroes & foes await
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border hover:border-primary/50 transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Journal Posts
            </CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">0</div>
            <p className="text-xs text-muted-foreground mt-1">
              Stories untold
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border hover:border-primary/50 transition-all">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Engagement
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">--</div>
            <p className="text-xs text-muted-foreground mt-1">
              Metrics pending
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-primary">Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
            <h3 className="font-semibold text-foreground mb-1">View Subscribers</h3>
            <p className="text-sm text-muted-foreground">Manage your waitlist</p>
          </div>
          <div className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
            <h3 className="font-semibold text-foreground mb-1">New Journal Entry</h3>
            <p className="text-sm text-muted-foreground">Share your progress</p>
          </div>
          <div className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
            <h3 className="font-semibold text-foreground mb-1">Add Character</h3>
            <p className="text-sm text-muted-foreground">Expand the codex</p>
          </div>
          <div className="p-4 rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
            <h3 className="font-semibold text-foreground mb-1">View Statistics</h3>
            <p className="text-sm text-muted-foreground">Track your realm</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
