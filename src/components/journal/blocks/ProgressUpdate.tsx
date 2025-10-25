import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, Circle } from "lucide-react";

interface ProgressUpdateProps {
  data: {
    milestone: string;
    week?: number;
    progress: number;
    tasks: Array<{
      text: string;
      status: 'done' | 'inProgress' | 'pending';
    }>;
  };
}

export const ProgressUpdate = ({ data }: ProgressUpdateProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'inProgress':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'pending':
        return <Circle className="w-5 h-5 text-muted-foreground" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <Card className="p-6 my-8 bg-gradient-to-br from-card to-secondary/10 border-2 border-secondary/30">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              {data.milestone}
            </h3>
            {data.week && (
              <p className="text-sm text-muted-foreground">Week {data.week}</p>
            )}
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">{data.progress}%</p>
            <p className="text-xs text-muted-foreground">Complete</p>
          </div>
        </div>
        
        <Progress value={data.progress} className="h-2" />
        
        <div className="space-y-2 pt-2">
          {data.tasks.map((task, index) => (
            <div key={index} className="flex items-center gap-3">
              {getStatusIcon(task.status)}
              <span className={`text-sm ${
                task.status === 'done' 
                  ? 'text-foreground line-through' 
                  : 'text-foreground'
              }`}>
                {task.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
