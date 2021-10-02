import { FC, jsx } from 'qx';
import {
  MainVisualSection,
  NavigationBar,
  AboutSection,
  AuthorSection,
  FeatureSection,
  IdeaSection,
} from '~/web/sections';

export const IndexPage: FC = () => (
  <div>
    <NavigationBar />
    <MainVisualSection />
    <AboutSection />
    <IdeaSection altBgColor />
    <FeatureSection />
    <AuthorSection altBgColor />
  </div>
);
