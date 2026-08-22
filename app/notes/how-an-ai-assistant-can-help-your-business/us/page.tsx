import {
  AiAssistantArticle,
  getArticleMetadata,
} from "../../what-an-ai-assistant-can-do-for-your-business/article";

export const metadata = getArticleMetadata("us");

export default function UnitedStatesArticlePage() {
  return <AiAssistantArticle market="us" />;
}
