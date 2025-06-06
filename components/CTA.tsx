import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return <section className="cta-section">
    <div className="cta-badge">Start Learning your way.</div>
    <h2 className="text-3xl font-bold">Build and Personalize Learning Companion</h2>
    <p className="">Choose from a library of 100+ subjects and topics, and let your companion guide you through your learning journey.</p>
    <Image src="images/cta.svg" alt="cta" width={362} height={232} />
    <button className="btn-primary">
      <Image src="icons/plus.svg" alt="plus" width={12} height={12} />
      <Link href="/companions/new">
        <p className="">Build Companion</p>
      </Link>
    </button>
  </section>;
};

export default Cta;
