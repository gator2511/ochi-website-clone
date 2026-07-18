import Head from "next/head";
import Link from "next/link";
import { Curve } from "@/components";

const sections = [
	{
		number: "01",
		title: "About this policy",
		content: (
			<>
				<p>
					GT Marketing respects your privacy. This Privacy Policy explains how
					we collect, hold, use and disclose personal information when you
					visit gtmarketing.io, submit an enquiry, communicate with us or use
					our services.
				</p>
				<p>
					We aim to handle personal information consistently with the Privacy
					Act 1988 (Cth) and the Australian Privacy Principles where they
					apply to us.
				</p>
			</>
		),
	},
	{
		number: "02",
		title: "Information we collect",
		content: (
			<>
				<p>Depending on how you interact with us, we may collect:</p>
				<ul>
					<li>your name, email address and other contact details;</li>
					<li>your business or organisation name;</li>
					<li>
						project goals, preferred completion date, budget range and details
						you include in an enquiry;
					</li>
					<li>
						communications, proposals, meeting notes, feedback and service
						records;
					</li>
					<li>
						website and device information such as IP address, browser type,
						referring page, access time and security logs; and
					</li>
					<li>
						payment, invoicing and transaction information where you become a
						client.
					</li>
				</ul>
				<p>
					Please do not include health information, disability information or
					other sensitive personal information in the general contact form
					unless it is genuinely necessary and we have asked you to provide it.
				</p>
			</>
		),
	},
	{
		number: "03",
		title: "How we collect information",
		content: (
			<>
				<p>We may collect personal information:</p>
				<ul>
					<li>directly from you through our contact form, email or meetings;</li>
					<li>when you engage us or request a proposal;</li>
					<li>
						from publicly available business sources and professional networks;
					</li>
					<li>from referral partners where appropriate; and</li>
					<li>
						automatically through hosting, security and website technologies.
					</li>
				</ul>
			</>
		),
	},
	{
		number: "04",
		title: "Why we use your information",
		content: (
			<>
				<p>We may use personal information to:</p>
				<ul>
					<li>respond to enquiries and assess whether we can assist you;</li>
					<li>prepare proposals, quotations and service agreements;</li>
					<li>deliver, manage and improve our marketing services;</li>
					<li>manage client relationships, billing and administration;</li>
					<li>operate, secure, troubleshoot and improve our website;</li>
					<li>comply with legal, regulatory and insurance obligations; and</li>
					<li>
						send marketing communications where you have consented or where
						otherwise permitted by law.
					</li>
				</ul>
				<p>
					You may opt out of marketing communications at any time by using the
					unsubscribe option provided or emailing us.
				</p>
			</>
		),
	},
	{
		number: "05",
		title: "Contact forms and database storage",
		content: (
			<>
				<p>
					When you submit the contact form, the information is processed by
					Netlify Forms, recorded in our Netlify project and copied to our
					contact-submissions database so we can organise and respond to your
					enquiry. A notification may also be sent to our business email.
				</p>
				<p>
					We use the information submitted through the form only for enquiry
					management, client development, service delivery, security and
					related business administration unless you separately agree to
					receive marketing.
				</p>
			</>
		),
	},
	{
		number: "06",
		title: "Cookies and technical information",
		content: (
			<>
				<p>
					Our website and hosting providers may use essential cookies, logs and
					similar technologies to deliver pages, maintain security, prevent
					abuse and understand technical performance. If we introduce
					non-essential analytics or advertising cookies, we will update this
					policy and provide any consent controls required by law.
				</p>
				<p>
					You can control cookies through your browser settings, although
					disabling essential technologies may affect site functionality.
				</p>
			</>
		),
	},
	{
		number: "07",
		title: "Disclosure and service providers",
		content: (
			<>
				<p>We may disclose personal information to:</p>
				<ul>
					<li>
						hosting, database, email, CRM, analytics, automation and technology
						providers that support our operations;
					</li>
					<li>
						professional advisers such as accountants, lawyers, insurers and IT
						specialists;
					</li>
					<li>
						contractors or collaborators who need the information to perform
						agreed services; and
					</li>
					<li>
						government, regulatory or law-enforcement bodies where required or
						authorised by law.
					</li>
				</ul>
				<p>
					We do not sell personal information. We take reasonable steps to use
					service providers that handle information securely and only for the
					purposes for which it was provided.
				</p>
			</>
		),
	},
	{
		number: "08",
		title: "Overseas processing",
		content: (
			<>
				<p>
					Some technology providers we use, including Netlify, are based
					overseas or use infrastructure and subprocessors outside Australia.
					As a result, personal information may be processed or stored in the
					United States and other countries where those providers operate.
				</p>
				<p>
					Privacy protections in those countries may differ from Australian
					law. We take reasonable steps appropriate to the circumstances when
					selecting and managing service providers.
				</p>
			</>
		),
	},
	{
		number: "09",
		title: "Security and retention",
		content: (
			<>
				<p>
					We use reasonable administrative, technical and organisational
					measures designed to protect personal information from misuse,
					interference, loss and unauthorised access, modification or
					disclosure. No internet transmission or storage system can be
					guaranteed to be completely secure.
				</p>
				<p>
					We retain personal information only for as long as reasonably needed
					for the purpose for which it was collected, to maintain business and
					tax records, resolve disputes and meet legal obligations. Information
					that is no longer required is deleted, de-identified or securely
					disposed of where practicable.
				</p>
			</>
		),
	},
	{
		number: "10",
		title: "Access and correction",
		content: (
			<>
				<p>
					You may request access to personal information we hold about you or
					ask us to correct information that is inaccurate, incomplete or out
					of date. You may also ask us to delete information where we are not
					required to retain it.
				</p>
				<p>
					Email your request to gundeep@gtmarketing.io. We may need to verify
					your identity before processing it. We will respond within a
					reasonable period and explain any lawful reason why a request cannot
					be completed in full.
				</p>
			</>
		),
	},
	{
		number: "11",
		title: "Privacy complaints",
		content: (
			<>
				<p>
					To raise a privacy concern, email gundeep@gtmarketing.io with enough
					detail for us to understand and investigate the issue. We will
					acknowledge the complaint and aim to provide a response within a
					reasonable period.
				</p>
				<p>
					If you are not satisfied with our response and the Privacy Act applies
					to the matter, you may contact the Office of the Australian
					Information Commissioner through its official website.
				</p>
			</>
		),
	},
	{
		number: "12",
		title: "External links and social media",
		content: (
			<p>
				Our website links to third-party platforms such as Facebook,
				Instagram, LinkedIn and Google Maps. Those services operate under
				their own privacy policies. We are not responsible for how third-party
				websites collect or use information after you leave our website.
			</p>
		),
	},
	{
		number: "13",
		title: "Changes to this policy",
		content: (
			<p>
				We may update this policy when our services, technology or legal
				requirements change. The latest version will be published on this page
				with the updated effective date.
			</p>
		),
	},
];

export default function PrivacyPolicy() {
	return (
		<>
			<Head>
				<title>Privacy Policy | GT Marketing</title>
				<meta
					name="description"
					content="Learn how GT Marketing collects, stores, uses and protects personal information submitted through gtmarketing.io."
				/>
			</Head>

			<Curve backgroundColor="#f1f1f1">
				<main className="w-full bg-background text-secondry padding-x pt-[150px] pb-[140px] md:pt-[120px] sm:pt-[100px] xm:pt-[100px]">
					<header className="w-full border-b border-[#21212155] pb-[70px] md:pb-[55px] sm:pb-[40px] xm:pb-[40px]">
						<p className="paragraph font-NeueMontreal font-medium uppercase pb-[24px]">
							GT Marketing / Legal
						</p>
						<h1 className="text-[150px] leading-[0.82] lg:text-[120px] md:text-[92px] sm:text-[64px] xm:text-[54px] font-semibold font-FoundersGrotesk uppercase tracking-[-2px]">
							Privacy
							<br />
							Policy
						</h1>
						<div className="flex justify-between gap-[30px] pt-[55px] sm:flex-col xm:flex-col">
							<p className="paragraph font-NeueMontreal max-w-[680px]">
								This policy explains how GT Marketing manages personal information
								collected through this website and our business activities.
							</p>
							<p className="paragraph font-NeueMontreal whitespace-nowrap">
								Effective: 18 July 2026
							</p>
						</div>
					</header>

					<div className="w-full grid grid-cols-12 gap-[30px] pt-[60px] sm:block xm:block">
						<aside className="col-span-3 sm:hidden xm:hidden">
							<div className="sticky top-[110px]">
								<p className="paragraph font-NeueMontreal font-medium pb-[20px]">
									Contact
								</p>
								<Link
									href="mailto:gundeep@gtmarketing.io"
									className="paragraph font-NeueMontreal underline underline-offset-4">
									gundeep@gtmarketing.io
								</Link>
								<p className="paragraph font-NeueMontreal pt-[16px]">
									130 Smith Street
									<br />
									Darwin City, NT 0800
								</p>
							</div>
						</aside>

						<div className="col-span-9">
							{sections.map((section) => (
								<section
									key={section.number}
									className="grid grid-cols-9 gap-[25px] border-b border-[#21212155] py-[42px] sm:block xm:block">
									<p className="col-span-1 paragraph font-NeueMontreal font-medium sm:pb-[12px] xm:pb-[12px]">
										{section.number}
									</p>
									<h2 className="col-span-3 text-[38px] leading-[1] md:text-[32px] sm:text-[30px] xm:text-[28px] font-FoundersGrotesk font-semibold uppercase sm:pb-[20px] xm:pb-[20px]">
										{section.title}
									</h2>
									<div className="col-span-5 space-y-[18px] paragraph font-NeueMontreal [&_ul]:list-disc [&_ul]:pl-[22px] [&_li]:mb-[8px]">
										{section.content}
									</div>
								</section>
							))}

							<section className="pt-[55px]">
								<h2 className="text-[52px] leading-[0.95] md:text-[44px] sm:text-[38px] xm:text-[34px] font-FoundersGrotesk font-semibold uppercase">
									Contact GT Marketing
								</h2>
								<div className="flex gap-[40px] pt-[24px] sm:flex-col xm:flex-col sm:gap-[12px] xm:gap-[12px]">
									<Link
										href="mailto:gundeep@gtmarketing.io"
										className="paragraph font-NeueMontreal underline underline-offset-4">
										gundeep@gtmarketing.io
									</Link>
									<p className="paragraph font-NeueMontreal">
										130 Smith Street, Darwin City, Northern Territory 0800
									</p>
								</div>
							</section>
						</div>
					</div>
				</main>
			</Curve>
		</>
	);
}
