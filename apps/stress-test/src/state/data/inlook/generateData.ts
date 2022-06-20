import { testPeople, testSubjectLines, testMessageBodies, testTimestamps, testFolders } from './rawData';
import type { InlookDataGenerator, InlookFolder, InlookMessage } from './types';
import { v4 as uuid } from 'uuid';

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
    item.id = uuid();
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
  const offset = Math.floor(Math.random() * 10);

  for (let i = 0; i < size; i++) {
    const j = offset + i;
    const from = getValue(j, people);
    const to = [getValue(j + 1, people)];
    data.push({
      id: uuid(),
      from,
      fromEmail: `${from.replace(' ', '.')}@example.com`,
      to,
      toEmail: to.map(name => `${name.replace(' ', '.')}@example.com`),
      subject: getValue(j, subjectLines),
      message: getValue(j, messageBodies),
      timestamp: getValue(j, messageTimestamps),
    });
  }

  return data;
};
