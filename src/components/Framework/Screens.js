const screens = {
  /* 
          ##Device = Most of the Smartphones Mobiles (Portrait)
          ##Screen = B/w 320px to 479px
      */
  mobileS: `(min-width: 320px)`,
  /* 
          ##Device = Most of the Smartphones Mobiles Landscape
          ##Screen = B/w 320px to 479px
      */
  mobileSLandscape: `(min-width: 320px) and (orientation: landscape)`,
  /* 
          ##Device = Low Resolution Tablets, Mobiles
          ##Screen = B/w 481px to 767px
      */
  mobileM: `(min-width: 481px)`,
  /* 
          ##Device = Low Resolution Tablets, Mobiles Landscape
          ##Screen = B/w 481px to 767px
      */
  mobileMLandscape: `(min-width: 481px) and (orientation: landscape)`,
  /* 
          ##Device = Tablets, Ipads (landscape)
          ##Screen = B/w 768px to 1024px
      */
  tabletland: `(min-width: 768px) and (orientation: landscape)`,
  /* 
          ##Device = Tablets, Ipads (portrait)
          ##Screen = B/w 768px to 1024px
      */
  tablet: `(min-width: 768px)`,
  /* 
          ##Device = Laptops, Desktops
          ##Screen = B/w 1025px to 1280px
      */
  laptop: `(min-width: 1025px)`,
  /* 
      ##Device = Desktops
      ##Screen = 1281px to higher resolution desktops
      */
  laptopL: `(min-width: 1440px)`,

  desktop: `(min-width: 2560px)`,
}

export default screens
