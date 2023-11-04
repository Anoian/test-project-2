import { SearchBar } from "@components/SearchBar";
import { ViewSwitcher } from "@components/ViewSwitcher";
import { useTranslation } from "react-i18next";

function GridListViewTopBar() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="title">{t("ticketsForBootshaus")}</div>
      <SearchBar />
      <ViewSwitcher />
    </div>
  );
}

export { GridListViewTopBar };
