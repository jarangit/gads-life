export type PublicFeedbackType =
  | "ISSUE"
  | "WRONG_INFORMATION"
  | "MORE_INFORMATION";

export interface CreatePublicFeedbackRequestPayload {
  type: PublicFeedbackType;
  name?: string;
  email?: string;
  subject?: string;
  message: string;
  pageUrl?: string;
}

export interface CreatePublicFeedbackRequestResponse {
  id: string;
  type: PublicFeedbackType;
  status: "NEW" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  createdAt: string;
}
