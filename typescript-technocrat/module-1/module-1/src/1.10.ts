{
  // union types

  //   type FrontedDeveloper = "fake" | "Legit";
  //   type FullstackDeveloper = "FrontendDev" | "BackendDev";

  //   type Developer = FrontedDeveloper | FullstackDeveloper;

  //   const newDev: Developer = "BackendDev";

  //   console.log(newDev);

  //   intersection type

  type FrontendDev = {
    skills: string[];
    designation1: "frontendDev";
  };

  type BackendDev = {
    skills: string[];
    designation2: "backendDev";
  };

  type FullstackDeveloper = BackendDev & FrontendDev;

  const fullStackDev: FullstackDeveloper = {
    skills: ["HTML"],
    designation1: "frontendDev",
    designation2: "backendDev",
  };
}
