
export interface Theme {
  name?: string;
  color?: string;
  backgroundColor?: string;
  colorSecondary?: string;
  backgroundColorSecondary?: string;
}

export interface Metadata {
  name?: string;
  content?: string;
}

export interface Content {
  title?: string;
  metadata?: Metadata[];
  sections?: Record<string, string>
}

export interface Section {
  title?: string;
  metadata?: Metadata[];
  type?: string;
  path?: string;
  pages?: Record<string, string>
}

export interface Page {
  title?: string;
  metadata?: Metadata[];
  type?: string;
  slots?: string[];
}

export interface Action {
  title: string;
  type: string;
}

export interface NavLink {
  title: string;
  href: string;
  links?: NavLink[];
}

export interface Slot {
  type?: string;
  content?: Record<string, any>;
  nav?: NavLink[];
  action?: NavLink | Action;
  slots?: Slot[];
}

export interface Info {
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