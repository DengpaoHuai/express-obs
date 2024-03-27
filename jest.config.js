module.exports = {
  preset: "@shelf/jest-mongodb",
  testEnvironment: "node",
  roots: ["<rootDir>"],
  testMatch: ["**/*.spec.ts", "**/*.test.ts"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json", // Assurez-vous que ce chemin est correct
    },
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
