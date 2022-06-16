import { testPeople, testSubjectLines, testMessageBodies, testTimestamps, testFolders } from './rawData';
import type { InlookDataGenerator, InlookMessage } from './types';

const getValue = <T>(index: number, values: T[]): T => {
  return values[index % values.length] as T;
};

export const generateFolders: (size?: number, folders?: string[]) => string[] = (size = 200, folders = testFolders) => {
  const data = [] as string[];
  // const dataCounts = new Map<string, number>();

  for (let i = 0; i < size; i++) {
    let name = getValue(i, folders);
    const count = Math.floor(i / folders.length);
    if (count > 0) {
      data.push(`${name} ${count + 1}`);
    } else {
      data.push(name);
    }
    // const count = dataCounts.get(name);
    // if (count !== undefined) {
    //   name = `${name} ${count}`;
    //   dataCounts.set(name, count + 1);
    // } else {
    //   dataCounts.set(name, 2);
    // }

    // data.push(name);
  }

  return data;
};

export const generateMessages: InlookDataGenerator = (
  size = 1000,
  people = testPeople,
  subjectLines = testSubjectLines,
  messageBodies = testMessageBodies,
  messageTimestamps = testTimestamps,
) => {
  const data = [] as InlookMessage[];

  for (let i = 0; i < size; i++) {
    data.push({
      from: getValue(i, people),
      to: [getValue(i + 1, people)],
      subject: getValue(i, subjectLines),
      message: getValue(i, messageBodies),
      timestamp: getValue(i, messageTimestamps),
    });
  }

  return data;
};
