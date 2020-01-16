import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import "../../App.css";

interface DropdownInterface {
  sortingFunction: (key: string) => void;
}

const StyledButton = withStyles({
  root: {
    border: "2px solid #111d5e",
    padding: "12px",
    borderRadius: "12px",
    fontSize: "16px",
    marginTop: "8px",
    cursor: "pointer",
    width: "100px"
  }
})(Button);

export default function Dropdown(props: DropdownInterface) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { sortingFunction } = props;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const { t } = useTranslation();

  const handleClose = (key: string) => {
    sortingFunction(key);
    setAnchorEl(null);
  };
  return (
    <div>
      <StyledButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="changeStyleButton"
      >
        {t('Sort.1')}
      </StyledButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("asc")}>{t('Sort.2')}</MenuItem>
        <MenuItem onClick={() => handleClose("desc")}>
          {t('Sort.3')}
        </MenuItem>
        <MenuItem onClick={() => handleClose("ascName")}>
        {t('Sort.4')}
        </MenuItem>
        <MenuItem onClick={() => handleClose("descName")}>
        {t('Sort.5')}
        </MenuItem>
      </Menu>
    </div>
  );
}
