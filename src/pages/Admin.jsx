import React, { useState, useEffect } from 'react';
import { Users, Phone, MessageSquare, CreditCard } from 'lucide-react';

const Admin = () => {
    const [demoRequests, setDemoRequests] = useState([]);
    const [contactMessages, setContactMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const [demoRes, contactRes, usersRes, plansRes] = await Promise.all([
                    fetch('http://localhost:5000/api/admin/demo'),
                    fetch('http://localhost:5000/api/admin/contact'),
                    fetch('http://localhost:5000/api/admin/users'),
                    fetch('http://localhost:5000/api/admin/plans')
                ]);

                const [demoData, contactData, usersData, plansData] = await Promise.all([
                    demoRes.json(),
                    contactRes.json(),
                    usersRes.json(),
                    plansRes.json()
                ]);

                setDemoRequests(demoData);
                setContactMessages(contactData);
                setUsers(usersData);
                setPlans(plansData);
            } catch (error) {
                console.error("Error fetching admin data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAdminData();
    }, []);

    return (
        <div className="min-h-screen bg-brand-darker text-white p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-gradient flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xl leading-none">N</span>
                    </div>
                    Admin Dashboard
                </h1>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <div className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-brand-orange/30 transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-[40px] -mr-16 -mt-16 transition-all group-hover:bg-brand-orange/20"></div>
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div>
                                <h3 className="text-gray-400 font-medium mb-1">Demo Requests</h3>
                                <p className="text-4xl font-bold text-white">{loading ? '...' : demoRequests.length}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                <Phone className="text-orange-500" size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-brand-orange/30 transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] -mr-16 -mt-16 transition-all group-hover:bg-blue-500/20"></div>
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div>
                                <h3 className="text-gray-400 font-medium mb-1">Contact Msgs</h3>
                                <p className="text-4xl font-bold text-white">{loading ? '...' : contactMessages.length}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                <MessageSquare className="text-blue-500" size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-brand-orange/30 transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[40px] -mr-16 -mt-16 transition-all group-hover:bg-green-500/20"></div>
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div>
                                <h3 className="text-gray-400 font-medium mb-1">Total Users</h3>
                                <p className="text-4xl font-bold text-white">{loading ? '...' : users.length}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                                <Users className="text-green-500" size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-brand-orange/30 transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] -mr-16 -mt-16 transition-all group-hover:bg-purple-500/20"></div>
                        <div className="flex justify-between items-start mb-4 relative z-10">
                            <div>
                                <h3 className="text-gray-400 font-medium mb-1">Active Plans</h3>
                                <p className="text-4xl font-bold text-white">{loading ? '...' : plans.length}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                <CreditCard className="text-purple-500" size={24} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Data Tables */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

                    {/* Demo Requests Table */}
                    <div className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-xl overflow-hidden flex flex-col h-[500px]">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Phone size={20} className="text-brand-orange" /> Recent Demo Requests
                        </h2>
                        <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
                            <table className="w-full text-left border-collapse">
                                <thead className="sticky top-0 bg-brand-card z-10">
                                    <tr className="border-b border-white/10 text-gray-400 text-sm">
                                        <th className="pb-3 pr-4 font-medium">Date</th>
                                        <th className="pb-3 pr-4 font-medium">Name</th>
                                        <th className="pb-3 pr-4 font-medium">Business / Email</th>
                                        <th className="pb-3 font-medium text-right">Software</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {loading ? (
                                        <tr><td colSpan="4" className="py-8 text-center text-gray-500">Loading data...</td></tr>
                                    ) : demoRequests.length === 0 ? (
                                        <tr><td colSpan="4" className="py-8 text-center text-gray-500">No demo requests found.</td></tr>
                                    ) : (
                                        demoRequests.map((req, idx) => (
                                            <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                <td className="py-4 pr-4 whitespace-nowrap text-gray-400">
                                                    {new Date(req.createdAt).toLocaleDateString()}
                                                </td>
                                                <td className="py-4 pr-4">
                                                    <div className="font-medium text-white">{req.name}</div>
                                                    <div className="text-xs text-gray-500">{req.phone}</div>
                                                </td>
                                                <td className="py-4 pr-4">
                                                    <div className="text-white">{req.businessName}</div>
                                                    <div className="text-xs text-brand-orange">{req.email}</div>
                                                </td>
                                                <td className="py-4 text-right">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${req.softwareRequired === 'POS' ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' : 'bg-blue-500/10 text-blue-500 border border-blue-500/20'}`}>
                                                        {req.softwareRequired}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Contact Messages Table */}
                    <div className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-xl overflow-hidden flex flex-col h-[500px]">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <MessageSquare size={20} className="text-blue-500" /> Recent Contact Messages
                        </h2>
                        <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
                            <table className="w-full text-left border-collapse">
                                <thead className="sticky top-0 bg-brand-card z-10">
                                    <tr className="border-b border-white/10 text-gray-400 text-sm">
                                        <th className="pb-3 pr-4 font-medium">Date</th>
                                        <th className="pb-3 pr-4 font-medium">Sender</th>
                                        <th className="pb-3 font-medium">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {loading ? (
                                        <tr><td colSpan="3" className="py-8 text-center text-gray-500">Loading data...</td></tr>
                                    ) : contactMessages.length === 0 ? (
                                        <tr><td colSpan="3" className="py-8 text-center text-gray-500">No contact messages found.</td></tr>
                                    ) : (
                                        contactMessages.map((msg, idx) => (
                                            <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                <td className="py-4 pr-4 whitespace-nowrap text-gray-400 align-top">
                                                    {new Date(msg.date).toLocaleDateString()}
                                                </td>
                                                <td className="py-4 pr-4 align-top">
                                                    <div className="font-medium text-white">{msg.name}</div>
                                                    <div className="text-xs text-blue-400">{msg.email}</div>
                                                </td>
                                                <td className="py-4 text-gray-300">
                                                    <p className="line-clamp-2">{msg.message}</p>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Users Table */}
                    <div className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-xl overflow-hidden flex flex-col h-[500px]">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Users size={20} className="text-green-500" /> Registered Users
                        </h2>
                        <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
                            <table className="w-full text-left border-collapse">
                                <thead className="sticky top-0 bg-brand-card z-10">
                                    <tr className="border-b border-white/10 text-gray-400 text-sm">
                                        <th className="pb-3 pr-4 font-medium">Name</th>
                                        <th className="pb-3 pr-4 font-medium">Email</th>
                                        <th className="pb-3 font-medium text-right">Role</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {loading ? (
                                        <tr><td colSpan="3" className="py-8 text-center text-gray-500">Loading data...</td></tr>
                                    ) : users.length === 0 ? (
                                        <tr><td colSpan="3" className="py-8 text-center text-gray-500">No users found.</td></tr>
                                    ) : (
                                        users.map((user, idx) => (
                                            <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                <td className="py-4 pr-4 font-medium text-white">
                                                    {user.name}
                                                </td>
                                                <td className="py-4 pr-4 text-gray-400">
                                                    {user.email}
                                                </td>
                                                <td className="py-4 text-right">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.role === 'Admin' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-gray-500/10 text-gray-300 border border-gray-500/20'}`}>
                                                        {user.role}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Plans Table */}
                    <div className="bg-brand-card border border-white/5 rounded-2xl p-6 shadow-xl overflow-hidden flex flex-col h-[500px]">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <CreditCard size={20} className="text-purple-500" /> Pricing Plans
                        </h2>
                        <div className="overflow-y-auto flex-1 pr-2 custom-scrollbar">
                            <div className="grid grid-cols-1 gap-4">
                                {loading ? (
                                    <div className="py-8 text-center text-gray-500">Loading data...</div>
                                ) : plans.length === 0 ? (
                                    <div className="py-8 text-center text-gray-500">No plans found.</div>
                                ) : (
                                    plans.map((plan, idx) => (
                                        <div key={idx} className="bg-[#1A1A1A] border border-white/5 p-4 rounded-xl flex items-center justify-between">
                                            <div>
                                                <h4 className="font-bold text-white text-lg">{plan.name}</h4>
                                                <p className="text-xs text-gray-500 mt-1">{plan.features}</p>
                                            </div>
                                            <div className="bg-brand-gradient text-white px-4 py-2 rounded-lg font-bold">
                                                ₹{plan.price}/mo
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Admin;
