export const numberValidation = {
  required: "This field is required",
  pattern: {
    value: /^\d+(\.\d{1,2})?$/,
    message: "Please enter a valid number with up to 2 decimal places (e.g. 123.45)"
  },
  min: {
    value: 0.1,
    message: "Minimum value is 0.1",
  },
  max: {
    value: 1000,
    message: "Maximum value is 1000",
  },
  validate: (value) => {
    if (value === "") {
      return "This field is required";
    }
    
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      return "Please enter a valid number";
    }
    
    if (numValue < 0.1) {
      return "Minimum value is 0.1";
    }
    
    if (numValue > 1000) {
      return "Maximum value is 1000";
    }
    
    return true;
  },
};
