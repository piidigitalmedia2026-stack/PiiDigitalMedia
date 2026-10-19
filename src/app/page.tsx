import React from "react";
import { IS_COMING_SOON } from "@/data/content";
import { ComingSoonView } from "@/components/ComingSoonView";
import FullHomePage from "./page.full";

export default function Page() {
  if (IS_COMING_SOON) {
    return <ComingSoonView />;
  }

  return <FullHomePage />;
}
