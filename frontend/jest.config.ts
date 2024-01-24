import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    // SVG 파일을 모의 객체로 리다이렉트
    "\\.svg$": "<rootDir>/src/__mocks__/svgMock.cjs",
    "\\.css$": "<rootDir>/src/__mocks__/styleMock.cjs",
  },
};

export default config;
