import React from "react";

function useSectionValidation(sections, touchedFields, formErrors) {
  const [validatedSections, setValidatedSections] = React.useState(sections);

  const validateSection = (section, touched, errors) => {
    let errorCount = 0;
    let touchCount = 0;

    for (let i = 0; i <= touched.length - 1; i++) {
      if (section.fields.includes(touched[i])) {
        touchCount++;

        if (errors.includes(touched[i])) {
          errorCount++;
        }
      }
    }

    if (errorCount > 0) {
      section.status = "invalid";
    } else if (errorCount < 1 && touchCount === section.fields.length) {
      section.status = "valid";
    } else {
      section.status = "default";
    }
  };

  const valdateSections = React.useCallback(
    (sections) => {
      const validated = [...sections];
      const touchedKeys = Object.keys(touchedFields);
      const errorKeys = Object.keys(formErrors);

      validated.forEach((section) => {
        validateSection(section, touchedKeys, errorKeys);
      });

      setValidatedSections(validated);
    },
    [touchedFields, formErrors]
  );

  React.useEffect(() => {
    valdateSections(sections);
  }, [sections, valdateSections]);

  return [validatedSections];
}

export default useSectionValidation;
