import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputBase from "@mui/material/InputBase";
import InputLabel, { inputLabelClasses } from "@mui/material/InputLabel";

const CustomInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
  },
  "& .MuiInputBase-root": {
    padding: 0,
  },
  "& .MuiInputBase-input": {
    border: "1px solid #ccc",
    borderColor: "#ccc",
    borderRadius: 0,
    color: "#333",
    height: "38px",
    width: "100%",
    padding: "0px 12px",
    fontFamily: "inherit",
    textTransform: "none",
    fontSize: "14px",
  },
}));

const CustomLabel = styled(InputLabel)({
  fontWeight: 600,
  color: "#030407",
  fontFamily: "inherit",
  fontSize: "18px",
  lineHeight: 1.2,

  [`&.${inputLabelClasses.shrink}`]: {
    color: "#030407",
  },
  "&:hover": {
    color: "#030407",
  },
  "&:active": {
    color: "#030407",
  },
  "&:focus": {
    color: "#030407",
  },
});

const Input = (props) => {
  return (
    <FormControl variant="standard">
      <CustomLabel shrink htmlFor={props.id}>
        {props.label}
      </CustomLabel>

      <CustomInput
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </FormControl>
  );
};

export default Input;
