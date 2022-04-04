
import useToken from "./Hooks/useToken";

const UnauthenticatedApp = () => {
  const [setState] = useToken(true);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const { email, password } = evt.target.elements;

    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email.value.trim(),
        password: password.value.trim(),
      }),
    });

    const data = await res.json();

    if (data?.token) {
      setState(data?.token);
    }
  };

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <input className="email__input" name="email" defaultValue="eve.holt@reqres.in" />
      <input className="password__input" name="password" type={"password"} />

      <button className="login__btn" type={"submit"}>Submit</button>
    </form>
  );
};
export default UnauthenticatedApp;
