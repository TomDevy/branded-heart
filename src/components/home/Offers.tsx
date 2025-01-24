import { Slide } from "react-awesome-reveal";
import { FaTruck, FaTools, FaDollarSign, FaStar } from "react-icons/fa";

const offersData = [
  {
    title: "Ontime Delivery",
    icon: <FaTruck size={80} />,
    description: "We pride ourselves on meeting your needs on time.",
  },
  {
    title: "Quality Material",
    icon: <FaTools size={80} />,
    description: "For us, quality is a top priority.",
  },
  {
    title: "Affordable Pricing",
    icon: <FaDollarSign size={80} />,
    description: "Our services are budget-friendly.",
  },
  {
    title: "Quality Service",
    icon: <FaStar size={80} />,
    description: "We deliver only the best services.",
  },
];

const Offers = () => {
  return (
    <Slide 
    // triggerOnce
    direction="left"
    >
    <div className="offers">
      <div className="offerCardCon">
        {offersData.map((offer, index) => (
          <div className="offerCardEach" key={index}>
            <div className="offerCardInner">
              <h2>{offer.title}</h2>
              {offer.icon}
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Slide>
  );
};

export default Offers;
