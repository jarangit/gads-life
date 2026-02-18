import React from "react";
import { FiCheck } from "react-icons/fi";
import { BsBullseye, BsGem } from "react-icons/bs";
import { TrustCard, accentColors, bentoRadius } from "@/components/ui";

export function TrustSection() {
  return (
    <div className="space-y-3">
      <TrustCard
        icon={<FiCheck className="text-brand" />}
        title="ใช้จริง รีวิวจริง"
        description="ไม่ได้มาจากสเปก"
        variant="dark"
        radius={bentoRadius.trustTR}
      />
      <TrustCard
        icon={<BsBullseye className={accentColors.orange.icon} />}
        title="เลือกง่าย"
        description="สรุปให้แล้ว แค่เลือก"
      />
      <TrustCard
        icon={<BsGem className={accentColors.purple.text} />}
        title="ไม่มีสปอนเซอร์"
        description="มีแค่ affiliate link"
        radius={bentoRadius.trustBL}
      />
    </div>
  );
}
