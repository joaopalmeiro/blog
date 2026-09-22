export interface Post {
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
  {
    id: "using-epson-perfection-v39ii-scanner-ubuntu",
    title: "Using the Epson Perfection V39 II scanner on Ubuntu",
    description: "How to install the required software to start scanning files.",
    createdAt: "2026-06-09",
  },
  {
    id: "clearing-kiro-sessions-logs",
    title: "Clearing Kiro sessions and logs on macOS",
    description: "A command to quickly delete all data.",
    createdAt: "2026-09-22",
  },
];
