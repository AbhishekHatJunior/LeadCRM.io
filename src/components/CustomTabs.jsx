import { Tabs, Tab } from "@mui/material";

const CustomTabs = ({ tabs, value, onChange }) => {
  return (
    <Tabs
      value={value}
      onChange={onChange}
      className="custom-tabs"
      variant="scrollable"
      scrollButtons="auto"
      TabIndicatorProps={{ style: { display: "none" } }}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={tab.id}
          label={
            <div className="tab-label-container">
              <img src={tab.icon} alt="" className={tab.id === 2 ? "tab2-icon" : "tab-icon"} />
              <span className="tab-label font-exo2 fw-600">{tab.label}</span>
            </div>
          }
          className={`custom-tab ${value === index ? "active" : ""}`}
        />
      ))}
    </Tabs>
  );
};

export default CustomTabs;
