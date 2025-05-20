import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Upload, Lock, Shield, Download, EyeOff, CheckCircle } from 'lucide-react';

// Mock data for demo
const healthRecords = [
  {
    id: 1,
    title: 'Blood Test Results',
    doctor: 'Dr. Sarah Johnson',
    date: '2025-05-20',
    type: 'Lab Results',
    access: 'Only You',
    size: '2.4 MB',
    encrypted: true
  },
  {
    id: 2,
    title: 'Annual Physical Examination',
    doctor: 'Dr. Robert Smith',
    date: '2025-04-15',
    type: 'Clinical Notes',
    access: 'You + Dr. Johnson',
    size: '1.8 MB',
    encrypted: true
  },
  {
    id: 3,
    title: 'Chest X-Ray',
    doctor: 'Dr. Michael Chen',
    date: '2025-03-10',
    type: 'Imaging',
    access: 'Only You',
    size: '8.2 MB',
    encrypted: true
  },
  {
    id: 4,
    title: 'Prescription - Atorvastatin',
    doctor: 'Dr. Sarah Johnson',
    date: '2025-05-20',
    type: 'Prescription',
    access: 'You + Dr. Johnson + Pharmacy',
    size: '1.2 MB',
    encrypted: true
  },
  {
    id: 5,
    title: 'Allergy Test Results',
    doctor: 'Dr. Jennifer Lee',
    date: '2025-02-05',
    type: 'Lab Results',
    access: 'Only You',
    size: '3.5 MB',
    encrypted: true
  }
];

const HealthRecords = () => {
  const [view, setView] = useState<'list' | 'grid'>('list');
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<number | null>(null);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const filteredRecords = healthRecords.filter(record => {
    // Apply type filter
    if (filter !== 'all' && record.type !== filter) return false;
    
    // Apply search filter
    if (searchQuery && !record.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Health Records</h1>
          <p className="text-blue-100">Your encrypted health data, accessible only by you</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Controls and Actions */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 mb-6">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-lg font-medium text-gray-900 mb-4 md:mb-0">Your Encrypted Records</h2>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New Record
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <Lock className="h-4 w-4 mr-2 text-gray-500" />
                  Manage Access
                </button>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Search */}
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search records..."
                  className="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Filter */}
              <select
                className="block w-full sm:w-auto pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="Lab Results">Lab Results</option>
                <option value="Clinical Notes">Clinical Notes</option>
                <option value="Imaging">Imaging</option>
                <option value="Prescription">Prescriptions</option>
              </select>
              
              {/* View Toggle */}
              <div className="bg-gray-100 rounded-md p-1 flex">
                <button
                  className={`px-3 py-1.5 text-sm font-medium rounded-md ${
                    view === 'list' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'
                  }`}
                  onClick={() => setView('list')}
                >
                  List View
                </button>
                <button
                  className={`px-3 py-1.5 text-sm font-medium rounded-md ${
                    view === 'grid' ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'
                  }`}
                  onClick={() => setView('grid')}
                >
                  Grid View
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Health Records Display */}
        {view === 'list' ? (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
            <ul className="divide-y divide-gray-200">
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                  <motion.li 
                    key={record.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`hover:bg-gray-50 transition-colors ${selectedRecord === record.id ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedRecord(record.id === selectedRecord ? null : record.id)}
                  >
                    <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center cursor-pointer">
                      <div className="flex-shrink-0 mb-4 sm:mb-0">
                        <div className={`p-2 rounded-md ${record.type === 'Lab Results' ? 'bg-green-100' : record.type === 'Clinical Notes' ? 'bg-blue-100' : record.type === 'Imaging' ? 'bg-purple-100' : 'bg-orange-100'}`}>
                          <FileText className={`h-6 w-6 ${record.type === 'Lab Results' ? 'text-green-600' : record.type === 'Clinical Notes' ? 'text-blue-600' : record.type === 'Imaging' ? 'text-purple-600' : 'text-orange-600'}`} />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 sm:ml-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900 truncate">{record.title}</p>
                            <div className="mt-1 flex items-center text-xs text-gray-500">
                              <span>{record.doctor}</span>
                              <span className="mx-1">•</span>
                              <span>{formatDate(record.date)}</span>
                              <span className="mx-1">•</span>
                              <span>{record.type}</span>
                            </div>
                          </div>
                          <div className="mt-2 sm:mt-0 flex items-center">
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                              <Lock className="mr-1 h-3 w-3" />
                              {record.access}
                            </span>
                            <div className="ml-4 flex space-x-2">
                              <button className="text-gray-400 hover:text-gray-500">
                                <Download className="h-5 w-5" />
                              </button>
                              <button className="text-gray-400 hover:text-gray-500">
                                <EyeOff className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expanded view for selected record */}
                    {selectedRecord === record.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="px-6 py-4 bg-blue-50 border-t border-blue-100"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="text-xs font-medium text-gray-500 uppercase">Document Details</h4>
                            <ul className="mt-2 space-y-2 text-sm">
                              <li className="flex items-center text-gray-700">
                                <span className="w-24 flex-shrink-0 text-gray-500">Type:</span>
                                <span>{record.type}</span>
                              </li>
                              <li className="flex items-center text-gray-700">
                                <span className="w-24 flex-shrink-0 text-gray-500">Size:</span>
                                <span>{record.size}</span>
                              </li>
                              <li className="flex items-center text-gray-700">
                                <span className="w-24 flex-shrink-0 text-gray-500">Uploaded:</span>
                                <span>{formatDate(record.date)}</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-xs font-medium text-gray-500 uppercase">Security & Access</h4>
                            <ul className="mt-2 space-y-2 text-sm">
                              <li className="flex items-center text-gray-700">
                                <span className="w-24 flex-shrink-0 text-gray-500">Encryption:</span>
                                <span className="flex items-center text-green-600">
                                  <Shield className="h-4 w-4 mr-1" />
                                  <span>AES-256</span>
                                </span>
                              </li>
                              <li className="flex items-center text-gray-700">
                                <span className="w-24 flex-shrink-0 text-gray-500">Access:</span>
                                <span>{record.access}</span>
                              </li>
                              <li className="flex items-center text-gray-700">
                                <span className="w-24 flex-shrink-0 text-gray-500">Storage:</span>
                                <span>IPFS (Decentralized)</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-xs font-medium text-gray-500 uppercase">Actions</h4>
                            <div className="mt-2 flex flex-col space-y-2">
                              <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                <Download className="h-4 w-4 mr-2" />
                                Download Record
                              </button>
                              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                <Lock className="h-4 w-4 mr-2 text-gray-500" />
                                Manage Access
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.li>
                ))
              ) : (
                <div className="px-6 py-10 text-center">
                  <FileText className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">No records found matching your criteria.</p>
                  <button 
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    onClick={() => { setFilter('all'); setSearchQuery(''); }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </ul>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecords.length > 0 ? (
              filteredRecords.map((record) => (
                <motion.div
                  key={record.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className={`h-2 ${record.type === 'Lab Results' ? 'bg-green-500' : record.type === 'Clinical Notes' ? 'bg-blue-500' : record.type === 'Imaging' ? 'bg-purple-500' : 'bg-orange-500'}`}></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className={`p-2 rounded-md ${record.type === 'Lab Results' ? 'bg-green-100' : record.type === 'Clinical Notes' ? 'bg-blue-100' : record.type === 'Imaging' ? 'bg-purple-100' : 'bg-orange-100'}`}>
                        <FileText className={`h-6 w-6 ${record.type === 'Lab Results' ? 'text-green-600' : record.type === 'Clinical Notes' ? 'text-blue-600' : record.type === 'Imaging' ? 'text-purple-600' : 'text-orange-600'}`} />
                      </div>
                      <div className="flex items-center">
                        {record.encrypted && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            <Shield className="mr-1 h-3 w-3" />
                            Encrypted
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="mt-4 text-base font-medium text-gray-900">{record.title}</h3>
                    <div className="mt-2 text-xs text-gray-500">
                      <p>{record.doctor}</p>
                      <p className="mt-1">{formatDate(record.date)}</p>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-gray-500">{record.size}</span>
                      <div className="flex space-x-2">
                        <button className="text-gray-400 hover:text-gray-500">
                          <Download className="h-5 w-5" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-500">
                          <Lock className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 px-6 py-10 text-center">
                <FileText className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">No records found matching your criteria.</p>
                <button 
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  onClick={() => { setFilter('all'); setSearchQuery(''); }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Privacy Information */}
        <div className="mt-8 bg-blue-50 shadow-sm rounded-lg overflow-hidden border border-blue-100 p-6">
          <div className="flex items-start">
            <Shield className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Your Privacy is Our Priority</h3>
              <p className="mt-2 text-sm text-gray-600">
                All your health records are encrypted using AES-256 encryption and stored on IPFS. Only you control who can access your data, and for how long. Your encryption keys are secured using your Bitcoin signature, ensuring only you can grant or revoke access.
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>End-to-end encrypted</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Decentralized storage</span>
                </div>
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Patient-controlled access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthRecords;