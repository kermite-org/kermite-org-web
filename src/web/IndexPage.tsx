import { FC, jsx } from 'qx';
import { MainVisualSection, NavigationBar } from '~/web/sections';
import { AboutSection } from '~/web/sections/AboutSection';
import { FeatureSection } from '~/web/sections/FeatureSection';
import { IdeaSection } from '~/web/sections/IdeaSection';

export const IndexPage: FC = () => (
  <div>
    <NavigationBar />
    <MainVisualSection />
    <AboutSection />
    <IdeaSection altBgColor />
    <FeatureSection />
  </div>
);
