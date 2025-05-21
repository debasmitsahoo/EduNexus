import React, { useState } from 'react';
import { ArrowLeft, GraduationCap, User, Users, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type UserType = 'admin' | 'teacher' | 'student' | 'parent';

const Login = () => {
  const [selectedType, setSelectedType] = useState<UserType | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { userType: selectedType, email, password });
  };

  const userTypes = [
    {
      type: 'admin' as UserType,
      icon: GraduationCap,
      label: 'Admin',
      description: 'Institution administrators and management'
    },
    {
      type: 'teacher' as UserType,
      icon: User,
      label: 'Teacher',
      description: 'Faculty and teaching staff'
    },
    {
      type: 'student' as UserType,
      icon: Users,
      label: 'Student',
      description: 'Current students'
    },
    {
      type: 'parent' as UserType,
      icon: School,
      label: 'Parent',
      description: 'Parents and guardians'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            className="mb-8 text-navy-blue hover:text-deep-yellow"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-navy-blue mb-4">Welcome Back</h1>
              <p className="text-lg text-gray-600">
                Please select your role and sign in to your account
              </p>
            </div>

            {!selectedType ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userTypes.map(({ type, icon: Icon, label, description }) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-deep-yellow"
                  >
                    <div className="bg-navy-blue/10 rounded-full p-4 mb-4">
                      <Icon className="h-8 w-8 text-deep-yellow" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-blue mb-2">{label}</h3>
                    <p className="text-gray-600 text-center">{description}</p>
                  </button>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-navy-blue">
                    {userTypes.find(t => t.type === selectedType)?.label} Login
                  </h2>
                  <Button
                    type="button"
                    variant="ghost"
                    className="text-gray-500 hover:text-navy-blue"
                    onClick={() => setSelectedType(null)}
                  >
                    Change Role
                  </Button>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full"
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 text-deep-yellow focus:ring-deep-yellow border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-deep-yellow hover:text-yellow-600">
                    Forgot password?
                  </a>
                </div>

                <Button type="submit" className="w-full primary-btn text-lg">
                  Sign In
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login; 