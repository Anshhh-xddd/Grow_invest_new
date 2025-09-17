import DesktopHome from '../pages/desktop/Home.jsx'
import DesktopAbout from '../pages/desktop/About.jsx'
import DesktopServices from '../pages/desktop/Services.jsx'
import DesktopTestimonials from '../pages/desktop/Testimonials.jsx'
import DesktopFaqs from '../pages/desktop/Faqs.jsx'
import DesktopBlog from '../pages/desktop/Blog.jsx'
import DesktopContact from '../pages/desktop/Contact.jsx'
import MobileHome from '../pages/mobile/Home.jsx'
import MobileAbout from '../pages/mobile/About.jsx'
import MobileServices from '../pages/mobile/Services.jsx'
import MobileTestimonials from '../pages/mobile/Testimonials.jsx'
import MobileFaqs from '../pages/mobile/Faqs.jsx'
import MobileBlog from '../pages/mobile/Blog.jsx'
import MobileContact from '../pages/mobile/Contact.jsx'

export const pageRoutes = [
  {
    label: 'Home Page',
    path: '/',
    desktop: DesktopHome,
    mobile: MobileHome,
  },
  {
    label: 'About Us',
    path: '/about',
    desktop: DesktopAbout,
    mobile: MobileAbout,
  },
  {
    label: 'Services',
    path: '/services',
    desktop: DesktopServices,
    mobile: MobileServices,
  },
  {
    label: 'Testimonial',
    path: '/testimonials',
    desktop: DesktopTestimonials,
    mobile: MobileTestimonials,
  },
  {
    label: 'FAQs',
    path: '/faqs',
    desktop: DesktopFaqs,
    mobile: MobileFaqs,
  },
  {
    label: 'Blog / News',
    path: '/blog',
    desktop: DesktopBlog,
    mobile: MobileBlog,
  },
  {
    label: 'Contact Us',
    path: '/contact',
    desktop: DesktopContact,
    mobile: MobileContact,
  },
]
