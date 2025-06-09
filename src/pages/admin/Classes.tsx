import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Search, Edit, Trash2, Plus } from 'lucide-react';
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

interface Class {
  id: string;
  name: string;
  section: string;
  academic_year: string;
  created_at: string;
  updated_at: string;
}

export default function Classes() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<Class | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    section: '',
    academic_year: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const { data, error } = await supabase
        .from('classes')
        .select('*')
        .order('name', { ascending: true });

      if (error) throw error;
      setClasses(data || []);
    } catch (error) {
      console.error('Error fetching classes:', error);
      toast({
        title: "Error",
        description: "Failed to fetch classes",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (selectedClass) {
        // Update existing class
        const { error } = await supabase
          .from('classes')
          .update(formData)
          .eq('id', selectedClass.id);

        if (error) throw error;
        toast({
          title: "Success",
          description: "Class updated successfully",
        });
      } else {
        // Create new class
        const { error } = await supabase
          .from('classes')
          .insert([formData]);

        if (error) throw error;
        toast({
          title: "Success",
          description: "Class created successfully",
        });
      }

      setIsDialogOpen(false);
      fetchClasses();
      resetForm();
    } catch (error) {
      console.error('Error saving class:', error);
      toast({
        title: "Error",
        description: "Failed to save class",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (class_: Class) => {
    setSelectedClass(class_);
    setFormData({
      name: class_.name,
      section: class_.section,
      academic_year: class_.academic_year,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (classId: string) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      try {
        const { error } = await supabase
          .from('classes')
          .delete()
          .eq('id', classId);

        if (error) throw error;
        setClasses(classes.filter(class_ => class_.id !== classId));
        toast({
          title: "Success",
          description: "Class deleted successfully",
        });
      } catch (error) {
        console.error('Error deleting class:', error);
        toast({
          title: "Error",
          description: "Failed to delete class",
          variant: "destructive",
        });
      }
    }
  };

  const resetForm = () => {
    setSelectedClass(null);
    setFormData({
      name: '',
      section: '',
      academic_year: '',
    });
  };

  const filteredClasses = classes.filter(class_ =>
    class_.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    class_.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
    class_.academic_year.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Class Management</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => resetForm()}>
              <Plus className="mr-2 h-4 w-4" />
              Add Class
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedClass ? 'Edit Class' : 'Add New Class'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Class Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="e.g., Class 10"
                />
              </div>
              <div>
                <Label htmlFor="section">Section</Label>
                <Input
                  id="section"
                  value={formData.section}
                  onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                  placeholder="e.g., A"
                />
              </div>
              <div>
                <Label htmlFor="academic_year">Academic Year</Label>
                <Input
                  id="academic_year"
                  value={formData.academic_year}
                  onChange={(e) => setFormData({ ...formData, academic_year: e.target.value })}
                  required
                  placeholder="e.g., 2024-2025"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {selectedClass ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="Search classes..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Class Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Section
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Academic Year
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                  Loading...
                </td>
              </tr>
            ) : filteredClasses.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                  No classes found
                </td>
              </tr>
            ) : (
              filteredClasses.map((class_) => (
                <tr key={class_.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{class_.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{class_.section}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{class_.academic_year}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(class_.created_at).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      className="text-blue-600 hover:text-blue-900 mr-4"
                      onClick={() => handleEdit(class_)}
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900"
                      onClick={() => handleDelete(class_.id)}
                    >
                      <Trash2 className="h-4 w-4" />
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