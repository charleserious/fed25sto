import { FormEvent } from "react";

import style from "./NewsLetter.module.css";

interface NewsLetterProps {
  isSilverBulletEnabled: boolean;
}

const NewsLetter = ({ isSilverBulletEnabled }: NewsLetterProps) => {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);
    const payload = {
      event: "subscribe_form_submitted",
      cta: "subscribe",
      variant: !isSilverBulletEnabled ? "control" : "variant",
      ...Object.fromEntries(data),
    };

    console.log(payload);
  };
  return (
    <form
      action="#"
      onSubmit={submitHandler}
      aria-label="Subscribe our news letter"
      className={style.newsletter}
    >
      <p className={style.newsletter__description}>
        Subscribe to our newsletter to get the newest and the best practices
        around A/B testing.
      </p>
      <label htmlFor="email" className={style.newsletter__email_label}>
        Email
      </label>
      <input
        className={style.newsletter__email_input}
        type="email"
        id="email"
        name="email"
        placeholder="anonymous@example.com"
        role="textbox"
        autoComplete="email"
        required
      />
      <button type="submit" className={style.newsletter__submit}>
        Subscribe
      </button>
    </form>
  );
};

export default NewsLetter;
