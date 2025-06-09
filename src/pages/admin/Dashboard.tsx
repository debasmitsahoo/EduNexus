import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import {
  Users,
  BookOpen,
  GraduationCap,
  BookText,
  Calendar,
  FileText,
  BarChart,
  MessageSquare,
  Bell,
  Settings,
  CreditCard,
  Headphones,
  Code,
  Globe,
  Shield,
  Zap
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
      color: 'bg-navy-blue',
    },
    {
      name: 'Total Classes',
      value: stats.classes,
      icon: BookOpen,
      color: 'bg-deep-yellow',
    },
    {
      name: 'Total Teachers',
      value: stats.teachers,
      icon: GraduationCap,
      color: 'bg-navy-blue',
    },
    {
      name: 'Total Subjects',
      value: stats.subjects,
      icon: BookText,
      color: 'bg-deep-yellow',
    },
  ]

  const comingSoonFeatures = [
    // Standard Plan Features
    {
      name: 'Fee Management System',
      description: 'Automated fee collection, multiple payment methods, and payment tracking',
      icon: CreditCard,
      plan: 'Standard',
    },
    {
      name: 'Advanced Analytics',
      description: 'Custom report builder, financial analytics, and student performance tracking',
      icon: BarChart,
      plan: 'Standard',
    },
    {
      name: 'Teacher Dashboard',
      description: 'Advanced attendance management, performance tracking, and resource allocation',
      icon: GraduationCap,
      plan: 'Standard',
    },
    {
      name: 'Priority Support',
      description: '24/7 email support, priority ticket handling, and dedicated support team',
      icon: Headphones,
      plan: 'Standard',
    },
    // Enterprise Plan Features
    {
      name: 'Custom Integrations',
      description: 'Custom API development, third-party integrations, and workflow automation',
      icon: Code,
      plan: 'Enterprise',
    },
    {
      name: 'White-labeling',
      description: 'Custom branding, domain customization, and branded mobile apps',
      icon: Globe,
      plan: 'Enterprise',
    },
    {
      name: 'Advanced Security',
      description: 'Enterprise-grade security features and custom security protocols',
      icon: Shield,
      plan: 'Enterprise',
    },
    {
      name: 'Performance Optimization',
      description: 'Enhanced performance and priority feature access',
      icon: Zap,
      plan: 'Enterprise',
    },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-navy-blue">Dashboard</h1>
      
      {loading ? (
        <div className="text-center text-gray-500">Loading statistics...</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map((stat) => (
            <div
              key={stat.name}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-navy-blue">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Coming Soon Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-navy-blue mb-6">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comingSoonFeatures.map((feature) => (
            <div
              key={feature.name}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-gray-100">
                  <feature.icon className="w-6 h-6 text-navy-blue" />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-navy-blue">{feature.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      feature.plan === 'Standard' 
                        ? 'bg-deep-yellow/10 text-deep-yellow'
                        : 'bg-navy-blue/10 text-navy-blue'
                    }`}>
                      {feature.plan}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{feature.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 text-xs font-medium text-deep-yellow bg-deep-yellow/10 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 