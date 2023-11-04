import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function ViewSwitcher() {
  const { t } = useTranslation();
  return (
    <div>
      <Typography>{t("view")}</Typography>
    </div>
  );
}

export { ViewSwitcher };
