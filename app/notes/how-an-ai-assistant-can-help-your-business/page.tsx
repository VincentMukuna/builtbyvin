import {
  AiAssistantArticle,
  getArticleMetadata,
} from "../what-an-ai-assistant-can-do-for-your-business/article";

export const metadata = getArticleMetadata("kenya");

export default function KenyaArticlePage() {
  return <AiAssistantArticle market="kenya" />;
}
