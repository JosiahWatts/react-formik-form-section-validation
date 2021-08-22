import { Formik } from "formik";
import Address from "./Address";
import Profile from "./Profile";
import "./styles.css";
import * as Yup from "yup";
import { addressSection, profileSection } from "./section-map";
import FormStatus from "./FormStatus";

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email("invalid email").required(),
  street: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required()
});

export default function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ ...profileSection, ...addressSection }}
        validationSchema={schema}
        validateOnBlur={true}
        validateOnChange={false}
      >
        <div>
          <h1>Section Validation</h1>
          <FormStatus />
          <div>
            <h4>Profile</h4>
            <Profile />
          </div>
          <hr style={{ margin: "2rem 0" }} />
          <div>
            <h4>Address</h4>
            <Address />
          </div>
          <button style={{ marginTop: "2rem" }} type="submit">
            Submit
          </button>
        </div>
      </Formik>
    </div>
  );
}
