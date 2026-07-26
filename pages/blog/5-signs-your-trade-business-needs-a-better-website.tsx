import BlogArticleLayout from "@/components/BlogArticleLayout";
import content from "@/content/pages/blog-tradie-website.json";

const documentId = "content/pages/blog-tradie-website.json";

export default function TradieWebsiteArticle() {
	return <BlogArticleLayout content={content} documentId={documentId} />;
}
