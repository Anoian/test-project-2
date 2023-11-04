import BootshausLogo from "@assets/BootshausLogo";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Wrapper = styled(Box)`
  display: flex;
  height: min(354px, 40vw);
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

function HeaderImage() {
  return (
    <Wrapper>
      <BootshausLogo />
    </Wrapper>
  );
}

export { HeaderImage };
