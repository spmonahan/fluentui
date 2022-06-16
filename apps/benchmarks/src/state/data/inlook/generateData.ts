import { testPeople, testSubjectLines, testMessageBodies, testTimestamps, testFolders } from './data';

export type Message = {
  from: string;
  to: string[];
  subject: string;
  message: string;
  timestamp: number;
};

export type InlookDataGenerator = (
  size?: number,
  people?: string[],
  subjectLines?: string[],
  messageBodies?: string[],
  messageTimestamps?: number[],
) => Message[];

export const generateData: InlookDataGenerator = (
  size = 1000,
  people = testPeople,
  subjectLines = testSubjectLines,
  messageBodies = testMessageBodies,
  messageTimestamps = testTimestamps,
) => {
  return [];
};
