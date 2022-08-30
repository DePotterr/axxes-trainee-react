export const USERS = {
  EMPLOYEE: "Employee",
  ADMIN: "Admin",
}

export const MEETING_TYPES = [
  {
    label: "Follow up",
    id: "followUp",
  },
  {
    label: "Recap",
    id: "recap",
  },
  {
    label: "Evolution",
    id: "evolution",
  },
]

export const MEETINGS = [
  {
    id: 1,
    type: "evolution",
    date: "30/12/2022",
    duration: "1",
    invitees: ["Bob"],
  },
  {
    id: 2,
    type: "evolution",
    date: "30/12/2022",
    duration: "1",
    invitees: ["Tom"],
  },
  {
    id: 3,
    type: "recap",
    date: "30/12/2022",
    duration: "1",
    invitees: ["Lisa", "Bert"],
  },
  {
    id: 4,
    type: "recap",
    date: "30/12/2022",
    duration: "1",
    invitees: ["Koen"],
  },
  {
    id: 5,
    type: "followUp",
    date: "30/12/2022",
    duration: "1",
    invitees: ["Andrea"],
  },
]

export const TIMER_VALUE = 60
