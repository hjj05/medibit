import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, FileText, Video, Bitcoin, Clock, Shield } from 'lucide-react';

// For demo purposes
const upcomingAppointments = [
  {
    id: 1,
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    date: '2025-06-15',
    time: '10:30 AM',
    type: 'Video Consultation',
    status: 'Confirmed'
  },
  {
    id: 2,
    doctorName: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    date: '2025-06-20',
    time: '2:00 PM',
    type: 'Video Consultation',
    status: 'Pending Payment'
  }
];

const recentRecords = [
  {
    id: 1,
    title: 'Blood Test Results',
    doctor: 'Dr. Sarah Johnson',
    date: '2025-05-20',
    type: 'Lab Results'
  },
  {
    id: 2,
    title: 'Annual Physical Examination',
    doctor: 'Dr. Robert Smith',
    date: '2025-04-15',
    type: 'Clinical Notes'
  },
  {
    id: 3,
    title: 'Prescription - Atorvastatin',
    doctor: 'Dr. Sarah Johnson',
    date: '2025-05-20',
    type: 'Prescription'
  }
];

const PatientPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Patient Portal</h1>
          <p className="text-blue-100">Manage your healthcare securely</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto">
            <button
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'dashboard'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
            <button
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'appointments'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('appointments')}
            >
              Appointments
            </button>
            <button
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'records'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('records')}
            >
              Health Records
            </button>
            <button
              className={`py-4 px-2 border-b-2 font-medium text-sm ${
                activeTab === 'payments'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('payments')}
            >
              Payments
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Welcome Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">Welcome back, Jane!</h2>
                <p className="mt-1 text-gray-600">
                  Your next appointment is on{' '}
                  <span className="font-medium">June 15, 2025 at 10:30 AM</span> with Dr. Sarah Johnson.
                </p>
                
                <div className="mt-4 flex space-x-3">
                  <Link
                    to="/appointments"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Join Consultation
                  </Link>
                  <Link
                    to="/appointments"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    Schedule New
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Health Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <Shield className="h-8 w-8 text-green-500" />
                  <h2 className="ml-3 text-lg font-medium text-gray-900">Health Records</h2>
                </div>
                <p className="mt-1 text-gray-600">
                  Your health records are encrypted and securely stored. You control who can access them.
                </p>
                
                <div className="mt-4 flex space-x-3">
                  <Link
                    to="/records"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Records
                  </Link>
                  <Link
                    to="/records/upload"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Shield className="h-4 w-4 mr-2 text-gray-500" />
                    Upload New
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Upcoming Appointments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 lg:col-span-2"
            >
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Upcoming Appointments</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-medium text-gray-900">
                          {appointment.doctorName} - {appointment.specialty}
                        </h4>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          <span>{formatDate(appointment.date)} at {appointment.time}</span>
                        </div>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <Video className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          <span>{appointment.type}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            appointment.status === 'Confirmed'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {appointment.status}
                        </span>
                        {appointment.status === 'Pending Payment' && (
                          <button className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-white bg-orange-500 hover:bg-orange-600">
                            <Bitcoin className="mr-1 h-3 w-3" />
                            Pay Now
                          </button>
                        )}
                        {appointment.status === 'Confirmed' && (
                          <button className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-white bg-blue-500 hover:bg-blue-600">
                            <Video className="mr-1 h-3 w-3" />
                            Join
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="p-4 text-center">
                  <Link to="/appointments" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    View all appointments
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Recent Health Records */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 lg:col-span-2"
            >
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Health Records</h3>
              </div>
              <ul className="divide-y divide-gray-200">
                {recentRecords.map((record) => (
                  <li key={record.id}>
                    <div className="px-6 py-4 flex items-center">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate">{record.title}</p>
                        <div className="mt-1 flex items-center text-sm text-gray-500">
                          <span>{record.doctor}</span>
                          <span className="mx-1">•</span>
                          <span>{formatDate(record.date)}</span>
                        </div>
                      </div>
                      <div className="ml-6 flex-shrink-0 flex items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {record.type}
                        </span>
                        <button className="ml-3 text-gray-400 hover:text-gray-500">
                          <FileText className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-4 text-center">
                <Link to="/records" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  View all health records
                </Link>
              </div>
            </motion.div>
          </div>
        )}
        
        {activeTab === 'appointments' && (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
            <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Manage Appointments</h3>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <Calendar className="h-4 w-4 mr-2" />
                New Appointment
              </button>
            </div>
            <p className="p-6 text-gray-600">Appointment management interface would go here.</p>
          </div>
        )}
        
        {activeTab === 'records' && (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
            <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Health Records</h3>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <FileText className="h-4 w-4 mr-2" />
                Upload New Record
              </button>
            </div>
            <p className="p-6 text-gray-600">Health records management interface would go here.</p>
          </div>
        )}
        
        {activeTab === 'payments' && (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Bitcoin Lightning Payments</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Bitcoin className="h-8 w-8 text-orange-500 mr-3" />
                <div>
                  <h4 className="text-base font-medium text-gray-900">Quick, Secure Payments</h4>
                  <p className="text-sm text-gray-600">Pay for medical services using Bitcoin Lightning Network</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Pending payment for appointment with Dr. Michael Chen on June 20, 2025</p>
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600">
                <Bitcoin className="h-4 w-4 mr-2" />
                Pay with Bitcoin
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientPortal;