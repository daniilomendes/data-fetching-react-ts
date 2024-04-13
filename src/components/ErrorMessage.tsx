type ErrorMessageProps = {
  text: string;
};

export default function ErrorMessage({ text }: ErrorMessageProps) {
  return (
    <aside id="error">
      <h1>Um erro ocorreu!</h1>
      <p>{text}</p>
    </aside>
  );
}
