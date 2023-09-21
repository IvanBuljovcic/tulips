import { ComponentPropsWithoutRef } from 'react';
import styles from './button.module.css';
import classNames from 'classnames';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  text = 'Click me',
  ...props
}) => {
  return (
    <button className="group border border-primary-500 p-5 relative">
      <span className="transition duration-75 scale-100 transform group-hover:text-yellow-500 group-hover:scale-0 overflow-hidden">
        {text}
      </span>

      <span className="flex items-center justify-center transition duration-75 absolute transform translate-y-full inset-0 group-hover:text-red-500 group-hover:translate-y-0">
        {text}
      </span>
    </button>
  );
};
