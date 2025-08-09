// hooks/use-plan-access.js
import { useAuth } from "@clerk/nextjs";

export function usePlanAccess() {
  const { has } = useAuth();

  // Everything is free now - no pro plan needed
  const isPro = false;
  const isFree = true;

  // All tools are available for free
  const planAccess = {
    resize: true,
    crop: true,
    adjust: true,
    text: true,
    background: true,
    ai_extender: true,
    ai_edit: true,
  };

  // Helper function to check if user has access to a specific tool
  const hasAccess = (toolId) => {
    return planAccess[toolId] === true;
  };

  // Get restricted tools that user doesn't have access to
  const getRestrictedTools = () => {
    return []; // No restricted tools - everything is free
  };

  // Check if user has reached project limits
  const canCreateProject = (currentProjectCount) => {
    return true; // Unlimited projects for free
  };

  // Check if user has reached export limits
  const canExport = (currentExportsThisMonth) => {
    return true; // Unlimited exports for free
  };

  return {
    userPlan: "free_user",
    isPro,
    isFree,
    hasAccess,
    planAccess,
    getRestrictedTools,
    canCreateProject,
    canExport,
  };
}
