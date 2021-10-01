import { FC, jsx } from 'qx';
import { MainVisualSection, NavigationBar } from '~/web/sections';

export const IndexPage: FC = () => (
  <div>
    <NavigationBar />
    <MainVisualSection />
  </div>
);
