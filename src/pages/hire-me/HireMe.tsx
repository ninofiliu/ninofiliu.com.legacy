import { useState } from "react";
import Nav from "../../components/Nav";
import "./HireMe.css";
import { categoryBySkill, life, Skill } from "./life";

export default () => {
  const [chronological, setChronological] = useState(false);
  const [filterSkill, setFilterSkill] = useState<null | Skill>(null);

  const displayedEvents = [...life]
    .sort((a, b) => (chronological ? a.year - b.year : b.year - a.year))
    .filter((event) => filterSkill === null || event.skills.some((skill) => skill === filterSkill));

  return (
    <div className="u-article">
      <Nav />
      <h1>Hire me</h1>
      <p>
        Or just understand what I can do, because I do many things and this can be confusing, so here's basically everything I
        did ever
      </p>
      <p className="u-button-row">
        <button onClick={() => setChronological(true)} disabled={chronological}>
          Oldest first
        </button>
        <button onClick={() => setChronological(false)} disabled={!chronological}>
          Latest first
        </button>
        <button onClick={() => setFilterSkill(null)} disabled={filterSkill === null}>
          Unfilter
        </button>
        ({displayedEvents.length})
      </p>
      <hr />
      <div>
        {displayedEvents.map((event) => (
          <div key={event.name} className="HireMe-event">
            <b>
              {event.name} ({event.year})
            </b>
            <div>
              {event.description}
              {event.link && (
                <>
                  &nbsp;<a href={event.link}>[…]</a>
                </>
              )}
            </div>
            <div className="u-button-row">
              {event.skills.map((skill) => (
                <button
                  key={skill}
                  className={`HireMe-skill HireMe-skill--${categoryBySkill[skill]}`}
                  title={filterSkill === skill ? "" : `Filter by ${categoryBySkill[skill]} skills`}
                  onClick={() => setFilterSkill(skill)}
                  disabled={skill === filterSkill}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
