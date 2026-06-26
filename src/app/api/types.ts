
export interface AssignmentType {
  id : string,
  title: string,
  moduleName: string,
  dueDate: Date,
  isSummative: boolean,
  weight: number | null,
  topics: string | null,
  assessmentStyle: string | null,
  expectedFeedback: string | null,
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
  moduleName: string;
  url: string | null;
  icon: string | null;

};