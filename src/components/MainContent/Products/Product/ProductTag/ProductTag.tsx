// ProductTag.tsx
import { FC } from 'react';
import s from '../Product.module.css';

interface Props {
  label: string;
  color?: string;
}

export const ProductTag: FC<Props> = ({ label, color }) => {
  return (
    <span className={s.productTag} style={{ backgroundColor: color || '#999' }}>
      {label}
    </span>
  );
};
