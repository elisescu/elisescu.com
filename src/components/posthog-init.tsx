"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

let posthogInitialized = false;

export function PostHogInit() {
  useEffect(() => {
    if (posthogInitialized) return;

    posthog.init("phc_OisA5lvLboCSR3VzYhqmXqNNQf0A91yybVKXMJiHNu5", {
      api_host: "https://eu.posthog.com",
    });

    posthogInitialized = true;
  }, []);

  return null;
}
