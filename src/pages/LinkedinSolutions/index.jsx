import { useState } from "react";
import { Container } from "react-bootstrap";
import CustomTabs from "../../components/CustomTabs";
import SolutionContent from "../../components/SolutionContent";
import RobbotImg from "../../assets/images/RobotImg.png"
import TabImg1 from "../../assets/images/TabImg1.png"
import TabImg2 from "../../assets/images/TabImg2.png"
import TabImg3 from "../../assets/images/TabImg3.png"
import TabImg4 from "../../assets/images/TabImg4.png"

import Tab1Img1 from "../../assets/images/Tab1Img1.png"
import Tab1Img2 from "../../assets/images/Tab1Img2.webp"
import Tab2Img1 from "../../assets/images/Tab2Img1.png"
import Tab2Img2 from "../../assets/images/Tab2Img2.png"
import Tab3Img1 from "../../assets/images/Tab3Img1.png"
import Tab3Img2 from "../../assets/images/Tab3Img2.png"
import Tab4Img1 from "../../assets/images/Tab4Img1.webp"
import Tab4Img2 from "../../assets/images/Tab4Img2.webp"


const tabData = [
    {
        id: 1,
        label: "CRM Data Enrichment",
        icon: TabImg1,
        content: {
            title: "It's hard to find the accurate contact data for every prospects by",
            badgeTxt: "Incomplete Data",

            heading1: "Here is how LeadCRM tackles that situation.",
            highlight1: "Try LeadCRM Data Enrichment",
            image1: Tab1Img1,
            link1: "https://www.leadcrm.io/lead-finder/",

            heading2: "If it does not works for you!",
            highlight2: "Try LeadCRM Data Enrichment",
            image2: Tab1Img2,
            cardColor: "blue",
            link2: "https://www.leadcrm.io/waterfall-data-enrichment/"
        },
    },
    {
        id: 2,
        label: "CRM Data Sync",
        icon: TabImg2,
        content: {
            title: "40+ hours lost to copy-paste. Every. Single. Month.",
            badgeTxt: "Lost Lead Context",

            heading1: "The Solution? LeadCRM's Instant Data Sync.",
            highlight1: "Try LeadCRM Data Sync",
            image1: Tab2Img1,
            link1: "https://www.leadcrm.io/linkedin-to-crm-data-sync/",

            heading2: "Unlock instant CRM insights on every profile you visit.",
            highlight2: "Try LeadCRM Data Overlay",
            image2: Tab2Img2,
            cardColor: "yellow",
            link2: "https://www.leadcrm.io/crm-data-overlay/"
        },
    },
    {
        id: 3,
        label: "Bulk Export & Enrichment",
        icon: TabImg3,
        content: {
            title: "Your Sales Navigator Workflow is Broken.",
            badgeTxt: "Lost Productivity",

            heading1: "Enrich & Export 250 Profiles in Just 60 Seconds.",
            highlight1: "Try LeadCRM Bulk Export",
            image1: Tab3Img1,
            link1: "https://www.leadcrm.io/linkedin-data-bulk-export/",

            heading2: "Export & enrich profiles to the CRM or G-Sheet",
            highlight2: "Try LeadCRM Bulk Export",
            image2: Tab3Img2,
            cardColor: "purple",
            link2: "https://www.leadcrm.io/linkedin-data-bulk-export/"
        },
    },
    {
        id: 4,
        label: "AI Productivity",
        icon: TabImg4,
        content: {
            title: "Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink.",
            badgeTxt: "No Smart Assistance",

            heading1: "Get the same high-impact engagement in 80% less time.",
            highlight1: "Try LeadCRM AI Response",
            image1: Tab4Img1,
            link1: "https://www.leadcrm.io/ai-responses-inside-linkedin/",

            heading2: "Use Shortcuts to reply faster.",
            highlight2: "Try LeadCRM Templates",
            image2: Tab4Img2,
            cardColor: "pink",
            link2: "https://www.leadcrm.io/templates-and-shortcuts/"
        },
    },
];

const LinkedinSolutions = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="linkedin-section">
            <img src={RobbotImg} className="d-none d-sm-block robotImg" alt="" />
            <Container className="pt-5">
                <div className="linkedin-title font-exo2 fw-600">Complete LinkedIn Sales Solutions</div>
                <div className="linkedin-subtitle font-exo2 fw-400">
                    Everything you need for professional LinkedIn prospecting
                </div>

                <CustomTabs
                    tabs={tabData}
                    value={tabIndex}
                    onChange={(e, newVal) => setTabIndex(newVal)}
                />

                <SolutionContent {...tabData[tabIndex].content} />
            </Container>
        </section>
    );
};

export default LinkedinSolutions;
