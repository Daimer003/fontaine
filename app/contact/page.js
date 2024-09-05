import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import ContactPageSection from "@/component/contact/ContactPageSection";
import Layout from "@/component/layout/Layout";
export const metadata = {
    title: 'Fontaine Contact Page',
    description: 'Developed by Azizur Rahman',
}
export default function Contact() {
    return (
        <Layout>
            <BreadcrumbSection header='Contact Us' title="Contact us" />
            <ContactPageSection />
        </Layout>
    )
}