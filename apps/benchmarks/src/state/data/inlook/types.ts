export type InlookFolder = {
  label: string;
  icon: string;
};

export type InlookMessage = {
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
) => InlookMessage[];

export type InlookState = {
  folders: string[];
  messages: Record<string, InlookMessage[]>;
};
