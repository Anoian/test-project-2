import { HeaderImage } from "@components/HeaderImage";
import { GridListViewTopBar } from "@components/GridListViewTopBar";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
`;

function EventsOverview() {
  return (
    <Wrapper>
      <HeaderImage />
      <GridListViewTopBar />
    </Wrapper>
  );
}

export { EventsOverview };
