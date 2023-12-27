import Link from "next/link";
import Image from "next/image";
import Container from "./ui/container";

const navigation = {
  more: [
    { name: "Who we are", href: "/about" },
    { name: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <Container>
      <footer className="z-10 border-t border-gray-200 bg-white/50 py-8 backdrop-blur-lg">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/">
              <span className="sr-only">GiftCardDeals.xyz Logo</span>
              <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            </Link>
            <p className="max-w-xs text-sm text-gray-500">
              Your One-Stop Destinatation for the Best Deals on Gift Cards!
            </p>
            {/* <div className="flex items-center space-x-2">
              <a
                href="https://twitter.com/dubdotco"
                target="_blank"
                rel="noreferrer"
                className="group rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
              >
                <span className="sr-only">Twitter</span>
                <TwitterLogoIcon className="h-5 w-5 text-gray-600" />
              </a>
              <div className="h-8 border-l border-gray-200" />
              <a
                href="https://github.com/dubinc/dub"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
              >
                <span className="sr-only">Github</span>
                <GitHubLogoIcon className="h-5 w-5 text-gray-600" />
              </a>
              <div className="h-8 border-l border-gray-200" />
              <a
                href="https://www.linkedin.com/company/dubhq/"
                target="_blank"
                rel="noreferrer"
                className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedInLogoIcon className="h-5 w-5" fill="#52525B" />
              </a>
            </div> */}
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-600">Legal</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600">More</h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.more.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-900/10 pt-8">
          <p className="text-sm leading-5 text-gray-500">
            © {new Date().getFullYear()} GiftCardDeals.xyz
          </p>
        </div>
      </footer>
    </Container>
  );
}
