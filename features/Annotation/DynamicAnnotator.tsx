"use client"

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

const DynamicAnnotator = dynamic(() => import("@/features/Annotation/Annotator"), {
  ssr: false,
});

const InitMap = () => {
  const mapContainer = useRef<any>(null);

  return (
    <>
      <DynamicAnnotator />
    </>
  );
};

export default InitMap;