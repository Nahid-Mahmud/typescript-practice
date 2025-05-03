{
  //Spread operator

  const peopleOne: string[] = ["nahid", "ruhi"];
  const peopleTwo: string[] = ["nasima", "ripon"];

  peopleTwo.push(...peopleOne);

  type TteamA = {
    lead: string;
    frontend: string;
    backend: string;
    qa: string;
  };

  type TteamB = {
    projectManager: string;
    designer: string;
    fullstack: string;
    devOps: string;
  };

  const teamA: TteamA = {
    lead: "Sarah",
    frontend: "Michael",
    backend: "Emma",
    qa: "David",
  };

  const teamB: TteamB = {
    projectManager: "Jason",
    designer: "Linda",
    fullstack: "Carlos",
    devOps: "Priya",
  };

  const fullTeam: TteamA & TteamB = {
    ...teamA,
    ...teamB,
  };
  //rest operator
  //destructuring

  const logFriendsName = (...friendsNames: string[]): void => {
    friendsNames?.forEach((name: string) => console.log(`friend name is ${name}`));
  };

  logFriendsName("Nahid", "Mohanto");
}
