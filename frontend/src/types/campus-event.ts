export type Category = 
  | 'Seminer' 
  | 'Atölye' 
  | 'Yarışma' 
  | 'Yazılım' 
  | 'Kariyer' 
  | 'Tasarım' 
  | 'Spor' 
  | 'Müzik' 
  | 'Diğer'
  | string;

export interface CampusEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: Category;
  capacity: number;
  description: string;
  image?: string;
}

export interface EventFormData {
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  description: string;
  image?: string;
}

export type EventFormErrors = {
  [K in keyof EventFormData]?: string;
};