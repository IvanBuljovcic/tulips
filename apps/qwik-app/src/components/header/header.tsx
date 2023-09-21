import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
import { Button } from '@tulips/ui';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo bg-yellow-500">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a
            href="https://qwik.builder.io/docs/components/overview/"
            target="_blank"
          >
            Docs
          </a>
        </li>

        <li>
          <Button text="IM IN QWIK" />
        </li>

        <li>
          <a
            href="https://qwik.builder.io/examples/introduction/hello-world/"
            target="_blank"
          >
            Examples
          </a>
        </li>
        <li>
          <a
            href="https://qwik.builder.io/tutorial/welcome/overview/"
            target="_blank"
          >
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
