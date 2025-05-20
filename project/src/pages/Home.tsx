import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Bitcoin, Heart, FileText, Video } from 'lucide-react';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Healthcare Reimagined with Bitcoin
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Accessible telemedicine powered by Bitcoin's Lightning Network, with secure, patient-controlled health records.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
                Create Account
              </Link>
              <Link to="/about" className="bg-white hover:bg-gray-100 text-blue-800 px-6 py-3 rounded-md font-medium transition-colors">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose MediBit?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Bitcoin className="w-10 h-10 text-orange-500" />}
              title="Bitcoin Payments"
              description="Fast, low-cost payments with Bitcoin's Lightning Network, perfect for areas with limited banking access."
            />
            <FeatureCard 
              icon={<Shield className="w-10 h-10 text-blue-600" />}
              title="Private Health Records"
              description="Your health data is encrypted and stored on IPFS, giving you complete control over who can access it."
            />
            <FeatureCard 
              icon={<Video className="w-10 h-10 text-teal-500" />}
              title="Telemedicine Access"
              description="Connect with healthcare providers remotely, reducing travel and making healthcare more accessible."
            />
            <FeatureCard 
              icon={<Heart className="w-10 h-10 text-red-500" />}
              title="Patient-Centered Care"
              description="Our platform is designed with your needs in mind, making healthcare simpler and more accessible."
            />
            <FeatureCard 
              icon={<FileText className="w-10 h-10 text-purple-600" />}
              title="Secure Prescriptions"
              description="Receive and manage digital prescriptions securely, with privacy and convenience."
            />
            <FeatureCard 
              icon={<Shield className="w-10 h-10 text-green-600" />}
              title="Data Ownership"
              description="You own your health data. Control who sees it and for how long, with complete transparency."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join thousands of patients and healthcare providers who are already benefiting from MediBit's innovative approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/patient" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Patient Portal
            </Link>
            <Link to="/doctor" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Healthcare Provider Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all"
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default Home;