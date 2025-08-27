import { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReviewCard from "../../components/ReviewCard";
import PlayStoreIcon from "../../assets/images/PlayStoreIcon.png"
import David from "../../assets/images/David.png"
import Lillian from "../../assets/images/Lillian.png"
import Michael from "../../assets/images/Michael.png"
import Sophie from "../../assets/images/Sophie.jpg"
import Kristin from "../../assets/images/Kristin.jpg"
import John from "../../assets/images/John.jpg"


const allReviews = [
  {
    id: 1,
    text:
      "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    stars: 5,
    name: "David Fincher",
    source: "On Capterra",
    avatar: David,
    badgeIcon: PlayStoreIcon
  },
  {
    id: 2,
    text:
      "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus.",
    stars: 5,
    name: "Lillian Williams",
    source: "On Capterra",
    avatar: Lillian,
    badgeIcon: PlayStoreIcon
  },
  {
    id: 3,
    text:
      "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    stars: 5,
    name: "Michael",
    source: "On Capterra",
    avatar: Michael,
    badgeIcon: PlayStoreIcon
  },
  {
    id: 4,
    text:
      "Finally, all our client data is in one place. The deal pipeline view is incredibly intuitive and keeps everyone aligned. We did have a small billing hiccup, but their support team resolved it within an hour.",
    stars: 5,
    name: "Sophie Turner",
    source: "On G2",
    avatar: Sophie,
    badgeIcon: PlayStoreIcon
  },
  {
    id: 5,
    text:
      "The background sync is flawless; I never have to think about it. The version history has been a lifesaver more than once. The recent UI update made it even easier to organize large projects.",
    stars: 4,
    name: "John Carter",
    source: "On Trustpilot",
    avatar: John,
    badgeIcon: PlayStoreIcon
  },
  {
    id: 6,
    text:
      "The ability to create hyper-specific customer journeys has drastically improved our engagement rates. While the initial setup was complex, the ROI has been undeniable and well worth the effort.",
    stars: 5,
    name: "Kristin Watson",
    source: "On G2",
    avatar: Kristin,
    badgeIcon: PlayStoreIcon
  },
];

const ReviewSection = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState("next");

  // Responsive items per page
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 992) setItemsPerPage(3);       // lg+
      else if (window.innerWidth >= 768) setItemsPerPage(2);  // md
      else setItemsPerPage(1);                                // sm
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(allReviews.length / itemsPerPage)),
    [itemsPerPage]
  );

  const visibleReviews = useMemo(() => {
    const start = page * itemsPerPage;
    return allReviews.slice(start, start + itemsPerPage);
  }, [page, itemsPerPage]);

  const handleNext = () => {
    if (page < totalPages - 1) {
      setDirection("next");
      setPage((p) => p + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setDirection("prev");
      setPage((p) => p - 1);
    }
  };

  return (
    <section className="reviews-section">
      <Container>
        <Row className="align-items-center reviews-header">
          <Col>
            <div className="reviews-title">
              What people are saying about LeadCRM
            </div>
          </Col>
          <Col xs="auto" className="reviews-arrows">
            <button
              type="button"
              className="nav-arrow left"
              onClick={handlePrev}
              disabled={page === 0}
              aria-label="Previous reviews"
            >
              ‹
            </button>
            <button
              type="button"
              className="nav-arrow right"
              onClick={handleNext}
              disabled={page >= totalPages - 1}
              aria-label="Next reviews"
            >
              ›
            </button>
          </Col>
        </Row>

        <Row
          key={`${page}-${itemsPerPage}`}
          className={`reviews-row pt-3 ${direction === "next" ? "slide-in-right" : "slide-in-left"
            }`}
        >
          {visibleReviews.map((r) => (
            <Col key={r.id} lg={4} md={6} xs={12} className="review-col">
              <ReviewCard
                text={r.text}
                stars={r.stars}
                name={r.name}
                source={r.source}
                avatar={r.avatar}
                badgeIcon={r.badgeIcon}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ReviewSection;
