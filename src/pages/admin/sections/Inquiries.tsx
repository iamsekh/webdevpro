import React, { useState } from 'react';
import { Mail, Star, Trash2 } from 'lucide-react';

interface Inquiry {
  id: number;
  name: string;
  email: string;
  service: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied';
  starred: boolean;
}

const Inquiries = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      service: 'Web Development',
      message: 'I need a website for my business...',
      date: '2024-03-15',
      status: 'new',
      starred: false
    }
  ]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  const handleStarInquiry = (id: number) => {
    setInquiries(inquiries.map(inquiry =>
      inquiry.id === id ? { ...inquiry, starred: !inquiry.starred } : inquiry
    ));
  };

  const handleDeleteInquiry = (id: number) => {
    setInquiries(inquiries.filter(inquiry => inquiry.id !== id));
    if (selectedInquiry?.id === id) {
      setSelectedInquiry(null);
    }
  };

  const handleSelectInquiry = (inquiry: Inquiry) => {
    setSelectedInquiry(inquiry);
    if (inquiry.status === 'new') {
      setInquiries(inquiries.map(i =>
        i.id === inquiry.id ? { ...i, status: 'read' } : i
      ));
    }
  };

  return (
    <div className="h-full flex">
      <div className="w-1/3 border-r bg-white">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Inquiries</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-10rem)]">
          {inquiries.map(inquiry => (
            <div
              key={inquiry.id}
              onClick={() => handleSelectInquiry(inquiry)}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                selectedInquiry?.id === inquiry.id ? 'bg-indigo-50' : ''
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{inquiry.name}</h3>
                <div className="flex items-center space-x-2">
                  {inquiry.status === 'new' && (
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      New
                    </span>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStarInquiry(inquiry.id);
                    }}
                    className={`${inquiry.starred ? 'text-yellow-400' : 'text-gray-400'} hover:text-yellow-400`}
                  >
                    <Star className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 truncate">{inquiry.message}</p>
              <p className="text-xs text-gray-500 mt-1">{inquiry.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white p-6">
        {selectedInquiry ? (
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{selectedInquiry.name}</h2>
                <p className="text-gray-600">{selectedInquiry.email}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleStarInquiry(selectedInquiry.id)}
                  className={`p-2 rounded-full ${
                    selectedInquiry.starred ? 'text-yellow-400' : 'text-gray-400'
                  } hover:bg-gray-100`}
                >
                  <Star className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleDeleteInquiry(selectedInquiry.id)}
                  className="p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-500">Service Requested:</span>
                <span className="ml-2 text-sm text-gray-900">{selectedInquiry.service}</span>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Message:</span>
                <p className="mt-2 text-gray-900">{selectedInquiry.message}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Reply</h3>
              <textarea
                rows={6}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Type your reply..."
              ></textarea>
              <div className="mt-4 flex justify-end">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            <div className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <p>Select an inquiry to view details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inquiries;