import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import sidebarBg from "../../assets/bg2.jpg";
import { RiAdminLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import "./SideBar.scss";
import { Link, useNavigate } from "react-router-dom";

const SideBar = (props) => {
  const navigate = useNavigate();
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <RiAdminLine size={"2em"} color={"00bfff"} />
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Nippon Zukan
            </span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<MdDashboard />}>
              Dashboard
              <Link to="/admins" />
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<MdOutlineFeaturedVideo />} title="Features">
              <MenuItem>
                Quản lý Users
                <Link to="/admins/manage-users" />
              </MenuItem>
              <MenuItem>
                Quản lý Bài Quiz
                <Link to="/admins/manage-quizzes" />
              </MenuItem>

              <MenuItem>
                Quản lý Câu Hỏi
                <Link to="/admins/manage-questions" />
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="#"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                &#169; Nippon Zukan
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
