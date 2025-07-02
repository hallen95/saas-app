import React from "react";
import { Button } from "../components/ui/button";
import CompanionCard from "../components/CompanionCard";
import Cta from "@/components/CTA";
import CompanionList from "../components/CompanionsList";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

export const dynamic = "force-dynamic";

const Page = async () => {
  const { companions } = await getAllCompanions({ limit: 3 });
  const recentSessions = await getRecentSessions(10);
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
      <Button>Lets get started</Button>
    </main>
  );
};

export default Page;
