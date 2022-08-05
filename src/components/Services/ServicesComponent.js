import { Divider, styled, Typography } from "@mui/material";

const TitleCustom = styled(Typography)(({ theme }) => ({
  position: "relative",
  "&:after": {
    position: "absolute",
    content: '""',
    background: "#1A6B96",
    width: 100,
    height: 5,
    bottom: -20,
    borderRadius: 4,
    left: "50%",
    transform: "translateX(-50%)",
  },
}));
const ServicesComponent = () => {
  return (
    <>
      <TitleCustom variant="h4" fontWeight="700" align="center" mt={8}>
        DỊCH VỤ
      </TitleCustom>
      <Typography variant="h5" fontWeight="700">
        Bảo dưỡng định kì
      </Typography>
      <Divider />
    </>
  );
};
export default ServicesComponent;
