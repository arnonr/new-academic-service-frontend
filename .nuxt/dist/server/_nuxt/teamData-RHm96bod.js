const img_1 = "" + __buildAssetsURL("team-1.5jBI-sY9.jpg");
const img_2 = "" + __buildAssetsURL("team-2.BfYH3Um2.jpg");
const img_3 = "" + __buildAssetsURL("team-3.Dof_u4wi.jpg");
const img_4 = "" + __buildAssetsURL("team-4.eJtv5N-_.jpg");
const img_5 = "" + __buildAssetsURL("team-7.Bsc5O67u.jpg");
const img_6 = "" + __buildAssetsURL("team-8.B6HqXOz2.jpg");
const img_law_1 = "" + __buildAssetsURL("team-1.Da5CIpE_.png");
const img_law_2 = "" + __buildAssetsURL("team-2.DsJ3MztP.png");
const img_law_3 = "" + __buildAssetsURL("team-3.DxX9XHpI.png");
const img_law_4 = "" + __buildAssetsURL("team-4.DbRPQCYj.png");
const img_creative_1 = "" + __buildAssetsURL("team-1.DrGmA2CE.jpg");
const img_creative_2 = "" + __buildAssetsURL("team-2.D5m7rvW8.jpg");
const img_creative_3 = "" + __buildAssetsURL("team-3.p_oIiD6m.jpg");
const arch_img_1 = "" + __buildAssetsURL("team-1.DWGVYQQx.jpg");
const arch_img_2 = "" + __buildAssetsURL("team-2.BSuV7ntc.jpg");
const arch_img_3 = "" + __buildAssetsURL("team-3.tlbw63qR.jpg");
const arch_img_4 = "" + __buildAssetsURL("team-4.6Ls67ENK.jpg");
const polity_img_1 = "" + __buildAssetsURL("team-1.JDHEvXxR.jpg");
const polity_img_2 = "" + __buildAssetsURL("team-2.BoQEh103.jpg");
const polity_img_3 = "" + __buildAssetsURL("team-3.BSsEUmKY.jpg");
const polity_img_4 = "" + __buildAssetsURL("team-4.BjOODoQJ.jpg");
const team_img_1 = "" + __buildAssetsURL("team-9.BfMrD-xw.jpg");
const team_img_2 = "" + __buildAssetsURL("team-10.CvELKBiA.jpg");
const teamData = {
  data() {
    return {
      teamData: [
        // home teams 
        {
          id: 1,
          img: img_1,
          name: "Leslie Alexander",
          title: "Founder-CO",
          mail: "mailto:team@harry.com",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          home: true,
          team_p: true
        },
        {
          id: 2,
          img: img_2,
          name: "Annette Black",
          title: "Product Designer",
          mail: "mailto:team@harry.com",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          home: true,
          team_p: true
        },
        {
          id: 3,
          img: img_3,
          name: "Kathryn Murphy",
          title: "Creative Director",
          mail: "mailto:team@harry.com",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          home: true,
          team_p: true
        },
        {
          id: 4,
          img: img_4,
          name: "Guy Hawkins",
          title: "Developer",
          mail: "mailto:team@harry.com",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          home: true,
          team_p: true
        },
        {
          id: 5,
          img: img_5,
          name: "Deli Yanky",
          title: "Consulting Officer",
          mail: "mailto:team@harry.com",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          home: true,
          team_p: true
        },
        {
          id: 6,
          img: img_6,
          name: "Zin Denvar",
          title: "Sales Manager",
          mail: "mailto:team@harry.com",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          home: true,
          team_p: true
        },
        // team page
        {
          id: 7,
          img: team_img_1,
          name: "Maurice Craig",
          title: "FINANCIAL MANAGER",
          mail: "mailto:team@harry.com",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          team_p: true
        },
        {
          id: 8,
          img: team_img_2,
          name: "Kari Rasmussen",
          title: "JUNIOR DEVELOPER",
          mail: "mailto:team@harry.com",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          team_p: true
        },
        //home lawyer teams 
        {
          id: 9,
          img: img_law_1,
          name: "Floyd Miles",
          title: "Criminal Lawyer",
          mail: "mailto:team@harry.com",
          sm_desc: "Nulla quis lorem ut libero malesuada feugiat vivamus suscipit tortor eget felis porttitor volutpat.",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          home_lawyer: true
        },
        {
          id: 10,
          img: img_law_2,
          name: "Dianne Russell",
          title: "Attorney in Law",
          mail: "mailto:team@harry.com",
          sm_desc: "Nulla quis lorem ut libero malesuada feugiat vivamus suscipit tortor eget felis porttitor volutpat.",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          home_lawyer: true
        },
        {
          id: 11,
          img: img_law_3,
          name: "Jenny Wilson",
          title: "Business Lawyer",
          mail: "mailto:team@harry.com",
          sm_desc: "Nulla quis lorem ut libero malesuada feugiat vivamus suscipit tortor eget felis porttitor volutpat.",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          home_lawyer: true
        },
        {
          id: 12,
          img: img_law_4,
          name: "Jerome Bell",
          title: "Family Lawyer",
          mail: "mailto:team@harry.com",
          sm_desc: "Nulla quis lorem ut libero malesuada feugiat vivamus suscipit tortor eget felis porttitor volutpat.",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          home_lawyer: true
        },
        // home creative
        {
          id: 13,
          img: img_creative_1,
          name: "Valentino Morose",
          title: "Senior Manager",
          mail: "mailto:team@harry.com",
          sm_desc: "Nulla quis lorem ut libero malesuada feugiat vivamus suscipit tortor eget felis porttitor volutpat.",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          delay: ".3s",
          home_creative: true
        },
        {
          id: 14,
          img: img_creative_2,
          name: "Carnegie Mondover",
          title: "Developer",
          mail: "mailto:team@harry.com",
          sm_desc: "Nulla quis lorem ut libero malesuada feugiat vivamus suscipit tortor eget felis porttitor volutpat.",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          delay: ".5s",
          home_creative: true
        },
        {
          id: 15,
          img: img_creative_3,
          name: "Desmond Eagle",
          title: "Consultant",
          mail: "mailto:team@harry.com",
          sm_desc: "Nulla quis lorem ut libero malesuada feugiat vivamus suscipit tortor eget felis porttitor volutpat.",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          delay: ".7s",
          home_creative: true
        },
        // home architecture
        {
          id: 16,
          img: arch_img_1,
          name: "Annette Black",
          title: "Founder-CO",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          delay: ".3s",
          home_architecture: true
        },
        {
          id: 17,
          img: arch_img_2,
          name: "Guy Hawkins",
          title: "Product Designer",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          delay: ".5s",
          home_architecture: true
        },
        {
          id: 18,
          img: arch_img_3,
          name: "Kathryn Murphy",
          title: "Developer",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          delay: ".7s",
          home_architecture: true
        },
        {
          id: 19,
          img: arch_img_4,
          name: "Cody Fisher",
          title: "Designer",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          delay: ".9s",
          home_architecture: true
        },
        // home politician
        {
          id: 20,
          img: polity_img_1,
          name: "Jason Response",
          title: "Party Leader",
          mail: "mailto:team@harry.com",
          phone: "+088 3579 523 43",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          delay: ".3s",
          home_politician: true
        },
        {
          id: 21,
          img: polity_img_2,
          name: "Dylan Meringue",
          title: "Actuary",
          mail: "mailto:team@harry.com",
          phone: "+088 3579 523 44",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          delay: ".5s",
          home_politician: true
        },
        {
          id: 22,
          img: polity_img_3,
          name: "Phillip Anthropy",
          title: "Director",
          mail: "mailto:team@harry.com",
          phone: "+088 3579 523 45",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          delay: ".7s",
          home_politician: true
        },
        {
          id: 23,
          img: polity_img_4,
          name: "Valentino Morose",
          title: "Speaker",
          mail: "mailto:team@harry.com",
          phone: "+088 3579 523 46",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          delay: ".9s",
          home_politician: true
        },
        {
          id: 24,
          img: polity_img_2,
          name: "Dylan Meringue",
          title: "Actuary",
          mail: "mailto:team@harry.com",
          phone: "+088 3579 523 44",
          social_links: [
            { link: "http://facebook.com", target: "_blank", icon: "fa-brands fa-facebook-f", name: "Facebook" },
            { link: "http://twitter.com", target: "_blank", icon: "fa-brands fa-twitter", name: "Twitter" },
            { link: "https://www.linkedin.com/", target: "_blank", icon: "fa-brands fa-linkedin-in", name: "Linkedin" }
          ],
          delay: ".5s",
          home_politician: true
        }
      ]
    };
  }
};
export {
  teamData as t
};
//# sourceMappingURL=teamData-RHm96bod.js.map
