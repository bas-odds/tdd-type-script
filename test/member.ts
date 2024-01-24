interface IGuest {
  name: string;
  isMember: boolean;
}

export function filterMember(guest: IGuest[]): IGuest[] {
  const listMember = guest.filter((guest) => guest.isMember);
  return listMember;
}

export function findLongestName(guest: IGuest[]): string {
  const longestName = guest.find((guest) =>
    Math.max(guest.name.length)
  )?.name;
  return longestName || "";
}

export function findMemberLongestName(guest: IGuest[]): string {
  const members = filterMember(guest);
  return findLongestName(members);
}
