import { testPeople, testSubjectLines, testMessageBodies, testTimestamps, testFolders } from './rawData';
import type { InlookDataGenerator, InlookFolder, InlookMessage } from './types';

const getValue = <T>(index: number, values: T[]): T => {
  return values[index % values.length] as T;
};

const folderIcons: Record<string, string> = {
  Inbox: 'Inbox',
  'Sent Items': 'Send',
  'Deleted Items': 'Delete',
};

export const generateFolders: (size?: number, folders?: string[]) => InlookFolder[] = (
  size = 200,
  folders = testFolders,
) => {
  const data = [] as InlookFolder[];

  for (let i = 0; i < size; i++) {
    const name = getValue(i, folders);
    const count = Math.floor(i / folders.length);

    const item = {} as InlookFolder;

    if (count > 0) {
      item.label = `${name} ${count + 1}`;
    } else {
      item.label = name;
    }

    item.icon = folderIcons[item.label] ?? 'FabricFolder';
    data.push(item);
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
