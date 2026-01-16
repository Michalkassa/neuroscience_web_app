
export interface AssignmentType {
  id : string,
  title: string,    
  module: string,
  dueDate: Date
}
export interface prevState{
  message: string;
  success: boolean;   
}
export interface FeedbackFormSubmissionType { 
    id: string;
    lecture: string;
    rating: number;
    feedback: string;
}

export interface BookType{
  id: string;
  title: string;
  author: string;
  module: string;
  bookIcon?: string;
  url: string; 
};