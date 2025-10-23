import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Lock, Mail } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { toast } from 'sonner@2.0.3';

export const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/admin/dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      toast.success('Welcome to the Admin Sanctum');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1711426632939-27e7c36246bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZm9yZXN0JTIwbWlzdHxlbnwxfHx8fDE3NjEwMjU5MjR8MA&ixlib=rb-4.1.0&q=80&w=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/95 via-[#1a1410]/90 to-[#1a1410]/95"></div>
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-[#2a2218] border-2 border-[#d4a259]/30 rounded-lg p-8 stone-texture">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d4a259]/10 border border-[#d4a259] mb-4 torch-glow">
              <Shield className="w-8 h-8 text-[#d4a259]" />
            </div>
            <h1 className="text-3xl text-[#d4a259] mb-2">Admin Sanctum</h1>
            <p className="text-[#a89274]">Enter the realm of the content keepers</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#d4a259] flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="keeper@realms.nine"
                required
                className="bg-[#3a2f1f] border-[#d4a259]/30 text-[#e8dcc4] placeholder:text-[#a89274]/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#d4a259] flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="bg-[#3a2f1f] border-[#d4a259]/30 text-[#e8dcc4] placeholder:text-[#a89274]/50"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] hover:shadow-2xl torch-glow"
            >
              {isLoading ? 'Entering...' : 'Enter Sanctum'}
            </Button>
          </form>

          {/* Note */}
          <div className="mt-6 text-center text-sm text-[#a89274]">
            <p>Protected by ancient Norse runes</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
