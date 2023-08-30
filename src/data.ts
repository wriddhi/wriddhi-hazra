export const roles = ["admin", "user", "guest"] as const;

export const privileges = ["create", "read", "update", "delete"] as const;

export interface Permission {
  [key: string]: (typeof privileges)[number][];
}

interface User {
  name: string;
  role: (typeof roles)[number];
  privileges: Permission;
}

const user: User = {
  name: "John Doe",
  role: "admin",
  privileges: {
    articles: ["create", "read", "update", "delete"],
    comments: ["create", "read", "update", "delete"],
    users: ["create", "read", "update", "delete"],
  },
};
