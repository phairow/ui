
interface Theme {
  name?: string;
  color?: string;
  backgroundColor?: string;
}

interface Metadata {
  name?: string;
  content?: string;
}

interface Content {
  title?: string;
  metadata?: Metadata[];
  sections?: Record<string, string>
}

interface Section {
  title?: string;
  metadata?: Metadata[];
  type?: string;
  path?: string;
  pages?: Record<string, string>
}

interface Page {
  title?: string;
  metadata?: Metadata[];
  type?: string;
  slots?: string[];
}

interface Slot {
  type?: string;
  slots?: Slot[];
}

interface Info {
  theme?: Theme;
  content?: Content;
  sections?: Record<string, Section>;
  pages?: Record<string, Page>;
  slots?: Record<string, Slot>;
}

export interface AppInfo {
  name?: string;
  info?: Info
}