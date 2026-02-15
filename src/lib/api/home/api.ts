import { http } from "@/lib/api/http";
import { IHomeResponse } from "./type";

export function fetchHome(): Promise<IHomeResponse> {
  return http("/public/home");
}
