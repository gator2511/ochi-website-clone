import BlogArticleLayout from "@/components/BlogArticleLayout";
import content from "@/content/pages/blog-more-enquiries-without-more-ads.json";

const documentId = "content/pages/blog-more-enquiries-without-more-ads.json";

export default function MoreEnquiriesArticle() {
	return <BlogArticleLayout content={content} documentId={documentId} />;
}
