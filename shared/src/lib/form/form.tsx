import { SubmitHandler, useForm } from 'react-hook-form';

/* eslint-disable-next-line */
export interface FormProps {}

const Inputs = {
  email: {
    type: 'email',
    name: 'email',
    placeholder: 'Enter your email',
    validation: {
      reqired: 'email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'invalid email address',
      },
    },
  },
  password: {
    name: 'password',
    type: 'password',
    placeholder: 'Enter your password',
    validation: {
      required: true,
      // pattern for password minimum length 8, at least one uppercase letter, one lowercase letter, one number and one special character max length 21
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,21}$/,
        message: 'invalid password',
      }
    },
  },
} as const;

export function Form(props: FormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<typeof Inputs>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<typeof Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row items-start gap-2 @container/form"
    >
      {/* Map over the Inputs object and render inputs */}
      {Object.entries(Inputs).map(([key, value]) => (
        <div key={key} className="flex flex-col gap-1 @lg/form:bg-red-500 @md/form:bg-indigo-500">
          <label htmlFor={value.name}>{value.name}</label>
          <input
            {...register(value.name, value.validation)}
            type={value.type}
            placeholder={value.placeholder}
            className="border border-violet-500 p-2 xl:p-3"
            autoComplete="off"
          />
          {errors[value.name] && (
            <span className="text-red-500">{errors[value.name]?.message}</span>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
