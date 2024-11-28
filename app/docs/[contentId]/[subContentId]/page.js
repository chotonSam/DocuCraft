import ContentDisplay from "@/components/ContentDisplay";

const SubContentPage = async ({ params }) => {
  const { subContentId } = await params;

  return <ContentDisplay id={subContentId} />;
};

export default SubContentPage;
