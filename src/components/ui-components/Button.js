import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";

const CustomButton = styled(LoadingButton)({
  background: "#00042d",
  border: 0,
  borderRadius: 0,
  color: "white",
  height: 35,
  width: "100%",
  padding: "9px 15px",
  fontFamily: "inherit",
  textTransform: "none",

  "&:hover": {
    backgroundColor: "#00042d",
  },
  "&:active": {
    backgroundColor: "#00042d",
  },
  "&:focus": {
    backgroundColor: "#00042d",
  },
});

const BaseButton = (props) => {
  return (
    <CustomButton
      variant={props.variant}
      loading={props.loading}
      onClick={props.onClick}
    >
      Pre-register
    </CustomButton>
  );
};

export default BaseButton;
