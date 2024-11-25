import React, { useState } from 'react';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  email: string;
  imageUrl: string;
  bio: string;
}

const TeamMembers = () => {
  const [members, setMembers] = useState<TeamMember[]>([
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      email: 'sarah@webdevpro.com',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300',
      bio: 'Tech enthusiast with 10+ years of experience in web development.'
    }
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMember, setCurrentMember] = useState<TeamMember | null>(null);

  const handleAddMember = () => {
    setIsEditing(true);
    setCurrentMember({
      id: Date.now(),
      name: '',
      position: '',
      email: '',
      imageUrl: '',
      bio: ''
    });
  };

  const handleEditMember = (member: TeamMember) => {
    setIsEditing(true);
    setCurrentMember(member);
  };

  const handleDeleteMember = (id: number) => {
    setMembers(members.filter(member => member.id !== id));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMember) {
      if (members.find(member => member.id === currentMember.id)) {
        setMembers(members.map(member => member.id === currentMember.id ? currentMember : member));
      } else {
        setMembers([...members, currentMember]);
      }
      setIsEditing(false);
      setCurrentMember(null);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Team Members</h1>
        <button
          onClick={handleAddMember}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Member
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSave} className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={currentMember?.name}
                onChange={e => setCurrentMember({ ...currentMember!, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                value={currentMember?.position}
                onChange={e => setCurrentMember({ ...currentMember!, position: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={currentMember?.email}
                onChange={e => setCurrentMember({ ...currentMember!, email: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="url"
                value={currentMember?.imageUrl}
                onChange={e => setCurrentMember({ ...currentMember!, imageUrl: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                value={currentMember?.bio}
                onChange={e => setCurrentMember({ ...currentMember!, bio: e.target.value })}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map(member => (
            <div key={member.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-indigo-600">{member.position}</p>
                <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
                <div className="mt-4 flex justify-end space-x-2">
                  <button
                    onClick={() => handleEditMember(member)}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDeleteMember(member.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamMembers;