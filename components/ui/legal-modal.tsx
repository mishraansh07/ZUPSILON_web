import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

export function LegalModal({ content, onClose }: { content: 'privacy' | 'terms' | null, onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (content) {
      document.body.style.overflow = 'hidden';
      // Reset scroll position on content load
      if (modalRef.current) modalRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [content]);

  return (
    <AnimatePresence>
      {content && (
        <motion.div
          key="legal-modal"
          ref={modalRef}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999999] bg-[#fdf9fa] text-black overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-[#fdf9fa] border-b-4 border-black p-4 md:p-6 flex justify-between items-center z-50">
            <div className="flex items-center gap-4 md:gap-6">
              <span className="bg-black text-white font-mono text-xs md:text-sm px-3 md:px-4 py-2 font-bold tracking-[0.2em] uppercase hidden sm:block">
                ZUPSILON // LEGAL
              </span>
              <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-black m-0">
                {content === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h1>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-[#b19cd9] hover:text-black transition-colors"
            >
              <X className="w-8 h-8" strokeWidth={3} />
            </button>
          </div>
          
          {/* Layout Split */}
          <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Sidebar (Metadata) */}
            <div className="lg:w-[350px] shrink-0 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-white p-6 relative">
              <div className="sticky top-32">
                <div className="border-4 border-black group hover:shadow-[8px_8px_0_0_#b19cd9] transition-all bg-[#fdf9fa] mb-8">
                  <div className="bg-black text-white p-3 font-mono text-xs uppercase font-bold tracking-widest flex justify-between">
                    <span>Metadata</span>
                    <span>SYS.0{content === 'privacy' ? '1' : '2'}</span>
                  </div>
                  <div className="p-5 space-y-4 font-mono text-xs md:text-sm">
                    <div className="flex flex-col">
                      <span className="text-gray-500 uppercase tracking-wider mb-1 text-[10px] md:text-xs">Effective Date</span> 
                      <span className="font-bold text-black border-b-2 border-dotted border-black/20 pb-2">April 8, 2026</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 uppercase tracking-wider mb-1 text-[10px] md:text-xs">Document Version</span> 
                      <span className="font-bold text-black border-b-2 border-dotted border-black/20 pb-2">1.0</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-500 uppercase tracking-wider mb-1 text-[10px] md:text-xs">Jurisdiction</span> 
                      <span className="font-bold text-black">India (Gurugram)</span>
                    </div>
                  </div>
                </div>

                <div className="border-4 border-black bg-[#1a1a1a] text-white">
                  <div className="bg-[#b19cd9] text-black p-3 font-mono text-xs uppercase font-bold tracking-widest border-b-4 border-black">
                    Contact Directory
                  </div>
                  <div className="p-5 space-y-6 text-xs font-mono">
                    <div className="group/link cursor-pointer">
                      <span className="text-white/50 block mb-1 uppercase text-[10px] md:text-xs tracking-widest">Legal Queries</span>
                      <a href="mailto:legal@zupsilon.ai" className="text-white font-bold group-hover/link:text-[#b19cd9] transition-colors text-sm md:text-base">legal@zupsilon.ai</a>
                    </div>
                    <div className="group/link cursor-pointer">
                      <span className="text-white/50 block mb-1 uppercase text-[10px] md:text-xs tracking-widest">Privacy Queries</span>
                      <a href="mailto:privacy@zupsilon.ai" className="text-white font-bold group-hover/link:text-[#b19cd9] transition-colors text-sm md:text-base">privacy@zupsilon.ai</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side (Content) */}
            <div className="flex-1 p-6 md:p-12 lg:p-24 bg-[#fdf9fa]">
              <div className="max-w-3xl">
                <p className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-20 pb-10 border-b-8 border-black text-[#60507c] uppercase text-balance tracking-tighter">
                   This document constitutes the complete and binding legal agreement between you and Zupsilon Technologies governing your access to and use of our platform.
                </p>

                {content === 'privacy' ? <PrivacyContent /> : <TermsContent />}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <div className="mb-24">
      {/* Editorial Title Block */}
      <div className="flex flex-col lg:flex-row lg:items-center border-t-[12px] border-b-4 border-black mb-10 py-5 bg-white/50">
        <div className="font-mono text-xl md:text-3xl font-black text-[#b19cd9] w-20 mb-2 lg:mb-0 shrink-0">
          {id.padStart(2, '0')}.
        </div>
        <h2 className="text-2xl md:text-4xl font-black uppercase text-black tracking-tighter w-full">
          {title}
        </h2>
      </div>
      <div className="space-y-6 text-[17px] md:text-[19px] text-[#1a1a1a] font-medium leading-[1.7] max-w-3xl">
        {children}
      </div>
    </div>
  );
}

function SubSection({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mt-10 border-l-8 border-[#60507c] pl-6 py-2 bg-white/30 pr-4">
      <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-[#1a1a1a] mb-5 bg-black text-white inline-block px-4 py-2">
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function PrivacyContent() {
  return (
    <>
      <Section id="1" title="Our Commitment to Your Privacy">
        <p>Zupsilon Technologies ("Zupsilon," "we," "our," or "us") is committed to handling your personal information with transparency, care, and respect. This Privacy Policy explains what information we collect, the purposes for which we use it, how we protect it, and the rights available to you.</p>
        <p>This Policy applies to all users of our website, platform, API, early access programs, and any related services (collectively, the "Services"). By accessing or using our Services, you acknowledge that you have read and understood this Policy.</p>
      </Section>

      <Section id="2" title="Information We Collect">
        <p>We collect information in three ways: directly from you, automatically through your use of our Services, and occasionally from third parties.</p>
        
        <SubSection title="2.1 Information You Provide">
          <p>When you create an account, join our Early Access program, or contact us, you may provide: your name and email address; company name, job title, or professional information; communications, feedback, and support requests you direct to us; and payment details, where applicable, processed securely through our payment providers.</p>
        </SubSection>

        <SubSection title="2.2 Information Collected Automatically">
          <p>As you interact with our Services, we automatically collect certain technical and behavioral data, including:</p>
          <ul className="list-square pl-6 space-y-3 font-bold marker:text-[#60507c]">
            <li className="pl-2"><span className="text-black/50">Usage Data:</span> Pages visited, features accessed, queries submitted, and time spent on the platform.</li>
            <li className="pl-2"><span className="text-black/50">Device & Network Data:</span> IP address, browser type and version, operating system, and referring URLs.</li>
            <li className="pl-2"><span className="text-black/50">Tracking Tech:</span> Session identifiers, preference tokens, and analytics trackers as described in Section 5.</li>
          </ul>
        </SubSection>

        <SubSection title="2.3 Information from Third Parties">
          <p>If you authenticate via a third-party identity provider (such as Google or GitHub), we receive the basic profile information you have authorized that provider to share. We do not purchase or acquire personal data from data brokers.</p>
        </SubSection>
      </Section>

      <Section id="3" title="How We Use Your Information">
        <p>We use the information we collect solely for the following purposes:</p>
        <ul className="list-square pl-6 space-y-3 mb-10 font-bold marker:text-[#60507c]">
          <li className="pl-2">To create and maintain your account, and to authenticate your identity.</li>
          <li className="pl-2">To provide, operate, and continuously improve our Services.</li>
          <li className="pl-2">To communicate with you regarding product updates, Early Access milestones, security notices.</li>
          <li className="pl-2">To respond to your support inquiries and resolve disputes.</li>
          <li className="pl-2">To analyze aggregate usage patterns and improve platform performance.</li>
          <li className="pl-2">To fulfill our legal and regulatory obligations.</li>
        </ul>
        <div className="bg-[#1a1a1a] p-8 text-white md:text-xl font-black uppercase border-4 border-[#1a1a1a] shadow-[8px_8px_0_0_#b19cd9] tracking-widest text-center leading-[1.6]">
          We do not sell your personal data to any third party, nor do we use your data to train our AI models without your explicit, separately obtained consent.
        </div>
      </Section>

      <Section id="4" title="Legal Bases for Processing">
        <p>Where data protection law requires a legal basis, we process your personal data under one or more of the following:</p>
        <ul className="list-square pl-6 space-y-4 marker:text-[#60507c]">
          <li className="pl-2"><b>Contractual Necessity:</b> Processing required to perform the agreement between you and Zupsilon (e.g., operating your account).</li>
          <li className="pl-2"><b>Legitimate Interests:</b> Processing necessary for our legitimate business interests — such as improving our services, ensuring platform security, and communicating with users — where these are not overridden by your rights.</li>
          <li className="pl-2"><b>Legal Obligation:</b> Processing required to comply with applicable law.</li>
        </ul>
      </Section>

      <Section id="5" title="Cookies & Tracking Technologies">
        <p>We use the following categories of cookies and similar technologies:</p>
        <ul className="list-square pl-6 space-y-3 mb-8 marker:text-[#60507c]">
          <li className="pl-2"><b>Essential Cookies:</b> Required for authentication, session management, and core platform functionality. These cannot be disabled without affecting Service performance.</li>
          <li className="pl-2"><b>Analytics Cookies:</b> Used to understand aggregate user behavior and improve the platform. These are enabled by default but may be disabled through our cookie preferences panel.</li>
          <li className="pl-2"><b>Preference Cookies:</b> Store your settings and display preferences across sessions.</li>
        </ul>
        <p>You may manage cookie preferences at any time through our in-platform settings or your browser's cookie controls.</p>
      </Section>

      <Section id="6" title="Data Sharing & Disclosure">
        <p>We do not share your personal information except in the following limited circumstances:</p>
        <ul className="list-square pl-6 space-y-4 mt-8 marker:text-[#60507c]">
          <li className="pl-2"><b>Service Providers:</b> We work with carefully vetted third-party vendors (e.g., cloud infrastructure providers, payment processors, email service providers) who process data exclusively on our behalf and under strict confidentiality agreements.</li>
          <li className="pl-2"><b>Legal Compliance:</b> We may disclose information when required to do so by applicable law, court order, or governmental authority.</li>
          <li className="pl-2"><b>Business Transfers:</b> In the event of a merger, acquisition, financing, or sale of all or substantially all of our assets, your information may be transferred to the successor entity.</li>
        </ul>
      </Section>

      <Section id="7" title="Data Retention">
        <p>We retain your personal data only for as long as necessary to fulfil the purposes set out in this Policy, to provide the Services, or as required or permitted by applicable law. When your data is no longer needed, we securely delete or anonymize it.</p>
        <p>You may request deletion of your account and associated data at any time by contacting us at <b className="bg-black text-white px-2 py-1 mx-1">privacy@zupsilon.ai</b>. We will process such requests within 30 days, subject to any legal retention obligations.</p>
      </Section>

      <Section id="8" title="Data Security">
        <p>We implement and maintain appropriate technical and organizational measures designed to protect your information against unauthorized access, loss, destruction, or alteration. These measures include encryption of data in transit (TLS) and at rest, role-based access controls, regular security assessments, and employee training on data protection practices.</p>
      </Section>

      <Section id="9" title="Your Rights">
        <p>Subject to applicable law, you may have the following rights with respect to your personal data:</p>
        <div className="flex flex-wrap gap-4 my-8">
          {['Access', 'Rectification', 'Erasure', 'Restriction', 'Portability', 'Objection'].map(right => (
            <div key={right} className="bg-white border-4 border-black text-black px-5 py-3 font-black uppercase tracking-[0.2em] text-xs shadow-[4px_4px_0_0_#b19cd9]">
              {right}
            </div>
          ))}
        </div>
        <p>To exercise any of these rights, please contact us at <b className="bg-black text-white px-2 py-1 mx-1">privacy@zupsilon.ai</b>. We will respond within 30 days.</p>
      </Section>

      <Section id="10" title="Children's Privacy">
        <p>Our Services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe that a minor has provided us with their personal data, please contact us immediately and we will take prompt steps to delete that information.</p>
      </Section>

      <Section id="11" title="International Data Transfers">
        <p>Zupsilon operates globally, and your information may be transferred to and processed in countries other than your country of residence. Where we transfer personal data internationally, we apply appropriate safeguards in accordance with applicable data protection law.</p>
      </Section>

      <Section id="12" title="Changes to This Policy">
        <p>We may revise this Privacy Policy from time to time. When we make material changes, we will update the "Last Updated" date at the top of this document and provide notice via email or a prominent in-platform notification. Your continued use of the Services following such notice constitutes your acceptance of the updated Policy.</p>
      </Section>
    </>
  );
}

function TermsContent() {
  return (
    <>
      <Section id="1" title="Agreement to These Terms">
        <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("you" or "User") and Zupsilon Technologies ("Zupsilon," "we," "our," or "us") governing your access to and use of all Zupsilon products, platforms, APIs, and services (collectively, the "Services").</p>
        <p>By registering for an account, accessing the Services, or clicking to accept these Terms, you agree to be bound by them in full. If you are using the Services on behalf of a company, partnership, or other legal entity, you represent and warrant that you have the legal authority to bind that entity, and references to "you" include both you and that entity.</p>
      </Section>

      <Section id="2" title="Modifications to These Terms">
        <p>We reserve the right to modify these Terms at any time. When we make material changes, we will notify you by email or through a prominent notice on our platform and update the "Last Updated" date. Your continued use of the Services following the effective date of any modification constitutes your acceptance of the updated Terms.</p>
      </Section>

      <Section id="3" title="Eligibility">
        <p>To use our Services, you must: (a) be at least 16 years of age; (b) have the legal capacity to enter into a binding agreement; and (c) not be barred from receiving services under applicable law. By using our Services, you represent and warrant that you meet all of these requirements.</p>
      </Section>

      <Section id="4" title="Account Registration & Security">
        <p>Certain features of our Services require you to register for an account. When you register, you agree to:</p>
        <ul className="list-square pl-6 space-y-3 mb-6 marker:text-[#60507c]">
          <li className="pl-2">Provide accurate, current, and complete information.</li>
          <li className="pl-2">Maintain and promptly update your information to keep it accurate.</li>
          <li className="pl-2">Maintain the confidentiality of your account credentials.</li>
        </ul>
        <p>You may not transfer, sell, or assign your account to any third party. Zupsilon is not liable for any loss or damage arising from your failure to maintain the security of your account credentials.</p>
      </Section>

      <Section id="5" title="Acceptable Use">
        <p>You agree to use our Services only in compliance with these Terms, our Acceptable Use Policy, and all applicable laws and regulations. The following conduct is expressly prohibited:</p>
        <ul className="list-square pl-6 space-y-4 my-8 marker:text-[#60507c] font-bold">
          <li className="pl-2"><span className="text-black/50">Malicious Use:</span> Transmitting any unlawful or fraudulent content.</li>
          <li className="pl-2"><span className="text-black/50">Security Breaches:</span> Attempting to probe, scan, or test system vulnerabilities.</li>
          <li className="pl-2"><span className="text-black/50">Reverse Engineering:</span> Decompiling, disassembling, or extracting source code.</li>
          <li className="pl-2"><span className="text-black/50">Scraping:</span> Deploying automated tools to extract data without consent.</li>
          <li className="pl-2"><span className="text-black/50">Competition:</span> Using the Services to construct competing frameworks.</li>
        </ul>
        <div className="bg-[#60507c] text-white p-6 font-bold uppercase tracking-widest border-4 border-black text-sm">
          We reserve the right to investigate and permanently terminate your access for violations.
        </div>
      </Section>

      <Section id="6" title="Intellectual Property Rights">
        <p>The Services, including all underlying technology, software, source code, algorithms, models, designs, user interfaces, trademarks, and content, are the exclusive intellectual property of Zupsilon and its licensors, protected under applicable copyright, trademark, patent, and trade secret law.</p>
      </Section>

      <Section id="7" title="Your Content">
        <p>You retain all ownership rights in any data, files, text, models, or other materials that you upload to, submit to, or process through the Services ("Your Content").</p>
        <p>By submitting Your Content to the Services, you grant Zupsilon a limited, non-exclusive, worldwide, royalty-free license to process, store, and transmit Your Content solely to the extent necessary to provide and maintain the Services to you. This license terminates when you delete Your Content or close your account.</p>
      </Section>

      <Section id="8" title="Early Access Program">
        <p>Our Early Access program provides selected users with access to pre-release features, experimental capabilities, and beta functionality. You acknowledge and agree that:</p>
        <ul className="list-square pl-6 space-y-3 mt-6 marker:text-[#60507c]">
          <li className="pl-2">Early Access features are provided strictly on an <b>"as-is" and "as-available"</b> basis, without warranty of any kind.</li>
          <li className="pl-2">We may modify, suspend, or permanently discontinue any Early Access feature at any time without notice.</li>
          <li className="pl-2">Participation in the Early Access program does not constitute a commitment to any particular feature at general availability.</li>
        </ul>
      </Section>

      <Section id="9" title="Fees, Billing & Payment">
        <p>Where Zupsilon offers paid tiers or features, all applicable fees will be clearly disclosed to you prior to purchase. Unless otherwise stated:</p>
        <ul className="list-square pl-6 space-y-3 mt-6 marker:text-[#60507c]">
          <li className="pl-2">All fees are stated exclusive of applicable taxes, which are your responsibility.</li>
          <li className="pl-2">Fees are non-refundable except where required by applicable consumer protection law or as expressly set out in our Refund Policy.</li>
          <li className="pl-2">Failure to pay applicable fees may result in suspension or termination of your access to paid features.</li>
        </ul>
      </Section>

      <Section id="10" title="Disclaimers & Warranties">
        <div className="font-mono text-lg md:text-xl font-bold uppercase text-white bg-black p-8 md:p-12 border-l-[16px] border-[#60507c] shadow-[8px_8px_0_0_#1a1a1a] leading-[1.8] tracking-widest text-center">
          TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
        </div>
        <p className="mt-10">Zupsilon does not warrant that: (a) the Services will be error-free or free from harmful components; (b) any defects or errors will be corrected; (c) the Services will meet your specific requirements; or (d) any results obtained through the Services will be accurate or reliable.</p>
      </Section>

      <Section id="11" title="Limitation of Liability">
        <div className="font-mono text-lg md:text-xl font-bold uppercase text-white bg-[#1a1a1a] p-8 md:p-12 border-4 border-black shadow-[12px_12px_0_0_#b19cd9] leading-[1.8] tracking-widest text-center">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ZUPSILON, ITS OFFICERS, DIRECTORS, OR AFFILIATES BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF THE SERVICES — INCLUDING LOSS OF PROFITS, LOSS OF DATA, OR BUSINESS INTERRUPTION — EVEN IF ZUPSILON HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </div>
        <p className="mt-10">Zupsilon's total aggregate liability to you for all claims arising under or related to these Terms shall not exceed the greater of: (a) the total amount you paid to Zupsilon in the twelve (12) months immediately preceding the event giving rise to the claim; or (b) one hundred Indian Rupees (INR 100).</p>
      </Section>

      <Section id="12" title="Indemnification">
        <p>You agree to indemnify, defend, and hold harmless Zupsilon and its officers, directors, employees, agents, licensors, and affiliates from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of or access to the Services; (b) Your Content; (c) your breach of any provision of these Terms; or (d) your violation of any applicable law or the rights of any third party.</p>
      </Section>

      <Section id="13" title="Term & Termination">
        <p>These Terms are effective as of the date you first access or use the Services and remain in effect until terminated. You may terminate these Terms at any time by closing your account and discontinuing use of the Services.</p>
      </Section>

      <Section id="14" title="Confidentiality">
        <p>To the extent either party shares confidential information with the other in connection with the Services, the receiving party agrees to: (a) hold such information in strict confidence using at least the same degree of care it uses to protect its own confidential information (but no less than reasonable care); and (b) not disclose such information to any third party without the disclosing party's prior written consent, except as required by law.</p>
      </Section>

      <Section id="15" title="Governing Law & Dispute Resolution">
        <p>These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict-of-law principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.</p>
        <p>Before initiating any formal legal proceedings, you agree to first contact Zupsilon at <b className="bg-black text-white px-2 py-1 mx-1">legal@zupsilon.ai</b> and make a good-faith effort to resolve the dispute informally. Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach, termination, or validity thereof, that cannot be resolved informally shall be subject to the exclusive jurisdiction of the competent courts located in Gurugram, Haryana, India. You irrevocably consent to the personal jurisdiction of such courts.</p>
      </Section>

      <Section id="16" title="General Provisions">
        <SubSection title="16.1 Entire Agreement">
          <p>These Terms, together with our Privacy Policy and any additional terms applicable to specific Services, constitute the entire agreement between you and Zupsilon with respect to the subject matter hereof, and supersede all prior or contemporaneous understandings, representations, and agreements.</p>
        </SubSection>
        <SubSection title="16.2 Severability">
          <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions shall continue in full force and effect.</p>
        </SubSection>
        <SubSection title="16.3 Waiver">
          <p>No failure or delay by Zupsilon in exercising any right, power, or privilege under these Terms shall operate as a waiver thereof, nor shall any single or partial exercise of any right, power, or privilege preclude any other or further exercise thereof.</p>
        </SubSection>
        <SubSection title="16.4 Assignment">
          <p>You may not assign or transfer any of your rights or obligations under these Terms without our prior written consent. Zupsilon may assign these Terms in whole or in part in connection with a merger, acquisition, corporate reorganization, or sale of assets, without restriction.</p>
        </SubSection>
        <SubSection title="16.5 Force Majeure">
          <p>Zupsilon shall not be liable for any failure or delay in the performance of its obligations under these Terms to the extent such failure or delay is caused by circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, civil unrest, labor disputes, governmental action, or failures of third-party infrastructure providers.</p>
        </SubSection>
        <SubSection title="16.6 Notices">
          <p>All notices to Zupsilon under these Terms must be sent in writing to legal@zupsilon.ai. Notices will be deemed received on the date sent. We may provide notices to you via email to the address associated with your account or through a notification on the platform.</p>
        </SubSection>
      </Section>
    </>
  );
}
