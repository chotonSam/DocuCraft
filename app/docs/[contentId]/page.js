import ContentDisplay from "@/components/ContentDisplay";

const ContentPage = async ({ params }) => {
  const { contentId } = await params;
  return <ContentDisplay id={contentId} />;
};

export default ContentPage;
