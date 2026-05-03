import React from "react";

const ModelsPage = async () => {
  // API Cache -> SSG -> Static Site Generation
  //   const models = await fetch("http://localhost:8000/models/").then((res) =>
  //     res.json(),
  //   );

  // API revalidate - ISR -> Incremental Site Regeneration
  //   const models = await fetch("http://localhost:8000/models/", {next: {revalidate: 30}}).then((res) =>
  //     res.json(),
  //   );

  //   API dynamic -- SSR -> Server Site Rendering
  const models = await fetch("http://localhost:8000/models/", {
    cache: "no-store",
  }).then((res) => res.json());

  console.log("Models Data: ", models);
  return (
    <div className="space-y-10 container mx-auto">
      <h1>Models Page</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {models.map((model) => (
          <div className="border-2 border-amber-50 p-5" key={model.id}>
            <h2 className="text-2xl font-bold">{model?.title}</h2>
            <p>{model?.description}</p>
            <p className="text-xl text-green-500">${model?.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;
