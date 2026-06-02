'use client';

import { useState } from 'react';
import { projects } from '@/data/projects';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  const [teamSize, setTeamSize] = useState('6');
  const [nameInput, setNameInput] = useState('');
  const [showPersonal, setShowPersonal] = useState(false);

  if (!project) {
    return <div className="p-8">找不到此項目</div>;
  }

  // 簡單的分工資料（之後會擴充）
  const divisions: Record<string, any[]> = {
    '4': [
      { role: 'A', task: '步驟 2 + 步驟 4 協助' },
      { role: 'B', task: '步驟 3 + 步驟 4 協助' },
      { role: 'C', task: '步驟 5 + 步驟 6' },
      { role: 'D', task: '材料運送 + 步驟 1 + 步驟 7 協助' },
    ],
    '5': [
      { role: '指揮（隊長）', task: '整體指揮、對位、檢查穩固度' },
      { role: 'A', task: '步驟 2 + 步驟 4' },
      { role: 'B', task: '步驟 3 + 步驟 4' },
      { role: 'C', task: '步驟 5' },
      { role: 'D', task: '步驟 6 + 步驟 7 測試' },
    ],
    '6': [
      { role: '指揮（隊長）', task: '整體指揮、對位、檢查穩固度' },
      { role: 'A、B', task: '分別負責步驟 2 及步驟 3' },
      { role: 'C、D', task: '負責步驟 5（可同時進行）' },
      { role: 'E', task: '步驟 6（鋪設橋面）' },
      { role: 'F', task: '材料支援 + 步驟 1 + 步驟 7 協助' },
    ],
  };

  const currentDivision = divisions[teamSize] || [];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <div className="flex gap-3 text-sm mb-8">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">{project.difficulty}</span>
        <span>{project.people}</span>
        <span>{project.time}</span>
      </div>

      {/* 材料清單 */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">材料清單</h2>
        <div className="bg-white border rounded-xl p-6 text-sm">
          直木（A 字架）×4、橫木×7、繩索 35-40 米、木樁×4
        </div>
      </div>

      {/* 人數選擇 + 分工 */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">分工建議</h2>
          <select 
            value={teamSize} 
            onChange={(e) => setTeamSize(e.target.value)}
            className="border px-4 py-2 rounded-xl"
          >
            <option value="4">4 人小隊</option>
            <option value="5">5 人小隊</option>
            <option value="6">6 人小隊</option>
          </select>
        </div>

        <div className="bg-white border rounded-2xl p-6 space-y-3">
          {currentDivision.map((item, index) => (
            <div key={index} className="flex justify-between border-b pb-3 last:border-none last:pb-0">
              <span className="font-medium">{item.role}</span>
              <span className="text-gray-600">{item.task}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 輸入名字查看個人任務 */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">查看個人任務</h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="輸入你的名字"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className="flex-1 border px-4 py-3 rounded-xl"
          />
          <button 
            onClick={() => setShowPersonal(true)}
            className="px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            查看我的任務
          </button>
        </div>

        {showPersonal && nameInput && (
          <div className="mt-4 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
            <p className="font-medium mb-2">你好，{nameInput}！</p>
            <p className="text-gray-700">（目前示範版本，之後會根據名字顯示你負責的時段與任務）</p>
          </div>
        )}
      </div>

      <div className="text-sm text-gray-500">
        ※ 此為示範版本，詳細步驟與時序將在下一階段加入
      </div>
    </div>
  );
}
