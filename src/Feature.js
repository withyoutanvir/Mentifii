import React from 'react';
import 'animate.css';  // Import animate.css for animations
import './index.css';

const TeamSection = () => {
  return (
    <section>
      <div 
        className="bg-image"
        style={{ 
          backgroundImage: "url(https://mdbootstrap.com/img/Photos/new-templates/glassmorphism-article/img7.jpg)", 
          height: '700px' 
        }}
      >
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            {/* Section Heading */}
            <h2 className="text-white mb-5 text-center animate__animated animate__fadeInDown animate__delay-1s">
              OUR TEAM
            </h2>
            
            <div className="row justify-content-center text-center">
              {teamMembers.map((member, index) => (
                <div 
                  className={`col-md-4 mb-${index === 2 ? '0' : '4'} mb-md-0`} 
                  key={member.name}
                >
                  <div className="card mask-custom py-5 text-black">
                    <div className="card-body">
                      {/* Avatar */}
                      <img 
                        className="rounded-circle shadow-2-strong mb-5 animate__animated animate__fadeInDown animate__delay-2s"
                        src={member.avatar} 
                        alt={member.name} 
                        style={{ width: '100px' }} 
                      />

                      {/* Name */}
                      <h5 className="mb-4 animate__animated animate__fadeInDown animate__delay-3s">
                        {member.name}
                      </h5>

                      {/* Position */}
                      <p className="mb-4 animate__animated animate__fadeInDown animate__delay-4s">
                        {member.position}
                      </p>

                      {/* Social Links */}
                      <ul className="list-unstyled mb-0">
                        {member.socials.map(social => (
                          <a href={social.link} className="px-1" key={social.icon}>
                            <i className={`fab ${social.icon} text-black animate__animated animate__fadeInDown animate__delay-5s`} />
                          </a>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Team Members Array
const teamMembers = [
  {
    name: "Aasritha",
    position: "Marketing",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg",
    socials: [
      { icon: "fa-github", link: "#!" },
      { icon: "fa-twitter", link: "#!" },
      { icon: "fa-linkedin-in", link: "#!" },
    ],
  },
  {
    name: "Kartik",
    position: "CEO",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg",
    socials: [
      { icon: "fa-facebook-f", link: "#!" },
      { icon: "fa-twitter", link: "#!" },
      { icon: "fa-linkedin-in", link: "#!" },
    ],
  },
  {
    name: "Tanvir Singh",
    position: "Developer",
    avatar: "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
    socials: [
      { icon: "fa-dribbble", link: "#!" },
      { icon: "fa-linkedin-in", link: "/" },
      { icon: "fa-instagram", link: "/" },
    ],
  },
];

export default TeamSection;
