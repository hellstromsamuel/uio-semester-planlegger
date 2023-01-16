import { FC } from "react";
import CourseEvent from "../../../../uio-api/interfaces/CourseEvent";

interface CalendarEventProps {
  courseEvent: CourseEvent;
  setOpen: (open: boolean) => void;
  setDialogCourseEvent: (courseEvent: CourseEvent) => void;
}

export const CalendarEvent: FC<CalendarEventProps> = ({
  courseEvent,
  setOpen,
  setDialogCourseEvent,
}) => {
  console.log(courseEvent.resourcesText);

  return (
    <button className="CalendarEventButton">
      <div
        className="CalendarEventDiv"
        style={{
          borderLeft:
            "4px solid " + courseEvent.colorCode?.slice(0, -4) + "1.0)",
          backgroundColor: courseEvent.colorCode?.slice(0, -4) + "0.15)",
        }}
        onClick={() => {
          setOpen(true);
          setDialogCourseEvent(courseEvent);
        }}
      >
        <span>
          {courseEvent.dtStart.split("T")[1].slice(0, 5) +
            " - " +
            courseEvent.dtEnd.split("T")[1].slice(0, 5)}
        </span>
        <span>
          <strong>{courseEvent.courseCode}</strong>
        </span>
        <span>
          <strong>{courseEvent.activityTitle}</strong>
        </span>
        {courseEvent.rooms && (
          <span>
            <a href={courseEvent.rooms[0].roomUrl}>
              {courseEvent.rooms[0].roomAcronym}
            </a>
          </span>
        )}
      </div>
    </button>
  );
};
