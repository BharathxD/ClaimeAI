import { motion } from "framer-motion";
import { AlertCircle, Check, CircleSlash, Info, X } from "lucide-react";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import type { Verdict } from "@/lib/event-schema";
import { cn } from "@/lib/utils";

interface VerdictBadgeProps {
  verdict: Verdict;
}

const getBadgeVariant = (result: string): BadgeProps["variant"] => {
  switch (result) {
    case "Supported":
      return "success-subtle";
    case "Refuted":
      return "destructive-subtle";
    case "Insufficient Information":
      return "warning-subtle";
    case "Conflicting Evidence":
      return "outline-subtle";
    default:
      return "secondary";
  }
};

const getIcon = (result: string) => {
  switch (result) {
    case "Supported":
      return <Check className="mr-1 size-3.5 mt-px flex-shrink-0" />;
    case "Refuted":
      return <CircleSlash className="mr-1 size-3.5 mt-px flex-shrink-0" />;
    case "Insufficient Information":
      return <Info className="mr-1 size-3.5 mt-px flex-shrink-0" />;
    case "Conflicting Evidence":
      return <AlertCircle className="mr-1 size-3.5 mt-px flex-shrink-0" />;
    default:
      return null;
  }
};

export const VerdictBadge = ({ verdict }: VerdictBadgeProps) => (
  <Badge
    className={cn("flex w-fit items-center justify-center rounded-xl pl-1 pr-2 py-0.5 text-[11px]")}
    variant={getBadgeVariant(verdict.result)}
  >
    {getIcon(verdict.result)}
    <motion.span
      animate={{ opacity: 1, x: 0 }}
      className="truncate"
      initial={{ opacity: 0, x: -2 }}
      transition={{ duration: 0.2 }}
    >
      {verdict.result}
    </motion.span>
  </Badge>
);
