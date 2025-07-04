import { getAllCompanions } from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import { getSubjectColor } from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import Filters from "@/components/SubjectFilter";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const { companions } = await getAllCompanions({ subject, topic });
  console.log("companions:", companions);
  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1 className="">Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <Filters />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard
            color={getSubjectColor(companion.subject)}
            key={companion.id}
            {...companion}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
