import { Field, useFormikContext } from "formik";
import React from "react";

function Address() {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <div>
        <Field type="text" name="street" placeholder="Address" />
        {errors.street && touched.street ? (
          <small>{errors.street}</small>
        ) : null}
      </div>
      <div>
        <Field type="text" name="city" placeholder="City" />
        {errors.city && touched.city ? <small>{errors.city}</small> : null}
      </div>
      <div>
        <Field type="text" name="state" placeholder="State" />
        {errors.state && touched.state ? <small>{errors.state}</small> : null}
      </div>
    </div>
  );
}

export default Address;
