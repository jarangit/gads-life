"use client";

import { useCallback, useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { transitions, typography, radius } from "@/components/ui";
import { createPublicFeedbackRequest } from "@/lib/api";

interface FooterFeedbackModalProps {
  open: boolean;
  onClose: () => void;
}

export function FooterFeedbackModal({ open, onClose }: FooterFeedbackModalProps) {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  const handleClose = useCallback(() => {
    if (isSubmitting) return;
    onClose();
  }, [isSubmitting, onClose]);

  useEffect(() => {
    if (!open) return;
    const handler = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, handleClose]);

  useEffect(() => {
    if (open) {
      setSubmitState("idle");
      setErrorText("");
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (message.trim().length < 10) {
      setSubmitState("error");
      setErrorText("กรุณาระบุรายละเอียดอย่างน้อย 10 ตัวอักษร");
      return;
    }

    setIsSubmitting(true);
    setSubmitState("idle");
    setErrorText("");

    try {
      await createPublicFeedbackRequest({
        type: "MORE_INFORMATION",
        subject: "Footer feedback",
        message: message.trim(),
        pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
      });

      setSubmitState("success");
      setMessage("");
    } catch {
      setSubmitState("error");
      setErrorText("ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label="แจ้งปัญหาหรือขอรีวิวสินค้า"
    >
      <div
        className={`absolute inset-0 bg-black/40 ${transitions.colorsNormal}`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        className={`relative w-full max-w-lg bg-white shadow-2xl ${radius["2xl"]} border border-gray-200 p-5 md:p-6`}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className={`${typography.weight.semibold} ${typography.size.lg} text-gray-900`}>
              แจ้งปัญหา / ขอรีวิว
            </h3>
            <p className={`${typography.size.caption} text-gray-500 mt-1`}>
              กรอกรายละเอียดอย่างเดียวได้เลย ที่เหลือระบบจัดการให้อัตโนมัติ
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            aria-label="ปิดหน้าต่าง"
          >
            <FiX className="text-lg" />
          </button>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="footer-feedback-message" className={`${typography.size.caption} text-gray-700`}>
              รายละเอียด
            </label>
            <textarea
              id="footer-feedback-message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              minLength={10}
              maxLength={5000}
              required
              rows={5}
              placeholder="แจ้งปัญหา หรือบอกสินค้าที่อยากให้รีวิว"
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm text-gray-800 outline-none focus:border-gray-500"
            />
          </div>

          {submitState === "success" && (
            <p className={`${typography.size.caption} text-green-700`}>ส่งข้อมูลเรียบร้อย ขอบคุณสำหรับคำแนะนำ</p>
          )}
          {submitState === "error" && (
            <p className={`${typography.size.caption} text-red-700`}>{errorText}</p>
          )}

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 disabled:opacity-60"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
