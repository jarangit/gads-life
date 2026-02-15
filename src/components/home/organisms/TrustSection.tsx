import React from "react";
import { FiCheck } from "react-icons/fi";
import { BsBullseye, BsGem } from "react-icons/bs";
import { TrustCard } from "@/components/ui";

export function TrustSection() {
  return (
    <div className="space-y-3">
      <TrustCard
        icon={<FiCheck className="text-brand" />}
        title="ใช้จริง รีวิวจริง"
        description="ไม่ได้มาจากสเปก"
        variant="dark"
        radius="rounded-[1.5rem] rounded-tr-[2.5rem]"
      />
      <TrustCard
        icon={<BsBullseye className="text-orange-500" />}
        title="เลือกง่าย"
        description="สรุปให้แล้ว แค่เลือก"
      />
      <TrustCard
        icon={<BsGem className="text-purple-500" />}
        title="ไม่มีสปอนเซอร์"
        description="มีแค่ affiliate link"
        radius="rounded-[1.5rem] rounded-bl-[2.5rem]"
      />
    </div>
  );
}
