import { FC, jsx } from 'alumina';
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
} from '~/sections';

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
