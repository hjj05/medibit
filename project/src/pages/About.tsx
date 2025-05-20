import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Shield, FileText, Heart, Video, Database } from 'lucide-react';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About MediBit
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              MediBit was created with a mission to make healthcare accessible for all, using Bitcoin's Lightning Network and secure, private health records.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We dreamed of making healthcare accessible for all, especially in underserved areas with limited banking. Bitcoin's Lightning Network inspired us to enable fast, low-cost payments for telemedicine, while IPFS sparked the idea for patient-controlled, private health records.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Bitcoin className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bitcoin Lightning Network</h3>
              <p className="text-gray-600">
                By leveraging the Lightning Network, we enable instant, low-cost micropayments for healthcare services. This makes it possible for patients in underserved areas to access quality healthcare without traditional banking.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Database className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">IPFS for Health Records</h3>
              <p className="text-gray-600">
                Using the InterPlanetary File System (IPFS), we store encrypted health records in a decentralized way. This ensures data is always available while remaining secure and private.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Shield className="h-12 w-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Patient Data Ownership</h3>
              <p className="text-gray-600">
                We believe patients should own their health data. MediBit uses AES encryption and Bitcoin signatures to ensure only you control who can access your health records and for how long.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Video className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Telemedicine for All</h3>
              <p className="text-gray-600">
                Our platform connects patients with healthcare providers around the world through seamless video consultations, making quality healthcare accessible regardless of location.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Technology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              MediBit combines cutting-edge technologies to create a secure, private, and accessible healthcare platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TechCard
              icon={<Bitcoin className="h-10 w-10 text-orange-500" />}
              title="Bitcoin Lightning"
              description="Lightning Network for instant, low-cost payments without traditional banking."
              delay={0.2}
            />
            <TechCard
              icon={<Shield className="h-10 w-10 text-teal-500" />}
              title="AES Encryption"
              description="Military-grade encryption to keep health records private and secure."
              delay={0.3}
            />
            <TechCard
              icon={<Database className="h-10 w-10 text-blue-500" />}
              title="IPFS Storage"
              description="Decentralized storage ensuring health records are always available and controlled by patients."
              delay={0.4}
            />
            <TechCard
              icon={<Heart className="h-10 w-10 text-red-500" />}
              title="Patient-Centered Design"
              description="Intuitive interfaces designed for accessibility and ease of use."
              delay={0.5}
            />
            <TechCard
              icon={<Video className="h-10 w-10 text-purple-500" />}
              title="WebRTC Video"
              description="Secure, encrypted video consultations between patients and providers."
              delay={0.6}
            />
            <TechCard
              icon={<FileText className="h-10 w-10 text-indigo-500" />}
              title="Digital Prescriptions"
              description="Secure digital prescriptions with cryptographic verification."
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              MediBit was created by a team of passionate developers, healthcare professionals, and Bitcoin enthusiasts for the Bitcoin 2025 Hackathon.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Dr. Sarah Chen"
              role="Medical Director"
              description="Practicing physician with a passion for making healthcare accessible globally."
              delay={0.2}
            />
            <TeamMember
              name="Michael Rodriguez"
              role="Lead Developer"
              description="Bitcoin and Lightning Network specialist with experience in healthcare systems."
              delay={0.3}
            />
            <TeamMember
              name="Emma Johnson"
              role="Privacy & Security Lead"
              description="Cryptography expert focused on maintaining patient data privacy and security."
              delay={0.4}
            />
            <TeamMember
              name="David Okonkwo"
              role="Frontend Developer"
              description="UX/UI specialist with expertise in creating accessible healthcare interfaces."
              delay={0.5}
            />
            <TeamMember
              name="Sophia Patel"
              role="IPFS Specialist"
              description="Distributed systems engineer with a focus on decentralized health record storage."
              delay={0.6}
            />
            <TeamMember
              name="James Wilson"
              role="Healthcare Consultant"
              description="Healthcare administrator helping to align our technology with real-world needs."
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Join the Healthcare Revolution</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Experience the future of healthcare with MediBit. Sign up today and be part of the movement to make healthcare accessible for all.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                Create an Account
              </button>
              <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const TechCard = ({ icon, title, description, delay }: TechCardProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  delay: number;
}

const TeamMember = ({ name, role, description, delay }: TeamMemberProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
    >
      <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-2xl font-bold text-blue-600">{name.charAt(0)}</span>
      </div>
      <h3 className="text-lg font-semibold text-center mb-1 text-gray-900">{name}</h3>
      <p className="text-blue-600 text-sm text-center mb-3">{role}</p>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

export default About;