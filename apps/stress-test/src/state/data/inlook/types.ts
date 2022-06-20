export type InlookFolder = {
  id: string;
  label: string;
  icon: string;
};

export type InlookMessage = {
  id: string;
  from: string;
  fromEmail: string;
  to: string[];
  toEmail: string[];
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
  folders: InlookFolder[];
  messages: Record<string, InlookMessage[]>;
};
