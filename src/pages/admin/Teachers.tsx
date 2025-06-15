import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Search, Edit, Trash2, Plus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Teacher {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  subject_id: string;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
  profile_id: string;
}

interface Subject {
  id: string;
  name: string;
  code: string;
}

export default function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    subjectId: '',
    status: 'active' as const,
  });
  const { toast } = useToast();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchTeachers();
    fetchSubjects();
  }, []);

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .rpc('get_teachers_with_profiles');

      if (error) {
        console.error('Error fetching teachers:', error);
        toast({
          title: "Error",
          description: "Failed to fetch teachers",
          variant: "destructive",
        });
        return;
      }

      if (!data) {
        setTeachers([]);
        return;
      }

      // Transform the data to match our interface
      const transformedData = data.map((teacher: any) => {
        const [firstName, ...lastNameParts] = (teacher.profile_full_name || '').split(' ');
        const lastName = lastNameParts.join(' ');

        return {
          id: teacher.id,
          profile_id: teacher.profile_id,
          first_name: firstName || 'Unknown',
          last_name: lastName || 'Unknown',
          email: teacher.profile_email || 'No Email',
          phone: '', // Phone is not stored in profiles table
          subject_id: teacher.subject_id,
          status: teacher.status,
          created_at: teacher.created_at,
          updated_at: teacher.created_at, // Using created_at as updated_at since it's not in the function
        };
      });

      setTeachers(transformedData);
    } catch (error) {
      console.error('Error fetching teachers:', error);
      toast({
        title: "Error",
        description: "Failed to fetch teachers",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchSubjects = async () => {
    try {
      const { data, error } = await supabase
        .from('subjects')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      setSubjects(data || []);
    } catch (error) {
      console.error('Error fetching subjects:', error);
      toast({
        title: "Error",
        description: "Failed to fetch subjects",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    try {
      // Validate email format
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Validate other required fields
      if (!formData.fullName.trim()) {
        throw new Error('Full name is required');
      }
      if (!formData.subjectId) {
        throw new Error('Subject is required');
      }

      // Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: 'Welcome@123', // Default password
        options: {
          data: {
            full_name: formData.fullName,
            role: 'instructor'
          }
        }
      });

      if (authError) {
        if (authError.message.includes('already registered')) {
          throw new Error('A user with this email already exists');
        }
        throw authError;
      }

      if (!authData.user) {
        throw new Error('Failed to create user account');
      }

      // Reduced wait time to 500ms
      await new Promise(resolve => setTimeout(resolve, 500));

      // Create teacher profile
      const { data: teacherData, error: teacherError } = await supabase
        .rpc('create_teacher', {
          p_email: formData.email,
          p_full_name: formData.fullName,
          p_subject_id: formData.subjectId,
          p_status: formData.status
        });

      if (teacherError) {
        // If teacher creation fails, try to clean up the auth user
        try {
          await supabase.auth.admin.deleteUser(authData.user.id);
        } catch (cleanupError) {
          console.error('Error cleaning up auth user:', cleanupError);
        }
        throw teacherError;
      }

      setSuccess('Teacher created successfully');
      setFormData({
        email: '',
        fullName: '',
        subjectId: '',
        status: 'active'
      });
      fetchTeachers();
      setIsDialogOpen(false);
    } catch (err: any) {
      console.error('Error saving teacher:', err);
      setError(err.message || 'Failed to save teacher');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (teacher: Teacher) => {
    setSelectedTeacher(teacher);
    setFormData({
      email: teacher.email,
      fullName: `${teacher.first_name} ${teacher.last_name}`,
      subjectId: teacher.subject_id,
      status: teacher.status,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (teacherId: string) => {
    if (window.confirm('Are you sure you want to delete this teacher?')) {
      try {
        const { error } = await supabase
          .from('teachers')
          .delete()
          .eq('id', teacherId);

        if (error) throw error;
        setTeachers(teachers.filter(teacher => teacher.id !== teacherId));
        toast({
          title: "Success",
          description: "Teacher deleted successfully",
        });
      } catch (error) {
        console.error('Error deleting teacher:', error);
        toast({
          title: "Error",
          description: "Failed to delete teacher",
          variant: "destructive",
        });
      }
    }
  };

  const resetForm = () => {
    setSelectedTeacher(null);
    setFormData({
      email: '',
      fullName: '',
      subjectId: '',
      status: 'active',
    });
  };

  const filteredTeachers = teachers.filter(teacher =>
    `${teacher.first_name} ${teacher.last_name}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Teacher Management</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => resetForm()}>
              <Plus className="mr-2 h-4 w-4" />
              Add Teacher
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedTeacher ? 'Edit Teacher' : 'Add New Teacher'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="subjectId">Subject</Label>
                <Select
                  value={formData.subjectId}
                  onValueChange={(value) => setFormData({ ...formData, subjectId: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject.id} value={subject.id}>
                        {subject.name} ({subject.code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: 'active' | 'inactive') => setFormData({ ...formData, status: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsDialogOpen(false);
                    setSelectedTeacher(null);
                    setFormData({
                      email: '',
                      fullName: '',
                      subjectId: '',
                      status: 'active'
                    });
                  }}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {selectedTeacher ? 'Updating...' : 'Creating...'}
                    </>
                  ) : (
                    selectedTeacher ? 'Update Teacher' : 'Create Teacher'
                  )}
                </Button>
              </div>
              {error && (
                <div className="text-sm text-red-500 mt-2">
                  {error}
                </div>
              )}
              {success && (
                <div className="text-sm text-green-500 mt-2">
                  {success}
                </div>
              )}
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="Search teachers..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-navy-blue">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : filteredTeachers.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  No teachers found
                </td>
              </tr>
            ) : (
              filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-navy-blue">{teacher.first_name} {teacher.last_name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{teacher.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{teacher.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">
                      {subjects.find(s => s.id === teacher.subject_id)?.name || 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      teacher.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {teacher.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(teacher)}
                      className="text-navy-blue hover:text-deep-yellow mr-4"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(teacher.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
} 