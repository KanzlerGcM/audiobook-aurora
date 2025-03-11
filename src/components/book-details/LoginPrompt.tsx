
import { Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const LoginPrompt = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="mt-6 p-4 bg-hakim-dark/20 rounded-lg border border-hakim-medium/20 text-center">
      <Lock className="h-8 w-8 mx-auto mb-2 text-hakim-light/50" />
      <h3 className="text-lg font-medium mb-2">Member-only content</h3>
      <p className="text-foreground/70 mb-4">
        Sign in to access our extensive audiobook library, including previews, ratings, and more.
      </p>
      <div className="flex justify-center gap-4">
        <Button variant="default" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="outline" onClick={() => navigate('/signup')}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default LoginPrompt;
