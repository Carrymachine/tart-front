import { ContentContainer, SectionContainer } from "../../styles/contents/contents.style";
import HeadSection from "./headSection/index";
import BodySection from "./bodySection/index";

const renderContents = () => {
  return (
    <ContentContainer>
      <SectionContainer>
        <HeadSection />
      </SectionContainer>
      <SectionContainer>
        <BodySection />
      </SectionContainer>
    </ContentContainer>
  );
};

export default renderContents;
