import NavDropdown from "react-bootstrap/NavDropdown";
import { useTranslation } from "react-i18next";

const Languages = (props) => {
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <NavDropdown
        title={i18n.language === "VIE" ? "VIE" : "ENG"}
        id="basic-nav-dropdown2"
        className="languages"
      >
        <NavDropdown.Item onClick={() => handleChangeLanguage("en")}>
          ENG
        </NavDropdown.Item>
        <NavDropdown.Item onClick={() => handleChangeLanguage("vi")}>
          VIE
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
};

export default Languages;
