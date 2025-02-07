import Image from "next/image";
import React from "react";

const applications = [
  { id: 1, name: "Amazon Clone", description: "A clone of the Amazon website", url: "http://localhost:3001" },
];

const AppCard: React.FC<{ app: { id: number; name: string; description: string, url: string } }> = ({ app }) => (
  <div className="border rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{app.name}</h2>
    <p className="text-gray-600">{app.description}</p>
    <a href={app.url} className="text-blue-500 hover:text-blue-700">Visit</a>
  </div>
);

const AppList: React.FC = () => (
  <div className="mx-auto p-8 bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
    <div className="container mx-auto">
    <h1 className="text-4xl font-extrabold text-white mb-8 text-center">Applications Portal</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {applications.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </div>
    </div>
  </div>
);

const Page: React.FC = () => {
  return (
    <AppList />
  );
};

export default Page;
