import { http } from "@/lib/api/http";
import type {
  CreatePublicFeedbackRequestPayload,
  CreatePublicFeedbackRequestResponse,
} from "./types";

export async function createPublicFeedbackRequest(
  payload: CreatePublicFeedbackRequestPayload,
  signal?: AbortSignal,
): Promise<CreatePublicFeedbackRequestResponse> {
  return http<CreatePublicFeedbackRequestResponse>("/public/feedback-requests", {
    method: "POST",
    body: payload,
    signal,
  });
}
