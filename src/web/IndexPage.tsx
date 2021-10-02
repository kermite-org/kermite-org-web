import { FC, jsx } from 'qx';
import { MainVisualSection, NavigationBar } from '~/web/sections';
import { AboutSection } from '~/web/sections/AboutSection';

export const IndexPage: FC = () => (
  <div>
    <NavigationBar />
    <MainVisualSection />
    <AboutSection />
  </div>
);
