import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import {
  Users,
  BookOpen,
  GraduationCap,
  BookText
} from 'lucide-react'

interface Stats {
  students: number;
  classes: number;
  teachers: number;
  subjects: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats>({
    students: 0,
    classes: 0,
    teachers: 0,
    subjects: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [
        { count: students },
        { count: classes },
        { count: teachers },
        { count: subjects },
      ] = await Promise.all([
        supabase.from('students').select('*', { count: 'exact', head: true }),
        supabase.from('classes').select('*', { count: 'exact', head: true }),
        supabase.from('teachers').select('*', { count: 'exact', head: true }),
        supabase.from('subjects').select('*', { count: 'exact', head: true }),
      ])

      setStats({
        students: students || 0,
        classes: classes || 0,
        teachers: teachers || 0,
        subjects: subjects || 0,
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      name: 'Total Students',
      value: stats.students,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      name: 'Total Classes',
      value: stats.classes,
      icon: BookOpen,
      color: 'bg-green-500',
    },
    {
      name: 'Total Teachers',
      value: stats.teachers,
      icon: GraduationCap,
      color: 'bg-purple-500',
    },
    {
      name: 'Total Subjects',
      value: stats.subjects,
      icon: BookText,
      color: 'bg-orange-500',
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      
      {loading ? (
        <div className="text-center text-gray-500">Loading statistics...</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => (
            <div
              key={stat.name}
              className="bg-white rounded-lg shadow p-6"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 