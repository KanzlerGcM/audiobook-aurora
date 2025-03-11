import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast({
        title: "Login successful!",
        description: "You are now logged in.",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login failed.",
        description: error.message || "Invalid credentials.",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container relative h-[calc(100vh-5rem)] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col p-8 text-muted-foreground antialiased lg:flex">
          <div className="absolute inset-0 bg-hakim-dark/30 z-0 rounded-r-full" />
          <Link to="/" className="mb-6 font-semibold">
            Hakim
          </Link>
          <div className="relative z-10 mt-20">
            <h2 className="text-3xl font-bold text-white">
              {t('welcomeBack')}
            </h2>
            <p className="mt-3 text-lg text-hakim-gray">
              {t('loginDescription')}
            </p>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold">{t('signIn')}</h1>
              <p className="text-sm text-muted-foreground">
                {t('enterCredentials')}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t('password')}</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button className="w-full" type="submit">
                <Lock className="mr-2 h-4 w-4" />
                {t('signIn')}
              </Button>
            </form>
            <p className="px-8 text-center text-sm text-muted-foreground">
              {t('notAMember')}
              <Link
                to="/signup"
                className="hover:text-hakim-light ml-1 underline underline-offset-4"
              >
                {t('signUp')}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
