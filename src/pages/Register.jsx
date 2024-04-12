import { Helmet, HelmetProvider } from "react-helmet-async";

import RegisterForm from "../components/RegistrationForm/RegistrationForm";

export default function Register() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </div>
    </HelmetProvider>
  );
}
