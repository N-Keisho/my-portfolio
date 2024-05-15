"use client";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Drawer } from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <DefaultNavigation />
        <MobileNavigation />
      </nav>
    </header>
  );
};

export default Header;

const DefaultNavigation = () => {
  return (
    <div className={styles.defaultNav}>
      <a href="#top">Top</a>
      <a href="#about">About</a>
      <a href="#works">Works</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

const MobileNavigation = () => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleMenu = () => setIsOpened(!isOpened);

  return (
    <div className={styles.mobileNav} onClick={toggleMenu}>
      <DehazeIcon style={{ fontSize: "35px" }} />
      <MobileMenu isOpened={isOpened} toggleMenu={toggleMenu} />
    </div>
  );
};

const MobileMenu = ({
  isOpened,
  toggleMenu,
}: {
  isOpened: boolean;
  toggleMenu: (event: any) => void;
}) => {
  return (
    <Drawer anchor="right" open={isOpened} onClose={toggleMenu}>
      <div className={styles.mobileMenu}>
        <Image src={"/logo/logo_black.png"} alt="Logo" width={70} height={70} />
        <div>
          <a href="#top">Top</a>
        </div>
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#works">Works</a>
        </div>
        <div>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </Drawer>
  );
};
