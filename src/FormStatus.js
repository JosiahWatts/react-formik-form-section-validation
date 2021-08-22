import { useFormikContext } from "formik";
import React, { useMemo } from "react";
import { addressSection, profileSection } from "./section-map";
import useSectionValidation from "./useSectionValidation";

function FormStatus() {
  const { errors, touched } = useFormikContext();
  const sections = useMemo(() => [profileFormSection, addressFormSection], []);

  const [validatedSections] = useSectionValidation(sections, touched, errors);

  return (
    <ul>
      {validatedSections.map((x) => (
        <li key={x.value}>
          {x.label} | {x.status}
        </li>
      ))}
    </ul>
  );
}

export default FormStatus;

const profileFormSection = {
  label: "Profile",
  value: "profile",
  fields: Object.keys(profileSection),
  status: "default"
};

const addressFormSection = {
  label: "Address",
  value: "address",
  fields: Object.keys(addressSection),
  status: "default"
};
