"use client";

import { useState, useEffect } from 'react';

interface Subscriber {
  email: string;
  timestamp: string;
}

export default function AdminPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await fetch('/api/admin/subscribers');
        const data = await response.json();

        if (response.ok) {
          setSubscribers(data.subscribers);
        } else {
          setError(data.error || 'Failed to load subscribers');
        }
      } catch (err) {
        setError('Network error. Please try again.');
        console.error('Error fetching subscribers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscribers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#031347] flex items-center justify-center">
        <div className="text-white text-xl">Loading subscribers...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#031347] flex items-center justify-center">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#031347] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Newsletter Subscribers</h1>

        <div className="mb-6 p-4 bg-[#0a1a5e] rounded-lg">
          <p className="text-lg"><strong>Total Subscribers:</strong> {subscribers.length}</p>
        </div>

        {subscribers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No subscribers yet</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#0a1a5e] rounded-lg">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((subscriber, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-[#0a1a5e]' : 'bg-[#08154a]'}
                  >
                    <td className="py-3 px-4">{subscriber.email}</td>
                    <td className="py-3 px-4">
                      {new Date(subscriber.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}