import { site } from '../config/site.js';
import { Seo } from '../seo/Head.jsx';
import { breadcrumbSchema, webPageSchema } from '../seo/schema.js';
import { PageHero } from '../components/Blocks.jsx';

export default function Privacy() {
  const title = 'Privacy Policy & Medical Disclaimer | Gurudev Hospital';
  const description = 'How Gurudev Multi-Speciality Hospital, Badlapur East handles information you share through this website, and our medical disclaimer.';
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Privacy policy', path: '/privacy-policy' }];
  return (
    <>
      <Seo title={title} description={description} path="/privacy-policy" schema={[webPageSchema({ path: '/privacy-policy', name: title, description }), breadcrumbSchema(crumbs)]} />
      <PageHero crumbs={crumbs} title="Privacy policy & medical disclaimer" />
      <section className="section">
        <div className="container container--narrow prose">
          <h2>Information you share</h2>
          <p>
            When you send an appointment request, we receive the name, phone number, department, preferred time and any message you enter. We use
            it only to contact you about your request. We do not sell or share it with third parties for marketing.
          </p>
          <p>
            If you choose WhatsApp, your message is sent through WhatsApp and is subject to WhatsApp’s own privacy policy. This website does not
            store your details in your browser.
          </p>
          <h2>Google services</h2>
          <p>
            This website shows Google Maps and Google reviews using Google Maps Platform. When these load, Google may receive your IP address and
            browser information under the Google Privacy Policy.
          </p>
          <h2>Website analytics</h2>
          <p>
            We may use Google Analytics to understand how visitors use this website: pages viewed, device type, approximate city, and
            clicks on call, WhatsApp and directions buttons. It does not receive what you type into the appointment form. You can opt out
            with the Google Analytics opt-out browser add-on or by blocking cookies in your browser.
          </p>
          <h2>Medical disclaimer</h2>
          <p>
            Information on this website is for general awareness only and is not a substitute for professional medical advice, diagnosis or
            treatment. Always consult a qualified doctor about your condition. In an emergency, call {site.phone.display} or 108 immediately.
          </p>
          <h2>Contact</h2>
          <p>
            {site.name}, {site.address.full}. Phone: {site.phone.displayIntl}.
          </p>
        </div>
      </section>
    </>
  );
}
