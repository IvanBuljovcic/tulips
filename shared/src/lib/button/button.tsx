import { ComponentPropsWithoutRef } from 'react';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  text: string;
};

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  text = 'Click me',
  ...props
}) => {
  return (
    <button className="border-primary-500 group relative border p-5">
      <span className="scale-100 transform overflow-hidden transition duration-75 group-hover:scale-0 group-hover:text-yellow-500">
        {text}
      </span>

      <span className="absolute inset-0 flex translate-y-full transform items-center justify-center p-4 pt-2 transition duration-75 hover:p-2 group-hover:translate-y-0 group-hover:text-red-500">
        {text}
      </span>
    </button>
  );
};
