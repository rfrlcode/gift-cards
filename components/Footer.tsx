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
      <footer className="z-10 border-t border-border bg-background/50 py-8 backdrop-blur-lg">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/">
              <span className="sr-only">GiftCardDeals.xyz Logo</span>
              <Image src="/logo.svg" alt="Logo" width={50} height={50} />
            </Link>
            <p
              className="max-w-xs text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              Your One-Stop Destination for the Best Deals on Gift Cards!
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0">
            <div>
              <h3
                className="text-sm font-semibold"
                style={{ color: "var(--primary-foreground)" }}
              >
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                className="text-sm font-semibold"
                style={{ color: "var(--primary-foreground)" }}
              >
                More
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.more.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      style={{ color: "var(--foreground)" }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-8">
          <p
            className="text-sm leading-5"
            style={{ color: "var(--muted-foreground)" }}
          >
            © {new Date().getFullYear()} GiftCardDeals.xyz
          </p>
        </div>
      </footer>
    </Container>
  );
}
