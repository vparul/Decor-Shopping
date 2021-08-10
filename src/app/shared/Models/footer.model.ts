export interface IFooterSection {
    heading: string;
    subHeadings: IFooterSubSection[];
    icon?: string;
}

export interface IFooterSubSection {
    name: string;
    icon?: string;
}

export const footerSections: IFooterSection[] = [
    {
        heading: 'Information',
        subHeadings: [
            { name: 'About Us' },
            { name: 'Delivery Information' },
            { name: 'Privacy Policy' },
            { name: 'Terms & Conditions' },
            { name: 'Site Map' },
        ],
    },
    {
        heading: 'Extras',
        subHeadings: [
            { name: 'Brands' },
            { name: 'Gift Certificates' },
            { name: 'Affiliate' },
            { name: 'Special' },
            { name: 'Contact Us' },
        ],
    },
    {
        heading: 'Store Information',
        subHeadings: [
            {
                name: 'NeoClassic',
                icon: 'fa fa-map-marker',
            },
            {
                name: '000-000-0000',
                icon: 'fa fa-phone',
            },
            {
                name: '123456',
                icon: 'fa fa-mobile',
            },
            {
                name: 'sales@yourcompany.com',
                icon: 'fa fa-envelope-open',
            }
        ],
    },
];
