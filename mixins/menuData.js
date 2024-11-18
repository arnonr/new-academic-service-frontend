export default {
    data() {
        return {
            menuData: [
                {
                    id: 1,
                    hasDropdown: false,
                    title: "หน้าหลัก",
                    link: "/",
                },
                {
                    id: 2,
                    title: "บริการวิชาการ",
                    hasDropdown: false,
                    link: "/serve",
                },
                {
                    id: 3,
                    title: "ทรัพย์สินทางปัญญา",
                    hasDropdown: false,
                    link: "/news",
                },
                {
                    id: 4,
                    title: "หน่วยงาน",
                    hasDropdown: false,
                    link: "/department",
                },
                {
                    id: 5,
                    hasDropdown: false,
                    title: "ติดต่อสอบถาม",
                    link: "/contact-us",
                },
            ],
        };
    },
};
