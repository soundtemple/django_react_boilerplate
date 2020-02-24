import React from "react";
import { FormikConsumer } from "formik";

export const Debug = () => (
  <div
    style={{
      margin: "3rem 0",
      borderRadius: 4,
      boxShadow: "0 0 1px  #eee inset"
    }}
  >
    <div
      style={{
        textTransform: "uppercase",
        fontSize: 14,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        fontWeight: 500,
        padding: ".5rem",
        letterSpacing: "1px"
      }}
    >
      Formik State
    </div>
    <FormikConsumer>
      {({ validationSchema, validate, onSubmit, ...rest }) => (
        <pre
          style={{
            fontSize: ".95rem",
            padding: ".25rem .5rem",
            overflowX: "scroll",
            textAlign: "left"
          }}
        >
          {JSON.stringify(rest, null, 2)}
        </pre>
      )}
    </FormikConsumer>
  </div>
);
