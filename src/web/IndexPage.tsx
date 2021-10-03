import { FC, jsx } from 'qx';
import {
  MainVisualSection,
  NavigationBar,
  IntroSection,
  AuthorSection,
  FeatureSection,
  IdeaSection,
  Footer,
} from '~/web/sections';

export const IndexPage: FC = () => (
  <div>
    <NavigationBar />
    <MainVisualSection />
    <IntroSection />
    <IdeaSection altBgColor />
    <FeatureSection />
    <AuthorSection altBgColor />
    <Footer />
  </div>
);
