import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({ title, text, imgSrc, imgAlt }) {   
  return (     
    <div className="col-md-4 col-sm-12 d-flex align-items-stretch">       
      <div className="card h-100">         
        <img src={imgSrc} className="card-img-top" alt={imgAlt} style={{ height: "200px", objectFit: "cover" }} />         
        <div className="card-body d-flex flex-column">           
          <h5 className="card-title">{title}</h5>           
          <p className="card-text flex-grow-1">{text}</p>           
          <a href="/" className="btn btn-primary mt-auto">Learn More</a>         
        </div>       
      </div>     
    </div>   
  ); 
}

function CardSection() {   
  const cardData = [     
    {       
      title: "Predictive Analytics",       
      text: "Anticipate trends and outcomes for proactive decisions.",       
      imgAlt: "Predictive Analytics",       
      imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.techfunnel.com%2Fwp-content%2Fuploads%2F2021%2F07%2Fpredictive_analytics.png&f=1&nofb=1&ipt=12e1127b1d30809819a4517a1bd10b4adc3d06058746410e758da5dd37cac04f&ipo=images",     
    },     
    {       
      title: "Machine Learning Models",       
      text: "Automate data analysis tasks with ML models.",       
      imgAlt: "Machine Learning Models",       
      imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.allerin.com%2Fwp-blog%2Fwp-content%2Fuploads%2F2017%2F05%2Fbuilding-effective-machine-learning-models.jpg&f=1&nofb=1&ipt=231c49e989bdd6d9b9393354067e0b69c2b7d88666782a2817752eb2d9b056ce&ipo=images",     
    },     
    {       
      title: "Data Visualization",       
      text: "Transform data into intuitive visual insights.",       
      imgAlt: "Data Visualization",       
      imgSrc: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.sdgyoungleaders.org%2Fwp-content%2Fuploads%2F2020%2F08%2Fload-image-2020-08-11T213740.954.jpeg&f=1&nofb=1&ipt=25fc01cac8b8be8faefc038cefebeedb394b728c1aec348b7aa9b0b7b8635ae7&ipo=images0",     
    },   
  ];    

  const cardSectionStyle = {
    rowGap: '24px',   // Custom vertical gap between rows
    columnGap: '24px', // Custom horizontal gap between columns
  };

  return (     
    <div className="container mt-5">       
      <div className="row g-3 justify-content-center" style={cardSectionStyle}> {/* Apply the inline style here and use justify-content-center to align cards horizontally */}
        {cardData.map((card, index) => (           
          <Card             
            key={index}             
            title={card.title}             
            text={card.text}             
            imgSrc={card.imgSrc}             
            imgAlt={card.imgAlt}           
          />         
        ))}       
      </div>     
    </div>   
  ); 
}

export default CardSection;

