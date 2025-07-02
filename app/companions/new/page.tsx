import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      {canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1 className="">Companion Builder</h1>

          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <Image
            src="/images/limit.svg"
            alt="companion limit reach"
            width={360}
            height={230}
          />
          <div className="cta-badge">Upgrade your plan</div>
          <h1 className="">You&apos;ve reached the limit of companions</h1>
          <p className="">Upgrade your plan to create more companions</p>
          <Link href="/subscription" className="btn-primary">
            Upgrade my plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanion;
