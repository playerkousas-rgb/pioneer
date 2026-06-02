import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">先鋒工程指南</h1>
        <p className="text-gray-600 mt-2">選擇適合你活動的紮作項目</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link 
            key={project.slug} 
            href={`/projects/${project.slug}`}
            className="block p-6 border rounded-2xl hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <span className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                {project.difficulty}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex gap-4 text-sm text-gray-500">
              <div>{project.people}</div>
              <div>{project.time}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
