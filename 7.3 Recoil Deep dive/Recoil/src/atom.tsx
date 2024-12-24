import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 4,
});

export const messagingAtom = atom({
  key: "messaging",
  default: 19,
});

export const notificationAtom = atom({  
  key: "notificationAtom",
  default: 1,
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkNotiAtom = get(networkAtom);
    const jobNotiAtom = get(jobAtom);
    const messagingNotiAtom = get(messagingAtom);
    const notificationNotiAtom = get(notificationAtom);
    return (
      networkNotiAtom + jobNotiAtom + messagingNotiAtom + notificationNotiAtom
    );
  },
});
