interface Post {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  lastUpdatedAt?: string;
}

export const posts: Post[] = [
  {
    id: "hardening-vscode-extensions",
    title: "Hardening VS Code extensions",
    description: "My approach to managing VS Code extensions.",
    createdAt: "2026-05-31",
  },
];
