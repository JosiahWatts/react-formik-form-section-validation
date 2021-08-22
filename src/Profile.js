import { Field, useFormikContext } from "formik";
import React from "react";

function Profile() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <Field type="text" name="firstName" placeholder="First" />
        {errors.firstName && touched.firstName ? (
          <small>{errors.firstName}</small>
        ) : null}
      </div>
      <div>
        <Field type="text" name="lastName" placeholder="Last" />
        {errors.lastName && touched.lastName ? (
          <small>{errors.lastName}</small>
        ) : null}
      </div>
      <div>
        <Field type="text" name="email" placeholder="Email" />
        {errors.email && touched.email ? <small>{errors.email}</small> : null}
      </div>
    </div>
  );
}

export default Profile;
