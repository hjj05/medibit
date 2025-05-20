import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, FileText, Video, Users, Clock, Search, User } from 'lucide-react';

// Mock data for demo
const upcomingAppointments = [
  {
    id: 1,
    patientName: 'Jane Doe',
    patientId: 'P-10293',
    date: '2025-06-15',
    time: '10:30 AM',
    type: 'Video Consultation',
    status: 'Confirmed',
    reason: 'Follow-up: Hypertension'
  },
  {
    id: 2,
    patientName: 'John Smith',
    patientId: 'P-10498',
    date: '2025-06-15',
    time: '11:15 AM',
    type: 'Video Consultation',
    status: 'Confirmed',
    reason: 'Annual check-up'
  },
  {
    id: 3,
    patientName: 'Mary Johnson',
    patientId: 'P-10624',
    date: '2025-06-15',
    time: '1:00 PM',
    type: 'Video Consultation',
    status: 'Confirmed',
    reason: 'New patient consultation'
  }
];

const recentPatients = [
  {
    id: 1,
    name: 'Jane Doe',
    patientId: 'P-10293',
    lastVisit: '2025-05-20',
    condition: 'Hypertension'
  },
  {
    id: 2,
    name: 'Robert Wilson',
    patientId: 'P-10385',
    lastVisit: '2025-05-18',
    condition: 'Diabetes Type 2'
  },
  {
    id: 3,
    name: 'Emily Chen',
    patientId: 'P-10421',
    lastVisit: '2025-05-15',
    condition: 'Annual physical'
  }
];

const DoctorPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Healthcare Provider Portal</h1>
          <p className="text-teal-100">Manage your practice and patients</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto">
            <button
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'dashboard'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'appointments'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('appointments')}
            >
              Appointments
            </button>
            <button
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'patients'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('patients')}
            >
              Patients
            </button>
            <button
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'consultations'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('consultations')}
            >
              Telemedicine
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Welcome Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">Welcome back, Dr. Johnson!</h2>
                <p className="mt-1 text-gray-600">
                  You have <span className="font-medium">3 patient consultations</span> scheduled for today.
                </p>
                
                <div className="mt-4 flex space-x-3">
                  <Link
                    to="/consultations"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Start Next Consultation
                  </Link>
                  <Link
                    to="/appointments"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    View Schedule
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <h3 className="text-base font-medium text-gray-900">Today's Overview</h3>
                <div className="mt-5 grid grid-cols-1 gap-5">
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Calendar className="h-6 w-6 text-teal-500" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-teal-800">Appointments</p>
                        <p className="text-xl font-semibold text-teal-900">3</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Users className="h-6 w-6 text-blue-500" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-blue-800">Patients</p>
                        <p className="text-xl font-semibold text-blue-900">12</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="h-6 w-6 text-purple-500" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-purple-800">Records to Review</p>
                        <p className="text-xl font-semibold text-purple-900">5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Today's Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-3 bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Today's Consultations</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center">
                          <h4 className="text-base font-medium text-gray-900">
                            {appointment.patientName}
                          </h4>
                          <span className="ml-2 text-xs text-gray-500">({appointment.patientId})</span>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          <span>{appointment.time}</span>
                          <span className="mx-1">•</span>
                          <Video className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          <span>{appointment.type}</span>
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          <span className="font-medium">Reason:</span> {appointment.reason}
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-white bg-teal-500 hover:bg-teal-600">
                          <Video className="mr-1 h-3 w-3" />
                          Join
                        </button>
                        <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                          <FileText className="mr-1 h-3 w-3 text-gray-500" />
                          View Records
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Patients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3 bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Recent Patients</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search patients..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <ul className="divide-y divide-gray-200">
                {recentPatients.map((patient) => (
                  <li key={patient.id}>
                    <div className="px-6 py-4 flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                          <User className="h-6 w-6 text-teal-600" />
                        </div>
                      </div>
                      <div className="ml-4 min-w-0 flex-1">
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-gray-900 truncate">{patient.name}</p>
                          <p className="ml-2 text-xs text-gray-500">({patient.patientId})</p>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <span>Last visit: {formatDate(patient.lastVisit)}</span>
                          <span className="mx-1">•</span>
                          <span>{patient.condition}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 flex items-center space-x-2">
                        <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-white bg-teal-500 hover:bg-teal-600">
                          <FileText className="mr-1 h-3 w-3" />
                          Records
                        </button>
                        <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                          <Calendar className="mr-1 h-3 w-3 text-gray-500" />
                          Schedule
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-4 text-center">
                <Link to="/patients" className="text-sm font-medium text-teal-600 hover:text-teal-500">
                  View all patients
                </Link>
              </div>
            </motion.div>
          </div>
        )}
        
        {activeTab !== 'dashboard' && (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                {activeTab === 'appointments' && 'Appointment Management'}
                {activeTab === 'patients' && 'Patient Records'}
                {activeTab === 'consultations' && 'Telemedicine Consultations'}
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600">
                This section would contain the {activeTab} management interface.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorPortal;