import { SearchBar } from "@components/SearchBar";
import { ViewSwitcher } from "@components/ViewSwitcher";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(calc(100vw - 40px), 1600px);
`;

function GridListViewTopBar() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Typography variant="h1">{t("ticketsForBootshaus")}</Typography>
      <div>
        <SearchBar />
        <ViewSwitcher />
      </div>
    </Wrapper>
  );
}

export { GridListViewTopBar };
