import { FC, jsx } from 'qx';
import {
  MainVisualSection,
  NavigationBar,
  IntroSection,
  AuthorSection,
  FeatureSection,
  IdeaSection,
  Footer,
  DownloadSection,
  UsageSection,
} from '~/web/sections';

export const IndexPage: FC = () => (
  <div>
    <NavigationBar />
    <MainVisualSection />
    <IntroSection />
    <IdeaSection altBgColor />
    <FeatureSection />
    <DownloadSection altBgColor />
    <AuthorSection />
    <UsageSection altBgColor />
    <Footer />
  </div>
);
