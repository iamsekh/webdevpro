import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Mail, 
  Settings,
  Briefcase,
  LogOut
} from 'lucide-react';
import BlogPosts from './sections/BlogPosts';
import TeamMembers from './sections/TeamMembers';
import Inquiries from './sections/Inquiries';
import Projects from './sections/Projects';
import Overview from './sections/Overview';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-6">
          <Link to="/admin" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <LayoutDashboard className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          <Link to="/admin/inquiries" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Mail className="h-5 w-5 mr-3" />
            Inquiries
          </Link>
          <Link to="/admin/projects" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Briefcase className="h-5 w-5 mr-3" />
            Projects
          </Link>
          <Link to="/admin/blog" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <FileText className="h-5 w-5 mr-3" />
            Blog Posts
          </Link>
          <Link to="/admin/team" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Users className="h-5 w-5 mr-3" />
            Team
          </Link>
          <Link to="/admin/settings" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100">
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </Link>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/blog/*" element={<BlogPosts />} />
          <Route path="/team/*" element={<TeamMembers />} />
          <Route path="/inquiries" element={<Inquiries />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;