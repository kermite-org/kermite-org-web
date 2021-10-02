import { FC } from 'qx';

export type XFC<T extends {} = {}> = FC<T & { className?: string }>;

export type SectionFC = XFC<{ altBgColor?: boolean }>;
