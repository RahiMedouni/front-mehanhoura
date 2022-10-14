import styled from "styled-components";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from "react";

export const socials = [
  {
    outlet: "Facebook",
    href:
      "https://www.facebook.com/sharer/sharer.php?u=http://localhost:3000/blog/The%2520good",
    background: "#3b5898",
    color: "white",
    label: "Share on Facebook",
    icon: <FacebookIcon />
  },
  {
    outlet: "Twitter",
    href:
      "https://twitter.com/intent/tweet?url=https://dev.to/dsasse07/beginner-s-guide-to-jest-testing-in-react-1nig&text=Beginner's%20Guide%20to%20Jest%20Testing%20in%20React&via=dannysasse",
    background: "#00aced",
    color: "white",
    label: "Share on Twitter",
    icon: <TwitterIcon />
  },
];

export default function ScrollToTop() {
  const [menuActive, setMenuActive] = useState(false);
  const handleToggleMenu = () => {
    setMenuActive((menuActive) => !menuActive);
  };

  const socialLinks = socials.map((social, index) => {
    return (
      <SocialLink
        as="a"
        href={social.href}
        target="_blank"
        rel="noreferrer"
        aria-label={social.label}
        role="button"
        isActive={menuActive}
        background={social.background}
        color={social.color}
        position={index}
        key={index}
      >
        {social.icon}
      </SocialLink>
    );
  });

  return (
      <ShareContainer>
        <ShareButton
          isActive={menuActive}
          aria-label="Share Button"
          aria-expanded={menuActive}
          role="button"
          background="#242424"
          color="white"
          onClick={handleToggleMenu}
        >
          <ShareIcon />
        </ShareButton>
        {socialLinks}
      </ShareContainer>
  );
}

const ShareContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ShareButton = styled.button`
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border-radius: 100%;
  outline: none;
  border: 2px solid ${({ background }) => background};
  padding: 8px;
  transform: ${({ isActive }) => (isActive ? "scale(0.8)" : "scale(1.0)")};
  transition: all 0.2s, transform 0.2s 0.2s;
  :hover {
    background: white;
    color: ${({ background }) => background};
  }
`;

const SocialLink = styled(ShareButton)`
  position: absolute;
  z-index: 0;
  transform: none;
  transition: top 0.2s ${({ position }) => `${position * 50}ms`},
    left 0.2s ${({ position }) => `${position * 50}ms`};
  left: ${({ isActive, position }) =>
    isActive ? `${(-1) ** position * Math.ceil(position / 2) * 50}px` : "0"};
  top: ${({ isActive }) => (isActive ? `50px` : "0")};
  box-shadow: ${({ isActive }) => (isActive ? `0 4px 10px 0 gray` : `0`)};
`;


// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// export default function ScrollToTop({ children }) {
//   const { pathname } = useLocation();
  
//   useEffect(() => {
//     const canControlScrollRestoration = 'scrollRestoration' in window.history
//     if (canControlScrollRestoration) {
//       window.history.scrollRestoration = 'manual';
//     }

//     window.scrollTo(0, 0);
//   }, [pathname]);
  
//   return children;
// }
