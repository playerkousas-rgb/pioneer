export interface Project {
  slug: string;
  title: string;
  difficulty: string;
  people: string;
  time: string;
  description: string;
  suitableFor: string[];
}

export const projects: Project[] = [
  {
    slug: "simple-bridge",
    title: "簡易 A 字橋",
    difficulty: "中級",
    people: "4-6 人",
    time: "60-90 分鐘",
    description: "適合營地過溪、活動示範使用，搭建相對簡單。",
    suitableFor: ["營地過溪", "活動示範", "橋樑訓練"],
  },
];
