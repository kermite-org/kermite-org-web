import { FC } from 'qx';

export type XFC<T extends {} = {}> = FC<T & { className?: string }>;
