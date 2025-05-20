import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, User, Plus, X, ChevronLeft, ChevronRight, Search, Bitcoin } from 'lucide-react';

// For demo purposes
const mockAppointments = [
  {
    id: 1,
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    date: '2025-06-15',
    time: '10:30 AM',
    type: 'Video Consultation',
    status: 'Confirmed',
    price: 0.0005,
    consultationLink: 'https://zoom.us/j/1234567890'
  },
  {
    id: 2,
    doctorName: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    date: '2025-06-20',
    time: '2:00 PM',
    type: 'Video Consultation',
    status: 'Pending Payment',
    price: 0.0008,
    consultationLink: ''
  },
  {
    id: 3,
    doctorName: 'Dr. Robert Smith',
    specialty: 'General Practitioner',
    date: '2025-06-25',
    time: '9:15 AM',
    type: 'Video Consultation',
    status: 'Confirmed',
    price: 0.0004,
    consultationLink: 'https://zoom.us/j/0987654321'
  }
];

const doctorsList = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    rating: 4.9,
    availableToday: true,
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    rating: 4.8,
    availableToday: false,
    image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrician',
    rating: 4.9,
    availableToday: true,
    image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 4,
    name: 'Dr. Robert Smith',
    specialty: 'General Practitioner',
    rating: 4.7,
    availableToday: true,
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 5,
    name: 'Dr. Lisa Wong',
    specialty: 'Neurologist',
    rating: 4.9,
    availableToday: false,
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
];

const Appointments = () => {
  const [view, setView] = useState('upcoming');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');
  const [specialty, setSpecialty] = useState('all');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleNewAppointment = () => {
    setView('new');
  };

  const handleSelectDoctor = (doctorId) => {
    setSelectedDoctor(doctorId);
    setView('booking');
  };

  const handleBackToSearch = () => {
    setSelectedDoctor(null);
    setSelectedTime(null);
    setView('new');
  };

  const handleBackToUpcoming = () => {
    setView('upcoming');
    setSelectedDoctor(null);
    setSelectedTime(null);
    setSearchQuery('');
    setSpecialty('all');
  };

  const handleJoinConsultation = (link) => {
    if (!link) {
      setError('No consultation link available for this appointment.');
      return;
    }
    window.open(link, '_blank');
  };

  const generateTimeSlots = () => {
    const times = [];
    for (let hour = 9; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hourFormatted = hour % 12 || 12;
        const minuteFormatted = minute.toString().padStart(2, '0');
        times.push(`${hourFormatted}:${minuteFormatted} ${ampm}`);
      }
    }
    return times;
  };

  const timeSlots = generateTimeSlots();

  const filteredDoctors = doctorsList.filter(doctor => {
    if (specialty !== 'all' && doctor.specialty !== specialty) return false;
    if (searchQuery && !doctor.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const selectedDoctorInfo = doctorsList.find(doctor => doctor.id === selectedDoctor);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">Appointments</h1>
          <p className="text-blue-100">Schedule and manage your healthcare consultations</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* View Controls */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 mb-6">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900 mb-4 sm:mb-0">
                {view === 'upcoming' && 'Your Appointments'}
                {view === 'new' && 'Find a Healthcare Provider'}
                {view === 'booking' && 'Schedule an Appointment'}
              </h2>
              
              {view === 'upcoming' && (
                <button
                  onClick={handleNewAppointment}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Appointment
                </button>
              )}
              
              {view === 'new' && (
                <button
                  onClick={handleBackToUpcoming}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Appointments
                </button>
              )}
              
              {view === 'booking' && (
                <button
                  onClick={handleBackToSearch}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Search
                </button>
              )}
            </div>
            
            {view === 'new' && (
              <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Search */}
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search by doctor name..."
                    className="block w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                {/* Specialty Filter */}
                <select
                  className="block w-full sm:w-auto pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                >
                  <option value="all">All Specialties</option>
                  <option value="Cardiologist">Cardiology</option>
                  <option value="Dermatologist">Dermatology</option>
                  <option value="Pediatrician">Pediatrics</option>
                  <option value="General Practitioner">General Practice</option>
                  <option value="Neurologist">Neurology</option>
                </select>
                
                {/* Availability Filter */}
                <select
                  className="block w-full sm:w-auto pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="any">Any Availability</option>
                  <option value="today">Available Today</option>
                  <option value="week">Available This Week</option>
                </select>
              </div>
            )}
          </div>
        </div>
        
        {/* Upcoming Appointments View */}
        {view === 'upcoming' && (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
            <div className="divide-y divide-gray-200">
              {mockAppointments.length > 0 ? (
                mockAppointments.map((appointment) => (
                  <motion.div
                    key={appointment.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-medium text-gray-900">{appointment.doctorName}</h4>
                        <p className="text-sm text-gray-500">{appointment.specialty}</p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          <span>{formatDate(appointment.date)}</span>
                          <span className="mx-1">•</span>
                          <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          <span>{appointment.time}</span>
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
                        <div className="mt-3 flex space-x-3">
                          {appointment.status === 'Pending Payment' && (
                            <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600">
                              <Bitcoin className="mr-1.5 h-4 w-4" />
                              Pay {appointment.price} BTC
                            </button>
                          )}
                          {appointment.status === 'Confirmed' && (
                            <button
                              onClick={() => handleJoinConsultation(appointment.consultationLink)}
                              className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                            >
                              <Video className="mr-1.5 h-4 w-4" />
                              Join Consultation
                            </button>
                          )}
                          <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            <X className="mr-1.5 h-4 w-4 text-gray-500" />
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="p-6 text-center">
                  <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No upcoming appointments</h3>
                  <p className="mt-1 text-sm text-gray-500">Get started by scheduling a consultation with a healthcare provider.</p>
                  <div className="mt-6">
                    <button
                      onClick={handleNewAppointment}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      New Appointment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Find Healthcare Provider View */}
        {view === 'new' && (
          <div className="space-y-6">
            {filteredDoctors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.map((doctor) => (
                  <motion.div
                    key={doctor.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
                    onClick={() => handleSelectDoctor(doctor.id)}
                  >
                    <div className="p-6">
                      <div className="flex items-center">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{doctor.name}</h3>
                          <p className="text-sm text-gray-500">{doctor.specialty}</p>
                          <div className="mt-1 flex items-center">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`h-4 w-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                              <span className="ml-1 text-sm text-gray-500">{doctor.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between items-center">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              doctor.availableToday
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}
                          >
                            {doctor.availableToday ? 'Available Today' : 'Next Availability: Tomorrow'}
                          </span>
                          <span className="text-sm text-blue-600">View Profile</span>
                        </div>
                        <button
                          className="mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                          onClick={() => handleSelectDoctor(doctor.id)}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Schedule Appointment
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200 p-6 text-center">
                <User className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No healthcare providers found</h3>
                <p className="mt-1 text-sm text-gray-500">Try adjusting your search criteria or specialty filter.</p>
                <div className="mt-6">
                  <button
                    onClick={() => { setSearchQuery(''); setSpecialty('all'); }}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Booking View */}
        {view === 'booking' && selectedDoctorInfo && (
          <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <img
                  src={selectedDoctorInfo.image}
                  alt={selectedDoctorInfo.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{selectedDoctorInfo.name}</h3>
                  <p className="text-sm text-gray-500">{selectedDoctorInfo.specialty}</p>
                  <div className="mt-1 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(selectedDoctorInfo.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-sm text-gray-500">{selectedDoctorInfo.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Calendar */}
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-4">Select a Date</h4>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => {
                          const prevMonth = new Date(selectedDate);
                          prevMonth.setMonth(prevMonth.getMonth() - 1);
                          setSelectedDate(prevMonth);
                        }}
                        className="p-1 rounded-full hover:bg-gray-200"
                      >
                        <ChevronLeft className="h-5 w-5 text-gray-500" />
                      </button>
                      <h5 className="text-sm font-medium text-gray-900">
                        {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                      </h5>
                      <button
                        onClick={() => {
                          const nextMonth = new Date(selectedDate);
                          nextMonth.setMonth(nextMonth.getMonth() + 1);
                          setSelectedDate(nextMonth);
                        }}
                        className="p-1 rounded-full hover:bg-gray-200"
                      >
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-2">
                      <div>Su</div>
                      <div>Mo</div>
                      <div>Tu</div>
                      <div>We</div>
                      <div>Th</div>
                      <div>Fr</div>
                      <div>Sa</div>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 35 }).map((_, i) => {
                        const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i - selectedDate.getDay() + 1);
                        const isCurrentMonth = date.getMonth() === selectedDate.getMonth();
                        const isToday = new Date().toDateString() === date.toDateString();
                        const isSelected = selectedDate.toDateString() === date.toDateString();
                        
                        return (
                          <button
                            key={i}
                            className={`p-2 text-center text-sm rounded-md ${
                              !isCurrentMonth
                                ? 'text-gray-300 cursor-not-allowed'
                                : isSelected
                                ? 'bg-blue-600 text-white'
                                : isToday
                                ? 'bg-blue-100 text-blue-800'
                                : 'hover:bg-gray-200 text-gray-700'
                            }`}
                            disabled={!isCurrentMonth}
                            onClick={() => setSelectedDate(date)}
                          >
                            {date.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
                
                {/* Time Slots */}
                <div>
                  <h4 className="text-base font-medium text-gray-900 mb-4">
                    Available Times for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((time) => {
                      const isAvailable = Math.random() > 0.3;
                      return (
                        <button
                          key={time}
                          className={`py-2 px-3 text-center text-sm rounded-md border ${
                            !isAvailable
                              ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                              : selectedTime === time
                              ? 'border-blue-600 bg-blue-50 text-blue-800'
                              : 'border-gray-200 hover:border-blue-600 hover:bg-blue-50 text-gray-700'
                          }`}
                          disabled={!isAvailable}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Appointment Details and Confirmation */}
              {selectedTime && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 border-t border-gray-200 pt-6"
                >
                  <h4 className="text-base font-medium text-gray-900 mb-4">Appointment Details</h4>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-gray-500">Provider</p>
                        <p className="text-sm font-medium text-gray-900">{selectedDoctorInfo.name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="text-sm font-medium text-gray-900">
                          { Glycosylation.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Time</p>
                        <p className="text-sm font-medium text-gray-900">{selectedTime}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Appointment Type */}
                  <div className="mb-6">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Consultation Type</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label className="flex p-4 border border-blue-600 rounded-lg bg-blue-50 cursor-pointer">
                        <input
                          type="radio"
                          name="consultationType"
                          value="video"
                          className="sr-only"
                          defaultChecked
                        />
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <Video className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Video Consultation</p>
                            <p className="text-xs text-gray-500">Meet with your provider online</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  {/* Reason for Visit */}
                  <div className="mb-6">
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Visit
                    </label>
                    <textarea
                      id="reason"
                      rows={3}
                      className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Briefly describe your symptoms or reason for consultation"
                    ></textarea>
                  </div>
                  
                  {/* Payment Details */}
                  <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Bitcoin className="h-5 w-5 text-orange-500 mr-2" />
                        <span className="text-sm font-medium">Payment with Bitcoin Lightning</span>
                      </div>
                      <span className="text-sm font-medium">0.0005 BTC</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Fast, low-cost payment with no banking required. You'll pay when your appointment is confirmed.
                    </p>
                  </div>
                  
                  {/* Confirmation Button */}
                  <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-3">
                    <button
                      className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      onClick={handleBackToSearch}
                    >
                      Cancel
                    </button>
                    <button
                      className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                      onClick={handleBackToUpcoming}
                    >
                      Confirm Appointment
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )}
        
        {/* Error Notification */}
        {error && (
          <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
            <p>{error}</p>
            <button
              onClick={() => setError(null)}
              className="absolute top-0 right-0 px-2 py-1 text-red-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;